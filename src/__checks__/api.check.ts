import * as path from 'path';
import { ApiCheck, AssertionBuilder } from 'checkly/constructs';
import { websiteGroup } from './website-group.check';

new ApiCheck('get-mpci-states', {
  name: 'GET Mpci States',
  group: websiteGroup,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/4001/Lookups/GetMpciStates?ReinsuranceYear=2024',
    method: 'GET',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{WATTS_TOKEN}}}',
      },
    ],
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
  name: 'GET Mpci Counties',
  group: websiteGroup,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/Lookups/GetMpciCounties?ReinsuranceYear=2024&StateCode=46',
    method: 'GET',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{WATTS_TOKEN}}}',
      },
    ],
    body: JSON.stringify({
      ReinsuranceYear: 2023,
      StateCode: 48,
      SalesClosingDate: '2023-01-31T00:00:00',
      CommodityCode: 18,
    }),
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
  group: websiteGroup,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/Lookups/GetMpciCommodities?ReinsuranceYear=2025&StateCode=1&CountyCode=1&IncludePriorYearData=false',
    method: 'GET',
    headers: [
      {
        key: 'Authorization',
        value: 'Bearer {{{WATTS_TOKEN}}}',
      },
    ],
    body: JSON.stringify({
      ReinsuranceYear: 2023,
      StateCode: 6,
      CountyCode: 107,
      SalesClosingDate: '2023-03-15T00:00:00',
    }),
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
});
