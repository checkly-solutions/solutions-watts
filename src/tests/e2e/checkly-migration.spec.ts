import { test, expect, request } from '@playwright/test';
import { thirdPartyUrls, initialUrl } from './constants';
import { block3rdPartyResources, fetchTestSessions, checklyLogin } from './utils';
import path from 'path';

const accountUUID = process.env.ACCOUNT_UUID;
const startTime = '172893799';
const endTime = '1728942694';

test('block 3rd party resources and login', async ({ page, request }) => {
  test.setTimeout(90000);

  // Block third-party resources
  await block3rdPartyResources(page, thirdPartyUrls);

  // Handle auth token
  let authToken = '';
  
  page.on('response', async (response) => {
    const url = response.url();

    // Check if the URL is the login API (adjust this as needed)
    if (url.includes('/oauth/token')) {
      try {
        const jsonResponse = await response.json();
        // @ts-ignore
        authToken = jsonResponse.access_token; // Adjust key if needed
        // console.log('Auth Token:', authToken);
      } catch (err) {
        console.error('Error:', err);
      }
    }
  });

  await checklyLogin(page);

  // Call fetchTestSessions with the required parameters
  const testSessionIds = await fetchTestSessions(
    page,
    accountUUID,
    authToken, // Pass authToken here
    startTime,
    endTime,
    initialUrl
  );

  // Loop through each testSessionId
  for (const testSessionId of testSessionIds) {
    const testSessionIdUrl = `https://app.checklyhq.com/test-sessions/${testSessionId}`;
    const listeningUrl = `https://api.checklyhq.com/accounts/${accountUUID}/test-sessions/${testSessionId}`;

    // Set up promise to wait for the specific network response
    const responsePromise = page.waitForResponse((response) =>
      response.url().includes(listeningUrl)
    );

    // Navigate to the session URL to trigger the network call
    await page.goto(testSessionIdUrl);

    // Wait for the response and then log it
    const response = await responsePromise;
    const responseBody = await response.json();

    // Extract and process testSessionResults
    const testSessionResultsIds = responseBody.testSessionResults
      .filter((result) => result.checkType === 'BROWSER') // Filter for BROWSER checkType
      .map((result) => result.id); // Extract the ids

    for (const testSessionResultId of testSessionResultsIds) {
      page.on('download', async (download) => {
        // Get the suggested filename from the download
        const suggestedFilename = await download.suggestedFilename();

        // Create a new filename by appending testSessionId and testSessionResultId
        const customFilename = `${suggestedFilename}-testSessionId-${testSessionId}-testSessionResultId-${testSessionResultId}`;

        // Specify the directory and filename where you want to save the downloaded trace
        const filePath = path.join(__dirname, 'downloads', customFilename);

        // Save the file with the new name
        await download.saveAs(filePath);

        // Optionally, check if the file is a Playwright trace (.zip)
        if (filePath.endsWith('.zip')) {
          console.log('Playwright trace downloaded and saved at:', filePath);
          // You can unzip and handle the trace here if needed.
        }
      });

      const resultUrl = `https://app.checklyhq.com/test-sessions/${testSessionId}/results/${testSessionResultId}`;
      await page.goto(resultUrl);
      await page.click('[data-octicon-name="trace"]');
      await page.click('a[href^="https://fn-check-run-data"]');

      console.log(`Visited result page for testSessionResultId: ${testSessionResultId}`);
    }
    await page.waitForTimeout(1000);
  }
});
