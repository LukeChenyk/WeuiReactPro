const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:  {
        path: path.resolve(__dirname, 'out'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {test: /\.js$/,exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'react']
                  }
                }
            },
            {test: /\.css$/,use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './src/images/[name].[ext]'
                  }
              }
        ]
    },
    plugins:[
    new ExtractTextPlugin('styles.css')
    ]
}