import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: {
    'index': path.resolve(__dirname, 'src/index.tsx'),
    'hello': path.resolve(__dirname, 'src/components/helloWorld/helloPage'),
    'news': path.resolve(__dirname, 'src/components/news/newsPage')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    //filename: 'bundle.js'
    filename: '[name].js'
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
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/helloWorld/helloPage.html',
      filename: 'helloPage.html',
      chunks: ['hello'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/news/newsPage.html',
      filename: 'newsPage.html',
      chunks: ['news'],
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loaders: ['ts-loader'] },
      { test: /\.tsx$/, exclude: /node_modules/, loaders: ['ts-loader'] },
      //{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }

};
