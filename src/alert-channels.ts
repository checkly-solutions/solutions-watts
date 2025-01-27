import { URL } from 'node:url'
import {
  SmsAlertChannel,
  EmailAlertChannel,
  SlackAlertChannel,
  WebhookAlertChannel,

} from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

export const smsChannel = new SmsAlertChannel('sms-channel-1', {
  phoneNumber: '18065530352',
  ...sendDefaults
})

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'dholeman@wattsandassociates.com',
  ...sendDefaults
})

export const slackChannel = new SlackAlertChannel('slack-channel-1', {
  url: new URL('https://hooks.slack.com/services/T087JQRV6DA/8295770176611/119cdb9f8fd01bacdb37d53a7f6b9cf0'),
  channel: '#ops',
  ...sendDefaults
})

export const webhookChannel = new WebhookAlertChannel('webhook-channel-1', {
  name: 'Pushover webhook',
  method: 'POST',
  url: new URL('https://webhook.site/ddead495-8b15-4b0d-a25d-f6cda4144dc7'),
  template: `{
    "token":"FILL_IN_YOUR_SECRET_TOKEN_FROM_PUSHOVER",
    "user":"FILL_IN_YOUR_USER_FROM_PUSHOVER",
    "title":"{{ALERT_TITLE}}",
    "html":1,
    "priority":2,
    "retry":30,
    "expire":10800,
    "message":"{{ALERT_TYPE}} {{STARTED_AT}} ({{RESPONSE_TIME}}ms) {{RESULT_LINK}}"
  }`,
  ...sendDefaults
})


/**
* This is a Checkly CLI AlertChannel construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#alertchannel
*/

export const teamsWebhookChannel = new WebhookAlertChannel('teamsWebhookChannel-233023', {
  name: 'Watts Teams Test',
  method: 'POST',
  url: new URL('https://prod-82.westus.logic.azure.com:443/workflows/f2aced986a904596bdab5876e6a5d4af/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wAZolylGtuFwCAtfcLu0-Oc0_MeDl9lfOuVqPUEjt98'),
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: true,
  sslExpiry: true,
  template: `{
  "type":"message",
  "attachments":[
    {
      "contentType":"application/vnd.microsoft.card.adaptive",
      "contentUrl":null,
      "content":{
        "$schema":"http://adaptivecards.io/schemas/adaptive-card.json",
        "type":"AdaptiveCard",
        "version":"1.2",
        "body":[
          {
            "type": "Container",
            "items": [
              {
                "type": "TextBlock",
                "text": "{{ALERT_TITLE}}",
                "weight": "bolder",
                "size": "medium"
              },
              {
                "type": "ColumnSet",
                "columns": [
                  {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                      {
                        "type": "TextBlock",
                        "text": "Response time: {{RESPONSE_TIME}}ms",
                        "wrap": true
                      },
                      {
                        "type": "TextBlock",
                        "text": "Location: {{RUN_LOCATION}}",
                        "wrap": true
                      },
                      {
                        "type": "TextBlock",
                        "text": "Timestamp: {{STARTED_AT}}",
                        "wrap": true
                      },
                      {{#if GROUP_NAME}}
                      {
                        "type": "TextBlock",
                        "text": "Group: {{GROUP_NAME}}",
                        "wrap": true
                      },
                      {{/if}}
                      {
                        "type": "TextBlock",
                        "text": "Tags: {{#each TAGS}} {{this}} {{#unless @last}},{{/unless}} {{/each}}",
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "actions":[
          {
            "type":"Action.OpenUrl",
            "title":"View in Checkly",
            "url":"{{RESULT_LINK}}"
          }
        ]
      }
    }
  ]
}
`,
})
