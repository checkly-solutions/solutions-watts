// @ts-nocheck
export async function checklyLogin(page) {
     // Navigate to the Checkly login page
  await page.goto('https://app.checklyhq.com/');

  // Fill in email and password and log in
  await page.getByPlaceholder('yours@example.com').fill('checklyautomationuser@gmail.com');
  await page.getByPlaceholder('your password').fill('String1087!');
  await page.getByLabel('Log In').click();

  // Wait for the login to complete
  await page.waitForTimeout(5000);
}

export async function block3rdPartyResources(page, thirdPartyUrls) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (thirdPartyUrls.some((regex) => regex.test(url))) {
      route.abort();
    } else {
      route.continue();
    }
  });
}

export async function fetchTestSessions(
  page,
  accountUUID,
  authToken, // Accept authToken as a parameter
  startTime,
  endTime,
  initialUrl
) {
  const testSessionIds = [];

  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    Origin: 'https://app.checklyhq.com',
    Referer: 'https://app.checklyhq.com/',
    'X-Checkly-Account': `${accountUUID}`,
    'user-agent':
      'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36',
  };

  async function getSessionData(apiUrl) {
    console.log('apiUrl', apiUrl);

    const response = await page.request.get(apiUrl, { headers });
    const responseBody = await response.json();

    // Extract sessionObject IDs and add to testSessionIds array
    const sessionObjects = responseBody.entries || [];
    const ids = sessionObjects.map((session) => session.id);
    testSessionIds.push(...ids);

    console.log('Current Test Session IDs:', testSessionIds);

    // Check if there's a nextId for pagination
    // if (responseBody.length = 20 && responseBody.nextId) {
    //   const nextId = responseBody.nextId;

    //   // Construct the new URL with the nextId for pagination
    //   const nextUrl = `https://api.checklyhq.com/accounts/${accountUUID}/test-sessions/v2?from=${startTime}&to=${endTime}&nextId=${nextId}`;
    //   console.log('Fetching next page:', nextUrl);

    //   // Recursively fetch the next page
    //   await getSessionData(nextUrl);
    // }
  }

  // Fetch the initial batch of sessions
  await getSessionData(initialUrl);

  return testSessionIds;
}
