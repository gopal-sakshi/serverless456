const path = require('path');
const nodeExternals = require('webpack-node-externals');
const serverlessWebpack = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
console.log(path.join(__dirname, 'libs23'))

module.exports = {
    devtool: serverlessWebpack.lib.webpack.isLocal ? 'source-map' : 'eval',
    entry: serverlessWebpack.lib.entries,
    mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
    module: {
        rules: [
            {
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, '.serverless'),
                        path.resolve(__dirname, '.webpack'),
                    ],
                ],
                test: /\.ts$/,
                use: [
                    { loader: 'ts-loader', },
                ],
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    node: false,
    externals: [nodeExternals()],
    optimization: {
        minimize: false,
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        alias: {
            'lib222': path.resolve(__dirname, 'libs23/index.ts'),
        },
        extensions: ['.ts', '.js', '.json'],
    },
    target: 'node',
    plugins: [],
};
