const PathRewriterPlugin = require('webpack-path-rewriter');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const __BASE_DIR__ = '';
const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  devTools: __DEV__ ? 'eval-source-map' : '',
  entry: {
    'index.js': './' + __BASE_DIR__ + 'src/index.js'
  },
  devServer: {
    noInfo: true
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    modulesDirectories: [
      'node_modules',
      'src',
      'src/assets',
      'src/web_modules',
      'src/core'
    ]
  },
  output: {
    path: __DEV__ ? path.join(__dirname, '__build__') : './' + __BASE_DIR__ + '__build__',
    publicPath: '',
    filename: '[name]'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /[.]html$/,
      loader: PathRewriterPlugin.rewriteAndEmit({
        name: '[name].html'
      })
    }, {
      test: /\.json?$/,
      loader: 'json'
    },{
      test: /\.(png|jpg|gif|ttf|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }]
  },
  vue: {
    loaders: {
      js: 'babel',
      css: ExtractTextPlugin.extract('style', 'css-loader')
    }
  },
  plugins: [
    new PathRewriterPlugin(),
    new webpack.DefinePlugin({
       __PROD__: __PROD__,
       __DEV__: __DEV__,
       'process.env.NODE_ENV': __DEV__ ? '"development"' : '"production"'
    }),
    new ExtractTextPlugin('style.css', { disable: __DEV__ })
  ].concat(
    __PROD__ ? [
      new webpack.optimize.UglifyJsPlugin()
    ] : [
      new webpack.NoErrorsPlugin()
    ]
  ),
  node: {
    fs: "empty"
  }
};
