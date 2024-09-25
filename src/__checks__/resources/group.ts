import { AlertEscalationBuilder, CheckGroup, RetryStrategyBuilder } from 'checkly/constructs';
import { smsChannel, emailChannel } from './alert-channels';
const alertChannels = [smsChannel, emailChannel];

export const uatGroup = new CheckGroup('uat-check-group-1', {
  name: 'UAT - Watts Group',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'us-west-1'],
  tags: ['cli', 'uat'],
  environmentVariables: [
    { key: 'baseUrlQuoter', value: 'mpciquoterapi-uat.wattsandassociates.com', locked: false, secret: false },
    { key: 'tenantID', value: '4001', locked: false, secret: false },
    { key: 'lookupReinsuranceYear', value: '2024', locked: false, secret: false },
  ],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 30,
    maxRetries: 3,
    sameRegion: false,
  }),
  runParallel: true,
  // privateLocations: ['private-infra']
});

export const prodGroup = new CheckGroup('prod-check-group-1', {
  name: 'PROD - Watts Group',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'us-west-1'],
  tags: ['cli', 'prod'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 30,
    maxRetries: 3,
    sameRegion: false,
  }),
  runParallel: true,
  // privateLocations: ['private-infra']
});
