/**
 * /.webpack.config.js
 */
const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  // The better way to include styles and extract them into an external stylesheet
  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      },
      // Won't work
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract(
      //     'style-loader',
      //     combineLoaders([{
      //       loader: 'css-loader',
      //       query: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     }])
      //   )
      // },
    ],
  },
};