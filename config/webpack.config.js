const path = require('path');

const basePath = __dirname;
const distPath = '../build';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        spinner: ['@babel/polyfill', './src/Spinner/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                  'css-loader',
                ],
            },
        ]
    },
};

module.exports = webpackInitConfig;