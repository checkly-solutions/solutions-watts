export async function getToken(): Promise<string> {
  console.log('Fetching a token from an imaginary auth API endpoint');
  const token: string = await new Promise((resolve) => {
    return resolve('123abc');
  });
  return token;
}

export async function signIn(page, userPass) {
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Username').fill('checkly@brisk.ag');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userPass);

  const responsePromise = page.waitForResponse(
    (response) =>
      response.url().includes('login') &&
      response.status() === 200 &&
      response.request().method() === 'POST'
  );

  await page.getByRole('button', { name: 'Sign in' }).click();
  const response = await responsePromise;

  console.log(response.status(), ' success!');

  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Yes' }).click();
}
