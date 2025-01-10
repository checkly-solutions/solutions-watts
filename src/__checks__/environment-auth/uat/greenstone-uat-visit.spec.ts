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

  const persistingTokenStringified = JSON.stringify(persistingToken)

  console.log(persistingTokenStringified, 'persistingTokenStringified')

  let responseContent
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
  await page.waitForTimeout(3000);


  // // Retrieve cookies from the browser context
  // const cookies = await page.context().cookies();

  // console.log(cookies, 'Browser Cookies');

  await page.reload()
});


// import { test, expect,  } from '@playwright/test';
// import { createChecklyContext } from '../../utils/checklyRequestContext';

// const userPass = process.env.WATTS_CLIENT_PASS_MS || 'none';
// const apiKey = process.env.TOKEN_WRITER_API_KEY || 'none';
// const accountID = process.env.CHECKLY_ACCOUNT_ID || 'none';

// test('test', async ({  browser }) => {
//   test.setTimeout(120000)
  
//   // Create context for issuing storate state update request
//   const context = await createChecklyContext(apiKey, accountID);

//   let response = await context.get('variables/UAT_GREENSTONE_TOKEN', {});
  
//   // console.log(await response.body(), 'req')

//   const responseBody = await response.body()

//   const responseBodyString = responseBody.toString(); 

//   // console.log(responseBodyString,' environmentVariable value');

//   const parsedBody = JSON.parse(responseBodyString)

//   // console.log(parsedBody, ' parsedBody')

//   const cookieDetails = JSON.parse(parsedBody.value);

//   const browserContext = await browser.newContext();
//   await browserContext.addCookies([cookieDetails]);
  
//   const page = await browserContext.newPage();
//   await page.goto('https://greenstone-uat.brisk.ag/', {waitUntil: 'load'});

//   const loadResponsePromise = page.waitForResponse(
//     (response) =>
//       response.url() ===
//         'https://greenstone-uat.brisk.ag/quoter-api/preferences/quoter/detailed/user' &&
//       response.status() === 200
//   );

//   await page.reload({waitUntil: 'networkidle'});
//   const cookies = await page.context().cookies();

//   const cookie = cookies.find((c) => c.name === cookieDetails.name);
//   // expect(cookie?.value).toBe(cookieDetails.value);
//   console.log(cookie, 'cookie after reload')

//   const loadResponse = await loadResponsePromise;

//   console.log(loadResponse.status(), ' success!');

//   // const responsePromise = page.waitForResponse(
//   //   (response) =>
//   //     response.url() ===
//   //       'https://login.microsoftonline.com/c60d7add-e838-4b02-91ab-74efb7f856cd/login' &&
//   //     response.status() === 200 &&
//   //     response.request().method() === 'POST'
//   // );

//   // await page.getByRole('button', { name: 'Sign in' }).click();
//   // const response = await responsePromise;

//   // console.log(response.status(), ' success!');
//   // // Retrieve cookies from the browser context
//   // const cookies = await page.context().cookies();

//   // console.log(cookies, 'Browser Cookies');

//   // // array.find(obj => obj.id === 2);
//   // const persistingToken = cookies.find((cookie) => (cookie.name = 'ESTSAUTHPERSISTENT'));

//   // const persistingTokenStringified = JSON.stringify(persistingToken)

//   // console.log(persistingTokenStringified, 'persistingTokenStringified')

//   // // array of objects,

//   // // await page.getByRole('button', { name: 'Sign in' }).click();
//   // // await page.waitForTimeout(2000)

//   // // Create context for issuing storate state update request

//   // // let response = await page.waitForResponse((response) => {
//   // //   console.log(response.url(), 'response url being hit');
//   // //   return response.url().includes(`/c60d7add-e838-4b02-91ab-74efb7f856cd/login`);
//   // // });
//   // // const responseHeaders = await response.headers()

//   // // const success = responseBody.success;
//   // // const token = responseBody.token;

//   // // expect(success).toBe(true);
//   // // expect(token).toBeDefined();

//   // await page.getByRole('button', { name: 'Yes' }).click();
//   // await page.waitForTimeout(3000);

//   // // await page.getByRole('button', { name: 'Next' }).click();
//   // // await page.waitForTimeout(2000)

//   // // await page.getByRole('link', { name: 'Skip setup' }).click();
//   // // await page.waitForTimeout(3000)

//   // // await page.getByRole('button', { name: 'Yes' }).click();
//   // await page.waitForTimeout(5000);
// });
