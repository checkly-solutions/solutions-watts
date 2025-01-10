import { test, expect } from '@playwright/test';
import { createChecklyContext } from '../../utils/checklyRequestContext';
import { signIn, sessionHandler } from '../../utils/auth-client';

const envName = 'Training DEV Bic Quoter';
const envUrl = 'https://bic-quoter-develop.azurewebsites.net/';
const envVariableName = 'DEV_TRAINING_TOKEN';
const userPass = process.env.WATTS_CLIENT_PASS_MS || 'none';
const apiKey = process.env.TOKEN_WRITER_API_KEY || 'none';
const accountID = process.env.CHECKLY_ACCOUNT_ID || 'none';

test(`${envName} token update`, async ({ page }) => {
  // Create context for issuing storate state update request
  const context = await createChecklyContext(apiKey, accountID);

  test.setTimeout(45000);
  await page.goto(`${envUrl}`);

  await signIn(page, userPass);

  let accessToken = await sessionHandler(page);

  // Store the token in context
  if (accessToken) {
    context.put(`variables/${envVariableName}`, {
      data: {
        key: `${envVariableName}`,
        value: `${accessToken}`,
      },
    });
  } else {
    console.error('Access token is not available for context storage.');
  }
});
