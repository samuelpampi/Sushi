const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './src/register.js'],  
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    //clean: true
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img", to: "img" },
        { from: "./src/css", to: "css" },
      ],
    })
  ]
};