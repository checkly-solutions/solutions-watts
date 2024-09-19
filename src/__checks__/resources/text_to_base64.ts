const fs = require('fs');

// Check if the input file is provided
if (process.argv.length < 3) {
  console.error('Usage: node text_to_base64.js <input_file>');
  process.exit(1);
}

const inputFile = process.argv[2];

// Check if the input file exists
fs.access(inputFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Error: Input file not found.');
    process.exit(1);
  }

  // Read the input file
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading input file:', err);
      process.exit(1);
    }

    // Convert the input file to base64
    const base64Data = Buffer.from(data).toString('base64');
    console.log(base64Data);
  });
});
