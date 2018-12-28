const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const basePath = __dirname;
const distPath = '../build';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        spinner: ['./src/Spinner/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
};

module.exports = webpackInitConfig;