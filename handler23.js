const lambdaRouter = require('./router23');
const cricket23 = require('./routes23/cricket23');
const { football23 } = require('./routes23/football23');

exports.main = (event, context, callback) => {
    console.log('inside main method23 ====> ');
    context.callbackWaitsForEmptyEventLoop = false;
    const router = new lambdaRouter.Router23(event, context, callback);
    
    router.route('GET', '/cric', (event, context, callback) => {        
        return cricket23.getPlayers(event.queryStringParameters).then((data) => {
            console.log('get players got executed23 ====> ');
            callback(null, lambdaRouter.builResponse(200, { ...data, success: true }))
        }).catch((e) => {
            console.error(e);
            callback(null, lambdaRouter.builResponse(500, { records: "ERROR", success: false }))
        });
    });

    // router.route('GET', '/fb', (event, context, callback) => {
    //     football23(event.queryStringParameters).then((data) => {
    //         callback(null, lambdaRouter.builResponse(200, {...data, success: true }))
    //     }).catch((e) => { 
    //         console.error(e);
    //         callback(null, lambdaRouter.builResponse(500, { records: "ERROR", success: false }))
    //     });
    // });

};