import { AlertEscalationBuilder, CheckGroup, RetryStrategyBuilder } from 'checkly/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
const alertChannels = [smsChannel, emailChannel]

export const websiteGroup = new CheckGroup('website-check-group-1', {
  name: 'Watts Group',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'us-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({ baseBackoffSeconds: 30, maxRetries: 3, sameRegion: false }),
  runParallel: false,
  // privateLocations: ['private-infra']
})
export const authProductionGroup = new CheckGroup('watts-auth-production-1', {
  name: 'Watts Auth Production',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({ baseBackoffSeconds: 30, maxRetries: 3, sameRegion: false }),
  runParallel: false,
  // privateLocations: ['private-infra']
})

export const authStagingGroup = new CheckGroup('watts-auth-staging-1', {
  name: 'Watts Auth Staging',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'us-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({ baseBackoffSeconds: 30, maxRetries: 3, sameRegion: false }),
  runParallel: false,
  // privateLocations: ['private-infra']
})

export const authDevGroup = new CheckGroup('watts-auth-dev-1', {
  name: 'Watts Auth Dev',
  activated: true,
  muted: false,
  frequency: 5,
  runtimeId: '2024.02',
  locations: ['us-east-1', 'us-west-1'],
  tags: ['mac', 'group'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  /* All checks on this check group will have this alert escalation policy */
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
  retryStrategy: RetryStrategyBuilder.linearStrategy({ baseBackoffSeconds: 30, maxRetries: 3, sameRegion: false }),
  runParallel: false,
  // privateLocations: ['private-infra']
})
