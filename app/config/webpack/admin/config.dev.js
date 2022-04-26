const path = require("path");
// const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "../../../");

module.exports = {
  mode: "development",
  entry: "./src/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(rootPath, "dist"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|ts)x?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      // { test: /\.tsx?$/, use: "ts-loader" },
      // { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, loader: "ignore-loader" },

      // {
      //   test: /\.css$/, // [E]
      //   use: [
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //           exportOnlyLocals: true,
      //           exportLocalsConvention: "camelCase",
      //           localIdentName: "[local]_[hash:base64:5]",
      //         },
      //       },
      //     },
      //   ],
      // },

      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: ServerMiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: "/static/css",
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
};
