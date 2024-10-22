// @ts-nocheck
import { ApiCheck, AssertionBuilder } from 'checkly/constructs';
import * as path from 'path';
import * as fs from 'fs';

async function createApiCheck(check) {
  new ApiCheck(`${check.request.url}-api`, {
    name: check.name,
    frequency: 5,
    tags: ['API', 'dynamic', 'cli'],
    degradedResponseTime: 3000,
    maxResponseTime: 5000,
    setupScript: {
      entrypoint: path.join(__dirname, './utils/setup.ts'),
    },
    request: {
      url: check.request.url,
      method: check.request.method,
      followRedirects: true,
      skipSSL: false,
      headers: [
        {
          key: 'Authorization',
          value: check.request.headers,
        },
      ],
    },
  });
}

async function main() {
  try {
    // Read the JSON file
    const filePath = path.join(__dirname, '/utils/apiChecks.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON content
    const checks = JSON.parse(fileContent);

    // Iterate over the array and create checks
    for (const check of checks) {
      await createApiCheck(check);
    }

    console.log('API checks have been created successfully.');
  } catch (error) {
    console.error('Error creating API checks:', error.message);
  }
}

main();
