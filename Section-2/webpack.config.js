const path = require('path');

const config = {
    // Entry file
    entry: './src/index.js',
    output: {
        // Folder to build to
        path: path.resolve(__dirname,'build'),
        // Built file name
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
            }
        ]
    }
    
};

module.exports = config;