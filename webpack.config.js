const path = require('path');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');

const outputPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  devtool: 'eval',
  entry: ['./src/app.js'],
  output: {
    path: outputPath,
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    preLoaders: [{
      test: /.js$/,
      exclude: nodeModulesPath,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /.js$/,
      exclude: nodeModulesPath,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /.scss$/,
      loaders: ['style-loader', 'css-loader?-autoprefixer!postcss-loader', 'sass-loader']
      //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-autoprefixer!postcss-loader', 'sass-loader')
    }]
  },
  postcss: [Autoprefixer({browsers: ['last 2 versions']})],
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles/[name].css', {
      allChunks: true
    })
  ]
};
