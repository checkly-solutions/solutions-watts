import * as path from 'path';
import { MultiStepCheck } from 'checkly/constructs';
import { emailChannel } from './resources/alert-channels';
import { uatGroup } from './resources/group';

const alertChannels = [emailChannel];

// We can define multiple checks in a single *.check.ts file.
new MultiStepCheck('multi-file-upload-check', {
  name: 'Multi File Upload',
  group: uatGroup,
  runtimeId: '2024.02',
  activated: true,
  alertChannels,
  code: {
    entrypoint: path.join(__dirname, '../tests/multi/file-upload.spec.ts'),
  },
  runParallel: true,
});
