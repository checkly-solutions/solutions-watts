import { test, expect, request } from '@playwright/test';
import fs from 'fs';
import path from 'path';
// Import the Base64 encoded string
import { textFileBase64 } from '../resources/textFile';

test.beforeAll(async () => {
  console.log('textFileBase64', textFileBase64)
  // Decode the Base64 string to binary data
  const binaryData = Buffer.from(textFileBase64, 'base64');

  // Save the Text file in the current directory
  const tempFilePath = path.join('temp_test_text.txt');
  fs.writeFileSync(tempFilePath, binaryData);

  // Verify the file exists by reading it back
  const fileExists = fs.existsSync(tempFilePath);
  console.log('Does the file exist? ', fileExists);

  // Ensure the file exists as expected
  expect(fileExists).toBe(true);
})

test('Verify Excel file exists', async ({request}) => {
  const response = await request.get(`https://www.google.com`, {
  })
  expect(response).toBeOK()
})
