
const fs = require('fs');
const path = require('path')

// Path to your .txt file
const filePath = path.join(__dirname, '2023-Sample-M13-File.txt'); // Update to .txt

// Read the file as binary data
const fileData = fs.readFileSync(filePath);

// Convert binary data to base64 string
const base64Data = fileData.toString('base64');

// Create a JavaScript file to store the base64 string
const tsContent = `
export const textFileBase64 = "${base64Data}";
`;

fs.writeFileSync(path.join(__dirname, 'textFile.ts'), tsContent);

console.log('Text file converted to base64 and saved as textFile.ts');