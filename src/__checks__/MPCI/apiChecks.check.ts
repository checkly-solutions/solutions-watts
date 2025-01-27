import * as path from 'path';
import { ApiCheck, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('post-calculatewfrppremium-2001', {
  name: 'post calculatewfrppremium 2001',
  tags: ['post', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/MpciQuoting/CalculateWfrpPremium',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});

new ApiCheck('post-getinsurableunits-2001', {
  name: 'post getinsurableunits 2001',
  tags: ['post', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/MpciQuoting/GetInsurableUnits',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('post-calculateunitquotes-2001', {
  name: 'post calculateunitquotes 2001',
  tags: ['post', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/MpciQuoting/CalculateUnitQuotes',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('post-calculateunityields-2001', {
  name: 'post calculateunityields 2001',
  tags: ['post', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/{tenantID}/Utilities/CalculateUnitYields',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('post-calculatepolicyquotes-2001', {
  name: 'post calculatepolicyquotes 2001',
  tags: ['post', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/MpciQuoting/CalculatePolicyQuotes',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('post-token-2001', {
  name: 'post token 2001',
  tags: ['post', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://dev-4eqboz3bezyl3bwn.us.auth0.com/oauth/token',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('get-health-2001-briskanalyticsapi', {
  name: 'get health 2001 briskanalyticsapi',
  tags: ['get', 'brisk', '2001', 'briskanalyticsapi'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://briskanalyticsapi.wattsandassociates.com/api/health',
    method: 'GET',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
new ApiCheck('get-health-2001-briskpassapi', {
  name: 'get health 2001 briskpassapi',
  tags: ['get', 'brisk', 'briskpassapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://briskpassapi.wattsandassociates.com/api/health',
    method: 'GET',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
      },
    ],
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
});
