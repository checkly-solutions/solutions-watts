import { test, expect } from '@playwright/test'

test('Watts and Associates homepage', async ({ page }) => {
  const response = await page.goto("https://wattsandassociates.com/")

  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Watts and Associates - Agricultural Risk Management/)
  // await page.screenshot({ path: 'homepage.jpg' })
})
