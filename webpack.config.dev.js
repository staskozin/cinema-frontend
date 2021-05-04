const path = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = {
  ...baseConfig,
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  }
};
