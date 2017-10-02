const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {

  entry: [
    './src/styles/main.scss'
  ],

  module: {
    rules: [
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
});
