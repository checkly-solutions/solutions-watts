import { test, expect, request } from '@playwright/test';
import fs from 'fs';
import path from 'path';
// Import the Base64 encoded string
import { textFileBase64 } from '../resources/textFile';

let token;
let tempFilePath;
let binaryData;
let fileContent;

test.beforeAll(async () => {
  // Decode the Base64 string to binary data
  binaryData = Buffer.from(textFileBase64, 'base64');

  // Save the Text file in the current directory
  tempFilePath = path.join('temp_test_text.txt');
  fs.writeFileSync(tempFilePath, binaryData);

  // Verify the file exists by reading it back
  const fileExists = fs.existsSync(tempFilePath);

  // Ensure the file exists as expected
  expect(fileExists).toBe(true);

  fileContent = fs.readFileSync(tempFilePath, 'utf-8');
});

test('Verify Excel file exists', async ({ request }) => {
  await test.step('POST create token', async () => {
    const tokenResponse = await request.post(
      `https://dev-4eqboz3bezyl3bwn.us.auth0.com/oauth/token`,
      {
        data: {
          client_id: 'kyMHQVuw1NHqpmMwdL4O1n52QSx8TcBf',
          client_secret: 'IeZVnBmz1eYpP9XfftUbNmr9SEWEsLf3piSTuozEqo3SSmNnR7Qjy2ZlAPGTfVYa',
          audience: 'wattsandassociates.com/api',
          grant_type: 'client_credentials',
        },
      }
    );
    expect(tokenResponse).toBeOK();

    const responseBody = await tokenResponse.json();

    token = responseBody.access_token;
  });

  await test.step('POST submit file for upload', async () => {
    console.log('fileContent ', fileContent);
    const fileUploadResponse = await request.post(
      'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/MpciQuoting/CalculatePolicyQuotes?PassSchemaNumber=1&PassSchemaYear=2023',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        multipart: {
          m13Data: {
            name: '2023 Sample M13 File.txt', // File name
            mimeType: 'text/plain', // Explicitly set the mime type
            buffer: Buffer.from(fileContent), // Converting content to buffer
          },
          quoteParameters: JSON.stringify({
            reinsuranceYearOverride: 2023,
            prices: [
              {
                aipAcreageKey: '718339000003005311',
                aipInsuranceInForceKey: '718339',
                aipCode: 'FA',
                aipPolicyProducerKey: 'P10000000300531',
                projectedPrice: 4.7,
                volatilityFactor: 0.2,
                reinsuranceYear: 2024,
              },
              {
                aipAcreageKey: '436504000003005311',
                aipInsuranceInForceKey: '436504',
                aipCode: 'FA',
                aipPolicyProducerKey: 'P10000000300531',
                projectedPrice: 4.7,
                volatilityFactor: 0.2,
                reinsuranceYear: 2024,
              },
            ],
          }),
        },
      }
    );
    expect(fileUploadResponse.ok()).toBeTruthy(); // Validate the response
    // console.log("fileUploadResponse", fileUploadResponse)
  });
});
