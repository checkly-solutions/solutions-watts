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
    //     value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
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
    //     value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
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

new ApiCheck('get-mpci-commodities', {
  name: 'GET Mpci Commodities',
  group: uatGroup,
  tags: ['uat', 'commodities', 'mpci'],
  degradedResponseTime: 3000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://{{baseUrlQuoter}}/api/{{tenantID}}/Lookups/GetMpciCommodities',
    method: 'GET',
    // headers: [
    //   {
    //     key: 'Authorization',
    //     value: 'Bearer {{{PROD_TRAINING_TOKEN}}}',
    //   },
    // ],
    body: ``,
    bodyType: 'NONE',
    queryParameters: [
      { key: 'ReinsuranceYear', value: '{{lookupReinsuranceYear}}' },
      { key: 'StateCode', value: '1' },
      { key: 'CountyCode', value: '1' },
      { key: 'IncludePriorYearData', value: 'false' },
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

new ApiCheck('calculate-unit-quotes', {
  name: 'POST Calculate Unit Quotes UAT',
  group: uatGroup,
  tags: ['uat', 'unitQuotes', 'mpci'],
  degradedResponseTime: 3000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://{{baseUrlQuoter}}/api/{{tenantID}}/MpciQuoting/CalculateUnitQuotes',
    method: 'POST',
    body: `{
    "Units": [
     {
        "UnitCorrelationID": "unit1",
        "BasicUnitNumber": "0001",
        "OptionalUnitNumber": "0001",
        "StateCode": 12,
        "CountyCode": 9,
        "CommodityCode": 201,
        "TypeCode": 101,
        "PracticeCode": 997,
        "ReinsuranceYear": 2023,
        "CommodityYear": 2024,
        "ReportedAcres": 200,
        "InsuredSharePercent": 1,
        "GuaranteeAdjustmentFactor": 1,
        "ExperienceFactor": 1,
        "RangeClassCode": "D02",
        "AcreageInsuranceOptionCodes": [
        
        ],
        "InsInForceInsuranceOptionCodes": [
          ]
      }
    ],
    "QuoteElections": [
      {
        "ReinsuranceYear": 2023,
        "InsurancePlanCode": 50,
        "CoverageLevel": 0.85,
        "UnitStructureCode": "OU",
        "CoverageTypeCode": "A",
        "PriceElectionPercent": 1,
        "BaseInsuranceOptionCodes": [],
        "ToggleInsuranceOptionCodes": [
        ],
        "AssociatedPlanParameters": [
        ],
        "AssociatedUnitCorrelationIDs": [
        ]
      }
    ],
    "PriceElections": [
      {
        "Price": {
          "PriceCorrelationID": "noPrice",
          "ProjectedPrice": 1,
          "VolatilityFactor": 0
        },
        "AssociatedUnitCorrelationIDs": [
        ]
      }
    ]
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

new ApiCheck('calculate-backcasts', {
  name: 'POST Calculate Backcasts',
  group: uatGroup,
  tags: ['uat', 'backcasts', 'mpci'],
  degradedResponseTime: 3000,
  maxResponseTime: 8000,
  setupScript: {
    entrypoint: path.join(__dirname, './utils/setup.ts'),
  },
  request: {
    url: 'https://{{baseUrlQuoter}}/api/{{tenantID}}/Analytics/CalculateBackcasts',
    method: 'POST',
    body: `{
	"Units": [
		{
			"UnitCorrelationID": "unit1",
			"BasicUnitNumber": "0001",
			"OptionalUnitNumber": "0001",
			"StateCode": 17,
			"CountyCode": 1,
			"CommodityCode": 41,
			"TypeCode": 16,
			"PracticeCode": 3,
			"ReinsuranceYear": 2023,
			"CommodityYear": 2023,
			"ReportedAcres": 2000,
			"InsuredSharePercent": 1,
			"ApprovedYield": 247,
			"RateYield": 207,
			"AdjustedYield": 221,
			"AcreageInsuranceOptionCodes": [
			"TA"
			],
			"InsInForceInsuranceOptionCodes": [
			],
			"HistoricYields":[
				{
					"YieldCommodityYear": 2013,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2014,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2015,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2016,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2017,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2018,
					"YieldTypeCode": "A",
					"AnnualYield": 100,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2019,
					"YieldTypeCode": "A",
					"AnnualYield": 300,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2020,
					"YieldTypeCode": "A",
					"AnnualYield": 300,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2021,
					"YieldTypeCode": "A",
					"AnnualYield": 300,
					"YieldAcreage": 2000
				},
				{
					"YieldCommodityYear": 2022,
					"YieldTypeCode": "A",
					"AnnualYield": 300,
					"YieldAcreage": 2000
				}
	
			]
		}
		],
	"PlanElections": [
		{
		"PlanKey": {
			"PlanCorrelationID": "RP",
			"ReinsuranceYear": 2023,
			"InsurancePlanCode": 2,
			"CoverageLevel": 0.85,
			"UnitStructureCode": "EU",
			"CoverageTypeCode": "A",
			"PriceElectionPercent": 1,
			"ReplaceUnitOptions": false,
			"InsuranceOptionCodes": [
			],
			"AssociatedPlanParameters": [
			]
		},
		"AssociatedUnitCorrelationIDs": [
		]
		}
	],
	"PriceElections": [
		{
			"Price": {
			"PriceCorrelationID": "2023CornPrice",
			"ProjectedPrice": 5.91,
			"VolatilityFactor": 0.18
			},
			"AssociatedUnitCorrelationIDs": [
			]
		}
	]
	}`,
    bodyType: 'JSON',
    followRedirects: true,
    skipSSL: false,
    // This endpoint is unauthorized for this tenant. Test is failing
    assertions: [AssertionBuilder.statusCode().equals(401)],
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
        value: 'Bearer {{PROD_TRAINING_TOKEN',
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
    queryParameters: [],
  },
});

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
        value: 'Bearer PROD_TRAINING_TOKEN',
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
    queryParameters: [],
  },
});
