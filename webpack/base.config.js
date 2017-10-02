const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'public/build'),
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
    ],
  },
};
