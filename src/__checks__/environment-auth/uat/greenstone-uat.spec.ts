import { test, expect } from '@playwright/test';
import { createChecklyContext } from '../../utils/checklyRequestContext';

const userPass = process.env.WATTS_CLIENT_PASS_MS || 'none';
const apiKey = process.env.TOKEN_WRITER_API_KEY || 'none';
const accountID = process.env.CHECKLY_ACCOUNT_ID || 'none';

test('test', async ({ page }) => {
  // Create context for issuing storate state update request
  const context = await createChecklyContext(apiKey, accountID);

  test.setTimeout(60000);
  await page.goto('https://greenstone-uat.brisk.ag/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Username').fill('checkly@brisk.ag');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(`${userPass}`);

  const responsePromise = page.waitForResponse(
    (response) =>
      response.url() ===
        'https://login.microsoftonline.com/c60d7add-e838-4b02-91ab-74efb7f856cd/login' &&
      response.status() === 200 &&
      response.request().method() === 'POST'
  );
  await page.getByRole('button', { name: 'Sign in' }).click();
  const response = await responsePromise;

  console.log(response.status(), ' success!');

  await page.waitForTimeout(5000);
  // Retrieve cookies from the browser context
  // const cookies = await page.context().cookies();
  // console.log(cookies, 'Browser Cookies');

  await page.getByRole('button', { name: 'Yes' }).click();

  await page.waitForTimeout(10000);

  // Get session storage and store as env variable
  const sessionStorage = await page.evaluate(() => {
    return { ...sessionStorage };
  });

  console.log(await sessionStorage, 'session storage');

  const oidcKey = Object.keys(sessionStorage).find((key) => key.startsWith('oidc.user'));

  let accessToken;

  if (oidcKey) {
    const sessionData = sessionStorage[oidcKey];
    try {
      const parsedData = JSON.parse(sessionData); // Parse the JSON string
      accessToken = parsedData.access_token; // Assign the access token to the outer variable
      console.log('Access Token:', accessToken);
    } catch (error) {
      console.error('Error parsing session data:', error);
    }
  } else {
    console.error('Key starting with "oidc.user" not found in session storage.');
  }

  // Store the token in context
  if (accessToken) {
    context.put('variables/UAT_GREENSTONE_TOKEN', {
      data: {
        key: `UAT_GREENSTONE_TOKEN`,
        value: `${accessToken}`,
      },
    });
  } else {
    console.error('Access token is not available for context storage.');
  }

  await request.get(
    'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/Lookups/GetMpciStates?ReinsuranceYear=2024',
    {
      headers: 
        {
          isbn: '1234',
          page: 23,
        }
    }
  );
});
