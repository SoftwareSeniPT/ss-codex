// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh

var webpackShared = require("./webpack.shared");
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var path = require("path");

var mainConfig = new WebpackConfig().extend("webpack.config");

// To work with webpack-dev-server
webpackShared.removeObjectProperties(mainConfig.resolve.alias, ['react']);

var devConfigExtension = {
  entry: {
      app: [
        // We are using next two entries for hot-reload
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
      ].concat(mainConfig.entry.app)
  },

  output: {
    filename: '[name].js',
    publicPath: "http://localhost:8888/assets/"
  },

  resolve: {
    alias: mainConfig.resolve.alias
  },

  // more options here: http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval-source-map',

  watch: false,

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loaders: ['react-hot', 'ts-loader?instance=jsx'], include: path.resolve(__dirname, "app") },
      { test: /\.css$/, exclude: /\.import\.css$/,  loader: "style!css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]", include: path.resolve(__dirname, "app") }
    ]
  },

   plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // Used for hot-reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);
