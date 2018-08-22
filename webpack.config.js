var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};