/*********************************************************************/
const { ApolloServer } = require("@apollo/server");         // apollo-server-lambda        === deprecated;
const { startServerAndCreateLambdaHandler, handlers } =  require('@as-integrations/aws-lambda');
const resolvers = {
    Query: { 
        greetings23: () => `GraphQL is Awesome23 ${new Date().toISOString()}`,
    }
}
const typeDefs = `type Query {
    greetings23: String }`
/*********************************************************************/

const server = new ApolloServer({ typeDefs, resolvers });


const graphql_handler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler()       // We will be using the Proxy V2 handler
);
module.exports = { graphql_handler }