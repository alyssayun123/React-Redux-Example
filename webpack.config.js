var webpack = require('webpack');
var path = require('path');
const WebpackDevServer = require('webpack-dev-server');
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  context: sourcePath,
  entry: {
    index: './main.tsx'
  },
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      },
      {
        test: /\.scss|sass|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      },
      {
        test: /\.mp4$/,
        use: 'url-loader'
      },
      {
        test: /\.png$/,
        use: 'url-loader'
      },
      {
        test: /\.jpg$/,
        use: 'url-loader'
      }
    ]
  },
  devtool: false,
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].bundle.js',
    path: outPath,
    publicPath: '/'
  },
  // @ts-ignore
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new HtmlWebpackPlugin({
      chunks: ['index', 'vendors'],
      template: 'index.html',
      title: 'React Redux Example'
      // favicon: path.join(srcPath, 'favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  stats: 'minimal'
};

const options = {
  publicPath: '/',
  stats: 'minimal',
  clientLogLevel: 'warning',
  host: '0.0.0.0',
  port: 4000,
  historyApiFallback: true
};

const port = 4000;
const server = new WebpackDevServer(webpack(config), options);
server.listen(port);
