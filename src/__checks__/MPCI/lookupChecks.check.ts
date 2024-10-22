import * as path from 'path';
import { ApiCheck, AssertionBuilder } from 'checkly/constructs';

new ApiCheck('get-getmpciunitstructures-2001', {
  name: 'get getmpciunitstructures 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciUnitStructures',
    method: 'GET',
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
new ApiCheck('get-getmpciinsuranceoptions-2001', {
  name: 'get getmpciinsuranceoptions 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsuranceOptions',
    method: 'GET',
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
new ApiCheck('post-getmpciinsuranceoptions-2001', {
  name: 'post getmpciinsuranceoptions 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsuranceOptions',
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
new ApiCheck('get-getmpciassociatedplans-2001', {
  name: 'get getmpciassociatedplans 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciAssociatedPlans',
    method: 'GET',
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
new ApiCheck('post-getmpciassociatedplans-2001', {
  name: 'post getmpciassociatedplans 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciAssociatedPlans',
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
new ApiCheck('get-getmpcisalesclosingdates-2001', {
  name: 'get getmpcisalesclosingdates 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSalesClosingDates',
    method: 'GET',
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
new ApiCheck('get-getmpcistates-2001', {
  name: 'get getmpcistates 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciStates',
    method: 'GET',
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
new ApiCheck('post-getmpcicounties-2001', {
  name: 'post getmpcicounties 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCounties',
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
new ApiCheck('get-getmpcipractices-2001', {
  name: 'get getmpcipractices 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPractices',
    method: 'GET',
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
new ApiCheck('post-getmpcicommodities-2001', {
  name: 'post getmpcicommodities 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCommodities',
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
new ApiCheck('post-getmpcitypes-2001', {
  name: 'post getmpcitypes 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTypes',
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
new ApiCheck('post-getmpcipractices-2001', {
  name: 'post getmpcipractices 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPractices',
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
new ApiCheck('post-getmpcityieldhistory-2001', {
  name: 'post getmpcityieldhistory 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTYieldHistory',
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
new ApiCheck('post-getmpcisubcountycodes-2001', {
  name: 'post getmpcisubcountycodes 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSubCountyCodes',
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
new ApiCheck('get-getmpcicoveragetypecodes-2001', {
  name: 'get getmpcicoveragetypecodes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCoverageTypeCodes',
    method: 'GET',
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
new ApiCheck('get-getmpcimultiplecroppingavailability-2001', {
  name: 'get getmpcimultiplecroppingavailability 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciMultipleCroppingAvailability',
    method: 'GET',
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
new ApiCheck('post-getmpcicoveragetypecodes-2001', {
  name: 'post getmpcicoveragetypecodes 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCoverageTypeCodes',
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
new ApiCheck('get-getmpciprogramindicatorcodes-2001', {
  name: 'get getmpciprogramindicatorcodes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciProgramIndicatorCodes',
    method: 'GET',
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
new ApiCheck('post-getmpcimultiplecroppingavailability-2001', {
  name: 'post getmpcimultiplecroppingavailability 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciMultipleCroppingAvailability',
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
new ApiCheck('post-getmpcitownships-2001', {
  name: 'post getmpcitownships 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTownships',
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
new ApiCheck('get-getmpcitownships-2001', {
  name: 'get getmpcitownships 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTownships',
    method: 'GET',
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
new ApiCheck('post-getmpciranges-2001', {
  name: 'post getmpciranges 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciRanges',
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
new ApiCheck('get-getmpciunitofmeasure-2001', {
  name: 'get getmpciunitofmeasure 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciUnitOfMeasure',
    method: 'GET',
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
new ApiCheck('post-getmpcicontractprice-2001', {
  name: 'post getmpcicontractprice 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciContractPrice',
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
new ApiCheck('get-getmpcipricediscoveryinfo-2001', {
  name: 'get getmpcipricediscoveryinfo 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceDiscoveryInfo',
    method: 'GET',
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
new ApiCheck('get-getmpciallcommoditiestypes-2001', {
  name: 'get getmpciallcommoditiestypes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciAllCommoditiesTypes',
    method: 'GET',
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
new ApiCheck('get-getmpcirangeclasses-2001', {
  name: 'get getmpcirangeclasses 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciRangeClasses',
    method: 'GET',
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
new ApiCheck('get-getmpciorganicpractices-2001', {
  name: 'get getmpciorganicpractices 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciOrganicPractices',
    method: 'GET',
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
new ApiCheck('get-getmpcicountyexpectedyields-2001', {
  name: 'get getmpcicountyexpectedyields 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCountyExpectedYields',
    method: 'GET',
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
new ApiCheck('get-getmpcicottonseedpublishedvalues-2001', {
  name: 'get getmpcicottonseedpublishedvalues 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCottonseedPublishedValues',
    method: 'GET',
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
new ApiCheck('get-getmpciintendeduses-2001', {
  name: 'get getmpciintendeduses 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciIntendedUses',
    method: 'GET',
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
new ApiCheck('get-getmpcirainfallindexintervaldetails-2001', {
  name: 'get getmpcirainfallindexintervaldetails 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciRainfallIndexIntervalDetails',
    method: 'GET',
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
new ApiCheck('get-getmpciyielddollarparameters-2001', {
  name: 'get getmpciyielddollarparameters 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciYieldDollarParameters',
    method: 'GET',
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
new ApiCheck('get-getmpcicommodityinsuranceoffers-2001', {
  name: 'get getmpcicommodityinsuranceoffers 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCommodityInsuranceOffers',
    method: 'GET',
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
new ApiCheck('post-getmpcistatenames-2001', {
  name: 'post getmpcistatenames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciStateNames',
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
new ApiCheck('get-getmpciinsuranceoptioncodes-2001', {
  name: 'get getmpciinsuranceoptioncodes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsuranceOptionCodes',
    method: 'GET',
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
new ApiCheck('get-getmpcicountynames-2001', {
  name: 'get getmpcicountynames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCountyNames',
    method: 'GET',
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
new ApiCheck('post-getmpcicommoditynames-2001', {
  name: 'post getmpcicommoditynames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCommodityNames',
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
new ApiCheck('get-getmpcipracticenames-2001', {
  name: 'get getmpcipracticenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPracticeNames',
    method: 'GET',
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
new ApiCheck('post-getmpcipracticenames-2001', {
  name: 'post getmpcipracticenames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPracticeNames',
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
new ApiCheck('post-getmpcitypenames-2001', {
  name: 'post getmpcitypenames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTypeNames',
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
new ApiCheck('get-getmpcitypenames-2001', {
  name: 'get getmpcitypenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTypeNames',
    method: 'GET',
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
new ApiCheck('get-getmpciinsuranceoptionnames-2001', {
  name: 'get getmpciinsuranceoptionnames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsuranceOptionNames',
    method: 'GET',
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
new ApiCheck('get-getmpciproductionrecordtypenames-2001', {
  name: 'get getmpciproductionrecordtypenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciProductionRecordTypeNames',
    method: 'GET',
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
new ApiCheck('get-getmpciintendedusenames-2001', {
  name: 'get getmpciintendedusenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciIntendedUseNames',
    method: 'GET',
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
new ApiCheck('get-getmpcientitytypenames-2001', {
  name: 'get getmpcientitytypenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciEntityTypeNames',
    method: 'GET',
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
new ApiCheck('get-getmpciorganicpracticenames-2001', {
  name: 'get getmpciorganicpracticenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciOrganicPracticeNames',
    method: 'GET',
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
new ApiCheck('get-getmpciirrigationpracticenames-2001', {
  name: 'get getmpciirrigationpracticenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciIrrigationPracticeNames',
    method: 'GET',
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
new ApiCheck('get-getcountiesbygrid-2001', {
  name: 'get getcountiesbygrid 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetCountiesByGrid',
    method: 'GET',
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
new ApiCheck('get-getintervalscountybasevalue-2001', {
  name: 'get getintervalscountybasevalue 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetIntervalsCountyBaseValue',
    method: 'GET',
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
new ApiCheck('post-getmpcistates-2001', {
  name: 'post getmpcistates 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi-uat.wattsandassociates.com/api/2001/Lookups/GetMpciStates',
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
new ApiCheck('get-getmpciirrigationpractices-2001', {
  name: 'get getmpciirrigationpractices 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciIrrigationPractices',
    method: 'GET',
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
new ApiCheck('post-getmpciprogramindicatorcodes-2001', {
  name: 'post getmpciprogramindicatorcodes 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciProgramIndicatorCodes',
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
new ApiCheck('get-getmpcitypes-2001', {
  name: 'get getmpcitypes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTypes',
    method: 'GET',
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
new ApiCheck('post-getmpcipricingdefaults-2001', {
  name: 'post getmpcipricingdefaults 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPricingDefaults',
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
new ApiCheck('get-getgrids-2001', {
  name: 'get getgrids 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetGrids',
    method: 'GET',
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
new ApiCheck('get-getmpcicontractprice-2001', {
  name: 'get getmpcicontractprice 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciContractPrice',
    method: 'GET',
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
new ApiCheck('get-getmpciyieldtypenames-2001', {
  name: 'get getmpciyieldtypenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciYieldTypeNames',
    method: 'GET',
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
new ApiCheck('get-getmpcicontiguouscounties-2001', {
  name: 'get getmpcicontiguouscounties 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciContiguousCounties',
    method: 'GET',
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
new ApiCheck('post-getmpciinsuranceplannames-2001', {
  name: 'post getmpciinsuranceplannames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsurancePlanNames',
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
new ApiCheck('get-getstatecentroids-2001', {
  name: 'get getstatecentroids 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetStateCentroids',
    method: 'GET',
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
new ApiCheck('get-getmpcistatenames-2001', {
  name: 'get getmpcistatenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciStateNames',
    method: 'GET',
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
new ApiCheck('get-getmpciintervalnames-2001', {
  name: 'get getmpciintervalnames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciIntervalNames',
    method: 'GET',
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
new ApiCheck('post-getmpciinsuranceplans-2001', {
  name: 'post getmpciinsuranceplans 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsurancePlans',
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
new ApiCheck('get-getmpcicommoditynames-2001', {
  name: 'get getmpcicommoditynames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCommodityNames',
    method: 'GET',
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
new ApiCheck('get-getmpcicroppingpractices-2001', {
  name: 'get getmpcicroppingpractices 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCroppingPractices',
    method: 'GET',
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
new ApiCheck('post-getmpcicountynames-2001', {
  name: 'post getmpcicountynames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCountyNames',
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
new ApiCheck('post-getmpcipricediscoveryinfo-2001', {
  name: 'post getmpcipricediscoveryinfo 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceDiscoveryInfo',
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
new ApiCheck('get-getmpcipreventedplantavailability-2001', {
  name: 'get getmpcipreventedplantavailability 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPreventedPlantAvailability',
    method: 'GET',
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
new ApiCheck('post-getmpcisections-2001', {
  name: 'post getmpcisections 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSections',
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
new ApiCheck('post-getmpcipreventedplantavailability-2001', {
  name: 'post getmpcipreventedplantavailability 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPreventedPlantAvailability',
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
new ApiCheck('post-getmpcidollaramountofinsurance-2001', {
  name: 'post getmpcidollaramountofinsurance 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciDollarAmountOfInsurance',
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
new ApiCheck('post-getmpciinsuranceoptionnames-2001', {
  name: 'post getmpciinsuranceoptionnames 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsuranceOptionNames',
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
new ApiCheck('get-getmpcitaxidtypenames-2001', {
  name: 'get getmpcitaxidtypenames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTaxIdTypeNames',
    method: 'GET',
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
new ApiCheck('get-getmpcipriceandvolatility-2001', {
  name: 'get getmpcipriceandvolatility 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceAndVolatility',
    method: 'GET',
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
new ApiCheck('get-getmpcipricerounding-2001', {
  name: 'get getmpcipricerounding 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceRounding',
    method: 'GET',
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
new ApiCheck('post-getmpciunitofmeasure-2001', {
  name: 'post getmpciunitofmeasure 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciUnitOfMeasure',
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
new ApiCheck('post-getmpcicoveragelevels-2001', {
  name: 'post getmpcicoveragelevels 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCoverageLevels',
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
new ApiCheck('get-getcountycentroids-2001', {
  name: 'get getcountycentroids 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetCountyCentroids',
    method: 'GET',
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
new ApiCheck('get-getmpcityieldhistory-2001', {
  name: 'get getmpcityieldhistory 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTYieldHistory',
    method: 'GET',
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
new ApiCheck('get-getmpcipriceelectionrange-2001', {
  name: 'get getmpcipriceelectionrange 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceElectionRange',
    method: 'GET',
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
new ApiCheck('get-getmpcisections-2001', {
  name: 'get getmpcisections 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSections',
    method: 'GET',
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
new ApiCheck('get-getmpcityield-2001', {
  name: 'get getmpcityield 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTYield',
    method: 'GET',
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
new ApiCheck('post-getmpciallcommoditiestypes-2001', {
  name: 'post getmpciallcommoditiestypes 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciAllCommoditiesTypes',
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
new ApiCheck('get-getbulkmpcipricingdefaults-2001', {
  name: 'get getbulkmpcipricingdefaults 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetBulkMpciPricingDefaults',
    method: 'GET',
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
new ApiCheck('get-getmpcicounties-2001', {
  name: 'get getmpcicounties 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCounties',
    method: 'GET',
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
new ApiCheck('post-getmpcityield-2001', {
  name: 'post getmpcityield 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciTYield',
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
new ApiCheck('get-getrainfallreinsuranceyears-2001', {
  name: 'get getrainfallreinsuranceyears 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetRainfallReinsuranceYears',
    method: 'GET',
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
new ApiCheck('get-getmpcipricetableauxiliarydata-2001', {
  name: 'get getmpcipricetableauxiliarydata 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceTableAuxiliaryData',
    method: 'GET',
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
new ApiCheck('get-getmpcidollaramountofinsurance-2001', {
  name: 'get getmpcidollaramountofinsurance 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciDollarAmountOfInsurance',
    method: 'GET',
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
new ApiCheck('get-getmpcisubcountycodes-2001', {
  name: 'get getmpcisubcountycodes 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSubCountyCodes',
    method: 'GET',
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
new ApiCheck('get-getmpcicoveragelevels-2001', {
  name: 'get getmpcicoveragelevels 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCoverageLevels',
    method: 'GET',
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
new ApiCheck('get-getmpcipricingdefaults-2001', {
  name: 'get getmpcipricingdefaults 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPricingDefaults',
    method: 'GET',
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
new ApiCheck('post-getmpciunitstructures-2001', {
  name: 'post getmpciunitstructures 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciUnitStructures',
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
new ApiCheck('get-getbulkmpciinsuranceoptions-2001', {
  name: 'get getbulkmpciinsuranceoptions 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetBulkMpciInsuranceOptions',
    method: 'GET',
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
new ApiCheck('post-getmpcisalesclosingdates-2001', {
  name: 'post getmpcisalesclosingdates 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciSalesClosingDates',
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
new ApiCheck('get-getmpciinsuranceplannames-2001', {
  name: 'get getmpciinsuranceplannames 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsurancePlanNames',
    method: 'GET',
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
new ApiCheck('get-getmpcicommodities-2001', {
  name: 'get getmpcicommodities 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciCommodities',
    method: 'GET',
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
new ApiCheck('get-getmpciranges-2001', {
  name: 'get getmpciranges 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciRanges',
    method: 'GET',
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
new ApiCheck('post-getmpciplanelections-2001', {
  name: 'post getmpciplanelections 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPlanElections',
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
new ApiCheck('get-getmpciinsuranceplans-2001', {
  name: 'get getmpciinsuranceplans 2001',
  tags: ['get', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciInsurancePlans',
    method: 'GET',
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
new ApiCheck('post-getmpcipriceelectionrange-2001', {
  name: 'post getmpcipriceelectionrange 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceElectionRange',
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
new ApiCheck('post-getmpcipriceandvolatility-2001', {
  name: 'post getmpcipriceandvolatility 2001',
  tags: ['post', 'lookup', 'mpciquoterapi', '2001'],
  setupScript: {
    entrypoint: path.join(__dirname, '../utils/setup.ts'),
  },
  frequency: 5,
  activated: true,
  request: {
    url: 'https://mpciquoterapi.wattsandassociates.com/api/2001/Lookups/GetMpciPriceAndVolatility',
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
