import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000)
  await page.goto('https://cropgrowers-uat.brisk.ag/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Username').fill('checkly@brisk.ag');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(2000)
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(`${process.env.WATTS_CLIENT_PASS_MS}`);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(2000)
  
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(3000)
  
  // await page.getByRole('button', { name: 'Next' }).click();
  // await page.waitForTimeout(2000)


  // await page.getByRole('link', { name: 'Skip setup' }).click();
  // await page.waitForTimeout(3000)

  // await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(5000)
});
