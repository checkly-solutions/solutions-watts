import * as path from 'path';
import { MultiStepCheck } from 'checkly/constructs';
import { smsChannel, emailChannel } from './resources/alert-channels';

const alertChannels = [smsChannel, emailChannel];

// We can define multiple checks in a single *.check.ts file.
new MultiStepCheck('multi-file-upload-check', {
  name: 'Multi File Upload',
  runtimeId: '2024.02',
  alertChannels,
  code: {
    entrypoint: path.join(__dirname, '../tests/multi/file-upload.spec.ts'),
  },
  runParallel: true,
});
