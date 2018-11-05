const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  mode: 'none',
  entry: './src/client',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outputDirectory)
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
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/graphql': 'http://localhost:3001/graphql',
      '/api': 'http://localhost:3001/',
      '/': 'http://localhost:3001/dist/index.html',
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
