const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry: {
        index: './build/js/app.js',
        singup: './build/js/signup.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist','js'),
        publicPath: '/dist/js/'
    },
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    } 
                }
            }
        ]
    }
};