// @ts-nocheck
import axios from 'axios';
import path from 'path';
import fs from 'fs';

const accountID = process.env.ACCOUNT_UUID;
const apiKey = process.env.API_KEY;

const url = 'https://api.checklyhq.com/v1/checks?limit=100&page=1';
const headers = {
  Authorization: `Bearer ${apiKey}`,
  accept: 'application/json',
  'x-checkly-account': `${accountID}`,
};
let apiChecks = [];

axios
  .get(url, { headers })
  .then((response) => {
    // console.log(response.data.length);
    let checks = response.data;

    checks.forEach((element) => {
      if (element.checkType === 'API' && element.activated === true) {
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
    // Write the apiChecks array to a file called apiChecks.json
    fs.writeFile('apiChecks.json', JSON.stringify(apiChecks, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('apiChecks have been written to apiChecks.json');
      }
    });
  })
  .catch((error) => {
    console.error('Error making the request:', error);
  });
