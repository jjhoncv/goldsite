const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const browserConfig = {
  mode: "development",
  entry: "./src/browser.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "browser.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: [
      // {test: //}

      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     {
      //       loader: "ts-loader",
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // { test: /\.tsx?$/, use: "ts-loader" },
      // { test: /\.(js)$/, use: "babel-loader" },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  target: "web",
  plugins: [
    // new WebpackManifestPlugin({
    //   fileName: path.resolve(__dirname, "./build/manifest.json"),
    //   filter: (file) => file.isInitial,
    // }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/public/index.html"),
    }),
  ],
};

const serverConfig = {
  mode: "development",
  entry: "./src/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
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
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     {
      //       loader: "ts-loader",
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
      // { test: /\.tsx?$/, use: "ts-loader" },
      // { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};

module.exports = [browserConfig, serverConfig];
