const path = require("path");
const webpack = require("webpack");
// const nodeExternals = require("webpack-node-externals");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createVarsDefinePlugin, varsUsingWebpack } = require("./../../utils");

const rootPath = path.join(__dirname, "../../../");
const publicPath = process.env.PATH_STATIC;

varsUsingWebpack();

module.exports = {
  entry: {
    app: path.join(rootPath, "src/browser.tsx"),
    // hot: "webpack/hot/dev-server.js",
    // client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  // entry: [
  //   path.join(rootPath, "src/browser.tsx"),
  //   // "webpack-dev-server/client?http://0.0.0.0:3000",
  //   // "webpack/hot/only-dev-server",
  //   // "webpack/hot/dev-server",
  //   "webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr",
  // ],

  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "statics/js/browser.js",
    publicPath: "http://localhost:4000/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@app": rootPath,
    },
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
      // {
      //   test: /\.(jpe?g|png|svg|woff2|woff|ttf|eot)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[hash].[ext]",
      //         publicPath,
      //       },
      //     },
      //   ],
      // },

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

      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath,
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },
    ],
  },
  // target: "web",
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),

    // new WebpackManifestPlugin({
    //   fileName: path.resolve(__dirname, "./build/manifest.json"),
    //   filter: (file) => file.isInitial,
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "statics/css/[name].css",
    // }),
    // new webpack.DefinePlugin({
    //   __isBrowser__: "true",
    // }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(rootPath, "public/index.html"),
      favicon: path.join(rootPath, "public/favicon.ico"),
    }),
    new HtmlWebpackPlugin({
      filename: "ssr.html",
      template: path.join(rootPath, "public/index.html"),
      favicon: path.join(rootPath, "public/favicon.ico"),
    }),
  ],
};
