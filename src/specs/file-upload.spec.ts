import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
// Import the Base64 encoded string
import { textFileBase64 } from './resources/2023-Sample-M13-File';

test('Verify Excel file exists', async () => {
  fs.readFile('2023-Sample-M13-File.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const base64data = Buffer.from(data).toString('base64');
    console.log(base64data);
  });
  // Decode the Base64 string to binary data
  const binaryData = Buffer.from(textFileBase64, 'base64');

  // Save the Excel file in the current directory
  const tempFilePath = path.join('temp_test_excel.txt');
  fs.writeFileSync(tempFilePath, binaryData);

  // Verify the file exists by reading it back
  const fileExists = fs.existsSync(tempFilePath);
  console.log('Does the file exist? ', fileExists);

  // Ensure the file exists as expected
  expect(fileExists).toBe(true);
});
