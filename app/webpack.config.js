const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

class ServerMiniCssExtractPlugin extends MiniCssExtractPlugin {
  getCssChunkObject(mainChunk) {
    return {};
  }
}

const browserConfig = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/browser.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "statics/js/browser.js",
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/static/css",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  target: "web",
  plugins: [
    // new WebpackManifestPlugin({
    //   fileName: path.resolve(__dirname, "./build/manifest.json"),
    //   filter: (file) => file.isInitial,
    // }),
    new MiniCssExtractPlugin({
      filename: "statics/css/[name].css",
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new HtmlWebpackPlugin({
      filename: "template.html",
      template: path.join(__dirname, "src/public/template.html"),
      favicon: path.join(__dirname, "src/public/favicon.ico"),
    }),
  ],
};

const serverConfig = {
  mode: "development",
  entry: "./src/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
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
        use: [
          {
            loader: ServerMiniCssExtractPlugin.loader,
            options: {
              publicPath: "/static/css",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "statics/css/[name].css",
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};

module.exports = [browserConfig, serverConfig];
