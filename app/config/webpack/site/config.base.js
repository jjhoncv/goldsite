const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createVarsDefinePlugin, varsUsingWebpack } = require("./../../utils");

const rootPath = path.join(__dirname, "../../../");
const publicPath = process.env.PATH_STATIC;

varsUsingWebpack();

module.exports = {
  entry: {
    app: path.join(rootPath, "src/site/ssr/browser.tsx"),
  },
  output: {
    path: path.join(rootPath, "dist"),
    publicPath,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@app": rootPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  target: "web",
  name: "client",
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(rootPath, "public/index.html"),
      favicon: path.join(rootPath, "public/favicon.ico"),
    }),
  ],
};
