import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

function sortChunks(chunkOrder, chunk1, chunk2) {
  var order1 = chunkOrder.indexOf(chunk1.names[0]);
  var order2 = chunkOrder.indexOf(chunk2.names[0]);
  return order1 - order2;
}

var htmlMinificationSettings = {
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
}

export default {
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, 'src/index'),
    hello: path.resolve(__dirname, 'src/hello'),
    news: path.resolve(__dirname, 'src/news'),
    vendor: ['jquery', 'react', 'react-dom', 'toastr']
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
    //filename: '[name].[chunkhash].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  plugins: [
    //Set to debug mode.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].css'),
    //new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using Md5 so that their names change when their content changes.
    new WebpackMd5Hash(),
    // Use CommonsChunkPlugin to create a sepaerate bundle of vendor libraries so that they will be cached seperately.
    new webpack.optimize.CommonsChunkPlugin({
      name: ['index', 'hello', 'news', 'vendor']
    }),
    // Create HTML file that includes reference to bundled JS. For index.html.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'index'], chunk1, chunk2);
      },
      chunks: ['vendor', 'index'],
      inject: true,
      // Properties you define here are available in index.html using htmlWebpackPlugin.options.varname
      trackJSToken: 'f761fe0028f6444b860f401015de3d0c'
    }),
    // Create HTML file that includes reference to bundled JS. For hello.html.
    new HtmlWebpackPlugin({
      template: 'src/hello.html',
      filename: 'hello.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'hello'], chunk1, chunk2);
      },
      chunks: ['vendor', 'hello'],
      inject: true
    }),
    // Create HTML file that includes reference to bundled JS. For news.html.
    new HtmlWebpackPlugin({
      template: 'src/news.html',
      filename: 'news.html',
      minify: htmlMinificationSettings,
      chunksSortMode: function (chunk1, chunk2) {
        return sortChunks(['vendor', 'news'], chunk1, chunk2);
      },
      chunks: ['vendor', 'news'],
      inject: true
    }),
    // Minify js
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { sourceMap: true, minimize: true } }]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { sourceMap: true, minimize: true } }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: 'css-loader', options: { sourceMap: true, minimize: true } }] })
      }
    ]
  }
}
