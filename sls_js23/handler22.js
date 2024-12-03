'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'sare, chuddam', input: event, }, null, 2),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.football24 = async (event) => {

    console.log("football24 end point ki vachaavu --> sending payload back ", event);

    return {
        statusCode: 200,
        body: { info: 'post endpoint', data23: event }
    }
}