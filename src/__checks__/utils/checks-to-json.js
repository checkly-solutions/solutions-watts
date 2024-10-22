// @ts-nocheck
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const accountID = process.env.ACCOUNT_UUID;
const apiKey = process.env.API_KEY;

const tenants = [];

const url1 = 'https://api.checklyhq.com/v1/checks?limit=100&page=1';
const url2 = 'https://api.checklyhq.com/v1/checks?limit=100&page=2';
const headers = {
  Authorization: `Bearer ${apiKey}`,
  accept: 'application/json',
  'x-checkly-account': `${accountID}`,
};

let tenantIds = ['2001'];
let analyticsChecks = [];
let lookupChecks = [];
let apiChecks = [];

function writeChecks(checkArray, fileName, dependencyContent) {
  // Join check array and write to file
  fs.writeFile(`../MPCI/${fileName}.check.ts`, dependencyContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });

  fs.appendFile(`../MPCI/${fileName}.check.ts`, checkArray.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`${fileName} checks have been written to ${fileName}.check.ts`);
    }
  });
}

async function fetchChecks(url) {
  try {
    const response = await axios.get(url, { headers });
    const checks = response.data;

    let checksArray;

    function createCheck(check, tags, checksArray) {
      let lastString = check.request.url.split('/').pop();
      let id = `${check.request.method}-${lastString}-2001`;
      let name = `${check.request.method} ${lastString} 2001`;
      let url = check.request.url;
      let method = check.request.method;

      checksArray.push(`new ApiCheck('${id.toLowerCase()}', {
        name: '${name.toLowerCase()}',
        tags: [${tags.map((tag) => `"${tag}"`).join(', ')}],
        setupScript: {
          entrypoint: path.join(__dirname, '../utils/setup.ts'),
          },
        frequency: 5,
        activated: true,
        request: {
          url: '${url}',
          method: '${method}',
          headers: [
            {
              key: 'Authorization',
              value: 'Bearer {{{WATTS_TOKEN}}}',
            },
          ],
          bodyType: 'JSON',
          followRedirects: true,
          skipSSL: false,
        },
        assertions: [AssertionBuilder.statusCode().equals(200)],
    })`);
    }

    checks.forEach((check) => {
      if (check.checkType === 'API' && check.activated === false) {
        let tags = [];

        // Tag handle
        tags.push(check.request.method.toLowerCase());
        check.request.url.includes('Analytics') ? tags.push('analytics') : '';
        check.request.url.includes('Lookups') ? tags.push('lookup') : '';
        check.request.url.includes('mpci') ? tags.push('mpciquoterapi') : '';
        check.request.url.includes('brisk') ? tags.push('brisk') : '';
        tags.push('2001');

        if (check.request.url.includes('Analytics') == true) {
          createCheck(check, tags, analyticsChecks);
        }

        if (check.request.url.includes('Lookups') == true) {
          createCheck(check, tags, lookupChecks);
        }

        if (!check.request.url.includes('Analytics') && !check.request.url.includes('Lookups')) {
          createCheck(check, tags, apiChecks);
        }
      }
    });

    console.log('apiChecks ' + apiChecks);
    console.log('lookupChecks ' + lookupChecks);
    console.log('analyticsChecks ' + analyticsChecks);

    return apiChecks, lookupChecks, analyticsChecks;
  } catch (error) {
    console.error('Error fetching checks:', error.message);
  }
}

async function main(fetchChecks, writeChecks) {
  const dependencyContent = `import * as path from 'path';
  import { ApiCheck, AssertionBuilder, Frequency } from 'checkly/constructs';
  
  `;

  await fetchChecks(url1);
  await fetchChecks(url2);

  // Write each array to separate files
  await writeChecks(analyticsChecks, 'analyticsChecks', dependencyContent);
  await writeChecks(lookupChecks, 'lookupChecks', dependencyContent);
  await writeChecks(apiChecks, 'apiChecks', dependencyContent);
}

main(fetchChecks, writeChecks);
