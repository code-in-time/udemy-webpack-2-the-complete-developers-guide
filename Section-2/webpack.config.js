const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    // Entry file
    entry: './src/index.js',
    output: {
        // Folder to build to
        path: path.resolve(__dirname,'build'),
        // Built file name
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            // {
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // }
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {loader:'url-loader', options:{limit:40000}},
                    'image-webpack-loader'
                    ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
    
};

module.exports = config;