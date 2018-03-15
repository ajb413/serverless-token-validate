# Serverless Token Validation Microservice

Validate a token using a PubNub Functions onRequest Handler.

Deploy the `onRequest.js` file to PubNub Functions as an On Request handler.

Input a secret into the [Vault](https://www.pubnub.com/docs/blocks/vault-module?adamb=serverless-token-validate).

Try to match the secret using `index.html`'s simple UI. Dont forget to input your service's URI into the HTML page script.