---
title: Webhooks
description: Documentation on how webhooks fit into the Energy Coordination API
keywords: [api, documentation, webhooks, events]
---

## Introduction

A big part of this service is Spark sending out information about events that are occurring regarding your resources. Instead of you having to poll data periodically to figure out what's happening, you can instead set up a webhook to allow us to just tell you directly.

We allow partners to create as many webhooks as you like to facilitate multiple endpoints on your end being responsible for receiving and handling different types of data that we send.

You can for example have one webhook set up to handle events for electric vehicles and another for hot water tanks to make parsing the requests easier for strongly typed languages.

## Managing your Webhooks

%% In the future we want this to be in Spark Studio in addition to being reachable by the API %%

### Create

To create a webhook you need to send a POST to `/webhooks` with the following body:

```json
{
    "name": "My Webhook",
    "url": "https://my-webhook.com",
    "events": ["event1", "event2"]
}
```

### Update / Pause

If you want to update a webhook...

### Delete

If you want to delete bla bla....

### Testing

To test a webhook just send a POST to `/webhooks/:wh_id/test`
