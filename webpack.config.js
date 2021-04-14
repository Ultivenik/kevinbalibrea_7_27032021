const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    optimization: {
        usedExports: true,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean:true,
    },
    module: {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                minimize: true,
            }
        },
        {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
  },
  devtool: "eval",
   plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/logo.png", to: "logo.png" },
                { from: "src/favicon.ico", to: "favicon.ico" }
            ],
        }),
   ],
};