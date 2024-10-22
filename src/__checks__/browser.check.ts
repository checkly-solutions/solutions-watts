import * as path from 'path';
import { BrowserCheck } from 'checkly/constructs';
import { emailChannel } from './resources/alert-channels';
import { prodGroup } from './resources/group';

const alertChannels = [emailChannel];

// We can define multiple checks in a single *.check.ts file.
new BrowserCheck('browser-homepage-check', {
  name: 'Browser Watts landing',
  alertChannels,
  group: prodGroup,
  code: {
    entrypoint: path.join(__dirname, '../tests/e2e/homepage.spec.ts'),
  },
  runParallel: true,
});
