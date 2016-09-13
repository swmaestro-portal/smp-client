var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      "bootstrap-sass!./src/styles/theme/bootstrap-sass.config.js",
      'font-awesome-webpack!./src/styles/theme/font-awesome.config.js',
      "./src/main.js"
    ]
  },
  output: {
    path: "./build/app",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.RUN_ENV': '"web"'
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel",
        exclude: /node_modules/
      },

      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!postcss-loader')
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },

      {
        test: /\.(ttf|eot|svg|ogg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devServer: {
      historyApiFallback: true
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}