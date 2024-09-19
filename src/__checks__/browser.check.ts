import * as path from 'path';
import { BrowserCheck } from 'checkly/constructs';
import { smsChannel, emailChannel } from './resources/alert-channels';
import { websiteGroup } from './resources/group';

const alertChannels = [smsChannel, emailChannel];

// We can define multiple checks in a single *.check.ts file.
new BrowserCheck('browser-homepage-check', {
  name: 'Browser Watts landing',
  alertChannels,
  group: websiteGroup,
  code: {
    entrypoint: path.join(__dirname, '../tests/e2e/homepage.spec.ts'),
  },
  runParallel: true,
});
