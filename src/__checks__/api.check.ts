import * as path from 'path';
import { ApiCheck, AssertionBuilder, Frequency } from 'checkly/constructs';
import { uatGroup, prodGroup } from './resources/group';

new ApiCheck('get-mpci-states', {
  name: 'GET Mpci States UAT',
  group: uatGroup,
  tags: ['uat', 'states', 'mpci'],
  degradedResponseTime: 1000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/Lookups/GetMpciStates?ReinsuranceYear=2024',
    method: 'GET',
    // headers: [
    //   {
    //     key: 'Authorization',
    //     value: 'Bearer {{{WATTS_TOKEN}}}',
    //   },
    // ],
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
});

new ApiCheck('get-mpci-counties', {
  name: 'GET Mpci Counties UAT',
  group: uatGroup,
  tags: ['uat', 'counties', 'mpci'],
  degradedResponseTime: 3000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/Lookups/GetMpciCounties?ReinsuranceYear=2024&StateCode=46',
    method: 'GET',
    // headers: [
    //   {
    //     key: 'Authorization',
    //     value: 'Bearer {{{WATTS_TOKEN}}}',
    //   },
    // ],
    body: `{
      "ReinsuranceYear": 2023,
      "StateCode": 48,
      "SalesClosingDate": "2023-01-31T00:00:00",
      "CommodityCode": 18
    }`,
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
});

new ApiCheck('get-mpci-commodoties', {
  name: 'GET Mpci Commodoties',
  group: uatGroup,
  tags: ['uat', 'commodities', 'mpci'],
  degradedResponseTime: 3000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/Lookups/GetMpciCommodities?ReinsuranceYear=2025&StateCode=1&CountyCode=1&IncludePriorYearData=false',
    method: 'GET',
    // headers: [
    //   {
    //     key: 'Authorization',
    //     value: 'Bearer {{{WATTS_TOKEN}}}',
    //   },
    // ],
    body: `{
    "ReinsuranceYear": 2023,
    "StateCode": 6,
    "CountyCode": 107,
    "SalesClosingDate": "2023-03-15T00:00:00"
    }`,
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
});

new ApiCheck('get-mpci-quoter-api-uat-health', {
  name: 'GET MPCI Quoter API UAT Health',
  group: uatGroup,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['uat', 'health'],
  frequency: 5,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/health',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    basicAuth: {
      username: '',
      password: '',
    },
  },
});

new ApiCheck('get-brisk-analytics-api-uat-health', {
  name: 'GET Brisk Analytics API UAT Health',
  group: uatGroup,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['uat', 'health'],
  frequency: 5,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://briskanalyticsapi-uat.wattsandassociates.com/api/health',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    basicAuth: {
      username: '',
      password: '',
    },
  },
});

new ApiCheck('get-brisk-pass-api-uat-health', {
  name: 'GET Brisk Pass API UAT Health',
  group: uatGroup,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['uat', 'health'],
  frequency: 5,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://briskpassapi-uat.wattsandassociates.com/api/health',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [AssertionBuilder.statusCode().equals(200)],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    basicAuth: {
      username: '',
      password: '',
    },
  },
});

new ApiCheck('get-mpci-quoter-api-health', {
  name: 'GET MPCI Quoter API Health',
  group: prodGroup,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['prod', 'health', 'quoter'],
  frequency: 5,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/health',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    basicAuth: {
      username: '',
      password: '',
    },
  }
})

new ApiCheck('post--api-tenantId-Analytics-CalculateBackcasts', {
  name: 'POST Calculate backcasts for the specified insurable units using multiple plans and prices.',
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['api', 'uat', 'analytics', 'mpci'],
  frequency: Frequency.EVERY_5M,
  environmentVariables: [],
  maxResponseTime: 8000,
  degradedResponseTime: 1000,
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/{{tenantId}}/Analytics/CalculateBackcasts',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer WATTS_TOKEN',
      },
    ],
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
    body: '',
    bodyType: 'JSON',
    headers: [],
    queryParameters: [],
  },
})


new ApiCheck('post--api-tenantId-Analytics-CalculateIndemnityScenarios', {
  name: 'POST Calculate Indemnity Scenarios',
  runParallel: true,
  locations: ['us-east-2', 'us-west-1'],
  tags: ['api', 'uat', 'analytics', 'mpci'],
  frequency: Frequency.EVERY_5M,
  environmentVariables: [],
  maxResponseTime: 8000,
  degradedResponseTime: 1000,
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/{{tenantId}}/Analytics/CalculateIndemnityScenarios',
    method: 'POST',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer WATTS_TOKEN',
      },
    ],
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
    body: '',
    bodyType: 'JSON',
    headers: [],
    queryParameters: [],
  },
})
