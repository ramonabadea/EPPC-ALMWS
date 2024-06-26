const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig,{
  mode: 'development',
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
});