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

  await page.getByRole('button', { name: 'Yes' }).click();

  await page.waitForTimeout(5000);
}

export async function sessionHandler(page) {
  // Get session storage and store as env variable
  const sessionStorage = await page.evaluate(() => {
    return { ...sessionStorage };
  });

  console.log(sessionStorage, 'sessionStorage');
  const oidcKey = Object.keys(sessionStorage).find((key) => key.startsWith('oidc.user'));

  if (oidcKey) {
    const sessionData = sessionStorage[oidcKey];
    try {
      const parsedData = JSON.parse(sessionData); // Parse the JSON string
      let accessToken = parsedData.access_token; // Assign the access token to the outer variable
      console.log('Access Token:', accessToken);
      return accessToken;
    } catch (error) {
      console.error('Error parsing session data:', error);
    }
  } else {
    console.error('Key starting with "oidc.user" not found in session storage.');
  }
}
