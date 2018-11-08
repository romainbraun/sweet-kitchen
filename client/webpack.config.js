const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ["./client/src/index.tsx", "webpack-hot-middleware/client"]
  },

  output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  mode: "development",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { 
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader" ,
            options: {
              configFileName: './client/tsconfig.json'
            }
          },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader" 
          }
      ]
  },

  plugins: [
      new HtmlWebpackPlugin({
          template: './client/src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
};