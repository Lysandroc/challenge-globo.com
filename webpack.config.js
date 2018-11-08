const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  mode: 'none',
  entry: './src/client',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outputDirectory),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    proxy: {
      '/graphql': 'http://localhost:3001/graphql',
    },
    historyApiFallback: { index: '/' },
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
