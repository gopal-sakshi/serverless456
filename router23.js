function Router23(event, context, callback) {
    this.path = event.resource;    
    this.method = event.httpMethod;    
    this.callback = callback;

    this.route = function (method, path, handler) {
        // console.log(JSON.stringify(event))
        console.log(`method ===>`, this.method, method);
        console.log(`path ===> `, this.path, path);
        if (this.method === method && this.path === path) {
            try {                
                if (method !== 'GET') { event.body = JSON.parse(event.body); }
                handler(event, context, callback);
            } catch (e) { console.log('errorey'); this.callback(null, builResponse(500, "Data Error")); }
        }
    }
}

function builResponse(statusCode, body) {
    return {
        statusCode,        
        body: JSON.stringify(body),        
        headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': true, },
    };
}

module.exports = { Router23, builResponse };
