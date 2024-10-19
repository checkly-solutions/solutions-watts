// @ts-nocheck
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const accountID = process.env.ACCOUNT_UUID;
const apiKey = process.env.API_KEY;

const url1 = 'https://api.checklyhq.com/v1/checks?limit=100&page=1';
const url2 = 'https://api.checklyhq.com/v1/checks?limit=100&page=2';
const headers = {
  Authorization: `Bearer ${apiKey}`,
  accept: 'application/json',
  'x-checkly-account': `${accountID}`,
};
let apiChecks = [];

async function fetchChecks(url) {
  try {
    const response = await axios.get(url, { headers });
    const checks = response.data;

    checks.forEach((element) => {
      if (element.checkType === 'API' && element.activated === false) {
        const lastString = element.request.url.split('/').pop();
        const checkName = `${element.request.method} - ${lastString}`;

        apiChecks.push({
          name: checkName,
          request: {
            url: element.request.url,
            method: element.request.method,
            setupScript: './utils/setup.ts',
            headers: 'Bearer {{{WATTS_TOKEN}}}',
          },
        });
      }
    });

    console.log(apiChecks);
  } catch (error) {
    console.error('Error making the request:', error.message);
    console.log('accountID, ' + accountID);
    console.log('apiKey, ' + apiKey);
  }
}

async function main() {
  await fetchChecks(url1);
  await fetchChecks(url2);

  fs.writeFile('apiChecks.json', JSON.stringify(apiChecks, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('apiChecks have been written to apiChecks.json');
    }
  });
}

main();
