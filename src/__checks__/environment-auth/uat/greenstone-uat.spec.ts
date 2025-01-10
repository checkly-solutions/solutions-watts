import { test, expect } from '@playwright/test';
import { createChecklyContext } from '../../utils/checklyRequestContext';
import { signIn } from '../../utils/auth-client';

const userPass = process.env.WATTS_CLIENT_PASS_MS || 'none';
const apiKey = process.env.TOKEN_WRITER_API_KEY || 'none';
const accountID = process.env.CHECKLY_ACCOUNT_ID || 'none';

test('test', async ({ page }) => {
  // Create context for issuing storate state update request
  const context = await createChecklyContext(apiKey, accountID);

  test.setTimeout(60000);
  await page.goto('https://greenstone-uat.brisk.ag/');

  await signIn(page, userPass);

  // await page.getByRole('button', { name: 'Yes' }).click();

  // await page.waitForTimeout(10000);

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
});
