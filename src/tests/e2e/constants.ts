// constants.ts

// Regular expressions for third-party URLs
const HOTJAR_REGEX = /https:\/\/(.*)hotjar\.(com|io)(.*)/i;
const FEATUREBASE_REGEX = /https:\/\/(.*)featurebase\.app(.*)/i;
const GOOGLE_REGEX =
  /https:\/\/(.*)(googletagmanager\.com|google\.com\/pagead|googleads\.g\.doubleclick\.net)(.*)/i;
const INTERCOM_REGEX = /https:\/\/(.*)(intercomcdn\.com|intercom\.io)(.*)/i;
const LINKEDIN_REGEX = /https:\/\/(.*)(licdn\.com|px\.ads\.linkedin\.com)(.*)/i;
const REDDIT_REGEX = /https:\/\/(.*)(alb\.reddit\.com|redditstatic\.com\/ads)(.*)/i;
const TWITTER_REGEX = /https:\/\/(.*)(ads-twitter\.com|t\.co|analytics\.twitter\.com)(.*)/i;

// Array of third-party URL regex patterns
const thirdPartyUrls = [
  HOTJAR_REGEX,
  FEATUREBASE_REGEX,
  GOOGLE_REGEX,
  INTERCOM_REGEX,
  LINKEDIN_REGEX,
  REDDIT_REGEX,
  TWITTER_REGEX,
];

// Other constants
const accountUUID = process.env.ACCOUNT_UUID
const startTime = '172893799';
const endTime = '1728942694';
const initialUrl = `https://api.checklyhq.com/accounts/${accountUUID}/test-sessions/v2?from=${startTime}&to=${endTime}`;

// Export the constants
export {
  HOTJAR_REGEX,
  FEATUREBASE_REGEX,
  GOOGLE_REGEX,
  INTERCOM_REGEX,
  LINKEDIN_REGEX,
  REDDIT_REGEX,
  TWITTER_REGEX,
  thirdPartyUrls,
  accountUUID,
  startTime,
  endTime,
  initialUrl,
};
