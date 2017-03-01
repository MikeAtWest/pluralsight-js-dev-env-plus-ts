//import webpack from 'webpack';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Set to debug mode.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using Md5 so that their names change when their content changes.
    new WebpackMd5Hash(),
    // Use CommonsChunkPlugin to create a sepaerate bundle of vendor libraries so that they will be cached seperately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html using htmlWebpackPlugin.options.varname
      trackJSToken: 'f761fe0028f6444b860f401015de3d0c'
    }),
    // Minify js
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  // module: {
  //   loaders: [
  //     {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
  //     {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
  //   ]
  // }
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: 'true'
            }
          }
        ]
      },
      // { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('css?sourceMap') }
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            }
          ]
        })
      }

    ]
  }
}
