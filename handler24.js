// const { Lambda } = require('aws-sdk')
var { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS file
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// IGNORE THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

const lambda = new LambdaClient({
    apiVersion: '2015-03-31',
    // endpoint: process.env.IS_OFFLINE ? 'http://localhost:4006' : 'https://lambda.us-east-1.amazonaws.com',
    endpoint: 'http://localhost:4004'
})

module.exports.api23 = async(event) => {
    console.log("api23 endpoint got hit ====> ", event);

    const command23 = new InvokeCommand({
        FunctionName: 'myServiceName-dev-invokedHandler',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({ data: 'foo' }),
    })

    const {Payload, LogResult } = await lambda.send(command23);
    const result = Buffer.from(Payload).toString();

    return {
        statusCode: 200,
        body: { 
            info: 'api23 endpoint', 
            data23: event, 
            time23: new Date().toISOString(),
            response: result
        }
    }

    
}