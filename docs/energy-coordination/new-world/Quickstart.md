# Energy Coordination API Quickstart

## Introduction

This guide will help you get started with the Energy Coordination API. It will walk you through the process of authenticating with the API, registering a user and some resources, subscribing to events, and sending a report.

### Postman

We have a Postman Collection with all the endpoints from the API, as well as a folder that follows along with this guide. You can [download the Postman Collection here](link).

### Authentication

We use OAuth2 for authentication. If don't have a client ID and secret, you can create those in the [Spark Portal](https://voluespark.com).
Get an access token by sending a POST request to `https://auth.identity.volue.com/connect/token` as follows:

```bash
curl --location 'https://auth.identity.volue.com/connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=<your_client_id>' \
--data-urlencode 'client_secret=<your_client_secret>'
```

Then you can use the access token to authenticate with the API by sending it in the `Authorization` header in subsequent requests to the Energy Coordination API:

```bash
Authorization: Bearer <access_token>
```

The token is valid for 30 minutes so you will need to refresh it periodically.

### Postman Authentication

If you are using the Postman Collection, you can set up the authentication by following these steps:

1. Go to the `Variables` tab in the Collection
2. Set the `client_id` and `client_secret` variables to your client ID and secret
3. Click the `Get New Access Token` button

## 1. Registering a User

The `User` object represents a user or customer of your service. Use it to register `Meters` and `Resources` that your user owns to let us know who should get incentives based on your `Reports`.

You can create users via `POST /users`, the response is a `userId` that you can use to refer to the user in subsequent requests.

```json
{
    "userId": "string"
}
```

## 2. Registering a Vehicle

The `Vehicle` object represents a specific electric vehicle that your user owns.

You can create vehicles via `POST /users/:userId/vehicles`, the payload should be information identifying a unique vehicle:

```json
{
    "vehicleId": "<string>",
    "metadata": {
        "resourceType": "Vehicle",
        "brand": "Tesla",
        "model": "Model 3",
        "year": 2022,
        "vin": "<string>"
    }
}
```

## 3. Registering a Meter

The `Meter` object represents a specific power meter that your user owns. This is the information we give to DSOs so they can correctly send out incentives to your users.

You can create meters via `POST /users/:userId/meters`, the payload should be information identifying a unique power meter:

```json
{
    "address": {
        "street": "string",
        "city": "string",
        "zipCode": "string"
    },
    "location": {
        "latitude": 63.1,
        "longitude": 10.7
    },
    "meterPointId": "string",
    "meterNumber": "string",
    "locationType": "Residential"
}
```

In response you will get a `meterId` that you can use to refer to the meter in subsequent requests.

## 4. Registering a Resource

The `Resource` object represents a specific resource that your user owns.

You can create resources via `POST /users/:userId/resources`, the payload should be information identifying a unique resource:

```json
{
    "resourceId": "<string>",
    "metadata": {
        "resourceType": "HotWaterTank",
        "brand": "Oso",
        "model": "SuperTank",
        "capacity": 500,
        "heatingElements": [1750, 1250]
    }
}
```

## 5. Creating a webhook

You can create a webhook to receive specific events from the API. You can choose what types of events you want to receive, and what operations you want to receive events for.
To create one, send a request to `POST /webhooks`:

```json
{
    "url": "string",
    "webhookSecret": "string",
    "operations": ["Create", "Update", "Delete"],
    "eventTypes": ["PriceDelta"]
}
```

The `url` is the URL that we will send the events to. The `webhookSecret` is a secret that we will send in the `Spark-Signature` header in the request, so you can verify that the request is coming from us. The `operations` and `eventTypes` are arrays of strings that specify what operations and event types you want to receive. The possible values are:

### Operations

-   `create` -
-   `update` -
-   `delete` -

### Event Types

-   `priceDelta`

## 6. Testing the Webhook

You can test the webhook by sending a `POST /webhooks/:webhookId/test` request. This will send a test event to the webhook. So you can verify that you are receiving the events correctly, and that the `Spark-Signature` header is correct.

## 7. Sending a Report

You can send a report to the API by sending a `POST /reports` request:

```json
{
    "eventId": "string",
    "name": "Vehicle Started Charging",
    "payloads": [
        {
            "payloadType": "VehicleChargeAction",
            "resourceId": "e0fb2731-dadb-41c5-80f2-5dfcbc22b2b5",
            "location": {
                "latitude": 63.1,
                "longitude": 10.7
            },
            "actionType": "Start",
            "power": 11000,
            "stateOfCharge": 0.5,
            "batteryCapacity": 75000
        }
    ]
}
```
