const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {

  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: 'public',
    port: '3000',
  },

});
