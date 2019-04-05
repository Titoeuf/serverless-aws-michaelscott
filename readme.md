# Serverless Michael Scott Quotes

This is a demonstrative project for the presentation [Serverless sur AWS](https://slides.com/titoeuf/serverless-aws)
(in french).  
It provides an API handle to get a random Michael Scott quote or send a quote to a Slack channel.

An optional [Angular frontend](https://github.com/Titoeuf/angular-michaelscott) was also created for the demonstration.

## Requirements
- [NodeJS](https://nodejs.org)  
I recommend version 8.10 to match the runtime this is targeted to
- [Serverless Framework CLI](https://serverless.com)  
`npm install -g serverless`
- [AWS Credentials configured with Serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure your Slack channel

2.1. Create a new [Slack App](https://api.slack.com/apps)

2.2. Activate Incoming Webhooks and create a new hook for the targeted Channel

2.3 Copy `config.ts.example` to `config.ts` and change the `SLACK_HOOK` constant to point to your Incoming Webhook

### 3. Deploy the Serverless App

```bash
sls deploy
```

## Serverless Framework CLI reference
#### Deploy
Will create or update all ressources needed for your Serverless functions
```bash
sls deploy
```

#### Destroy
This command will delete all created resources 
```bash
sls remove
```

#### Invoke locally
Allows you to execute and test a function locally
```bash
sls invoke local --function hello
```

#### Get info
Extract information about the current environment, like the urls to reach your functions
```bash
sls info
```
