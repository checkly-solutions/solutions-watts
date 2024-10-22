import * as path from 'path';
import { ApiCheck, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('post-calculateindemnityscenarios-2001', {
  name: 'post calculateindemnityscenarios 2001',
  tags: ['post', 'analytics', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Analytics/CalculateIndemnityScenarios',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{WATTS_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
