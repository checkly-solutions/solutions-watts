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
  // Retrieve cookies from the browser context
  const cookies = await page.context().cookies();

  console.log(cookies, 'Browser Cookies');

  // array.find(obj => obj.id === 2);
  const persistingToken = cookies.find((cookie) => (cookie.name = 'ESTSAUTHPERSISTENT'));

  const persistingTokenStringified = JSON.stringify(persistingToken);

  console.log(persistingTokenStringified, 'persistingTokenStringified');

  let responseContent;
  try {
    responseContent = await context.put('variables/UAT_GREENSTONE_TOKEN', {
      data: {
        key: `UAT_GREENSTONE_TOKEN`,
        value: `${persistingTokenStringified}`,
      },
    });

    // Check the status of the response
    if (responseContent.status() > 200) {
      throw new Error(`Error: Received status ${responseContent.status}`);
    }

    // Proceed with further logic if the status is 200 or less
    console.log('Token persisted successfully');
  } catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message);
  }

  console.log(responseContent, 'storage JSON');

  await page.getByRole('button', { name: 'Yes' }).click();

  await page.waitForTimeout(5000);
});
