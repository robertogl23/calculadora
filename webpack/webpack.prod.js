const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge }            = require("webpack-merge");
const common               = require("./webpack.common");
const path                 = require('path');
/** @type {import('webpack').Configuration} */
const prodConfig = 
{
    mode    : "production",
    // devtool : "source-map",
    plugins: 
    [
        new MiniCssExtractPlugin(
        {
            filename      : "static/css/[name].[contenthash].css",
            chunkFilename : "[id].[contenthash].css",
        })
    ],
    module  : 
    {
        rules: 
        [
            {
                test: /\.(css|scss|sass)$/,
                use: 
                [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    
};

module.exports = merge(common, prodConfig);