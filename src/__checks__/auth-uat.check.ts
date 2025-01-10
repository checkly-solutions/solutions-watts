import fs from 'fs';
import path from 'path';
import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'; // Replace with the actual library you are using
import { teamsWebhookChannel } from '../alert-channels'
import { authStagingGroup } from './website-group.check';

const alertChannels = [teamsWebhookChannel]
// Directory containing the files
const directoryPath = path.join(__dirname, 'environment-auth/uat');

// Read the files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(file => {
    // Get the file name without the extension
    const fileNameWithoutExtension = path.parse(file).name;

    // Create a Browser instance
  new BrowserCheck(fileNameWithoutExtension, {
      name: fileNameWithoutExtension,
      activated: true,
      muted: true,
      shouldFail: false,
      runParallel: false,
      runtimeId: '2024.02',
      alertChannels,
      locations: ['us-west-1', 'us-east-1'],
      tags: ['uat', 'auth'],
      frequency: 10,
      environmentVariables: [],
      group: authStagingGroup,
      code: {
        entrypoint: `${directoryPath}/${fileNameWithoutExtension}.ts`,
      },
      retryStrategy: RetryStrategyBuilder.linearStrategy({
        baseBackoffSeconds: 5,
        maxRetries: 1,
        maxDurationSeconds: 200,
        sameRegion: false,
      }),
    });
  });
});
