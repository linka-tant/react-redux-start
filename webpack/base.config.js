const webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/styles/main.scss'
  ],

  output: {
    path: path.join(process.cwd(), 'public/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader',},
                { loader: 'sass-loader'}
            ],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ]
};
