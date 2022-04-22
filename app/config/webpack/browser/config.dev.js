const { merge } = require("webpack-merge");
const baseConfig = require("./config.base.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const publicPath = process.env.PATH_STATIC;

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "statics/js/[name].js",
  },
  devServer: {
    // open: true,
    historyApiFallback: true,
    liveReload: true,
    // disableHostCheck: true,
    // contentBase: path.resolve(__dirname, "./../../../dist"),
    port: 4000,
    // allowedHosts: ["docker.for.mac.localhost"],
    // headers: { "Access-Control-Allow-Origin": "*" },

    // hot: false,
    // client: false,
    compress: true,
    static: {
      directory: path.resolve(__dirname, "./../../../dist"),
      publicPath: "/",
    },
    // proxy: {
    //   "/": "http://localhost:3000",
    // },
    // proxy: {
    //   "*": {
    //     target: "http://0.0.0.0:3000",
    //     changeOrigin: true,
    //   },
    // },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "statics/css/app.css", // [D]
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // publicPath,
              // modules: {
              //   exportLocalsConvention: "camelCase",
              //   localIdentName: "[local]_[hash:base64:5]",
              // },
            },
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader",
      //   exclude: /node_modules/,
      // },
    ],
  },
});
