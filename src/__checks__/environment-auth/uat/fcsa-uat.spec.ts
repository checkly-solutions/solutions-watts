import { test, expect } from '@playwright/test';
import { createChecklyContext } from '../../utils/checklyRequestContext';
import { signIn } from '../../utils/auth-client';

const userPass = process.env.WATTS_CLIENT_PASS_MS || 'none';
const apiKey = process.env.TOKEN_WRITER_API_KEY || 'none';
const accountID = process.env.CHECKLY_ACCOUNT_ID || 'none';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  const context = await createChecklyContext(apiKey, accountID);
  // Sign into environment
  await page.goto('https://fcsa-uat.brisk.ag/');

  signIn(page, userPass);

  await page.waitForTimeout(5000);

  
});
