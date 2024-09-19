import * as path from 'path';
import { MultiStepCheck } from 'checkly/constructs';
import { smsChannel, emailChannel } from '../alert-channels';

const alertChannels = [smsChannel, emailChannel];

// We can define multiple checks in a single *.check.ts file.
// new MultiStepCheck('upload-check', {
//   name: 'upload',
//   runtimeId: '2024.02',
//   alertChannels,
//   code: {
//     entrypoint: path.join(__dirname, 'm13-file-upload.spec.ts'),
//   },
//   runParallel: true,
// });
