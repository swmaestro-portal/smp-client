/* Path */
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, '../build');
var APP_DIR = path.resolve(__dirname, '../src');

/* Modules */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')

var config = {
  entry: [
    APP_DIR + '/main.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'global': {}, // bizarre lodash(?) webpack workaround
      'global.GENTLY': false // superagent client fix
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!postcss-loader')
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  target: 'node'
};

module.exports = config;

// historyApiFallback: true,
