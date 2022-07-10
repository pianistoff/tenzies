const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(), new FaviconWebpackPlugin("./src/favicon.ico")]
}