const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 追加
  entry: {
    'app': [
      path.resolve(__dirname, 'src/app.js'),
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};