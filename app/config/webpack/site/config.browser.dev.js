const { merge } = require("webpack-merge");
const baseConfig = require("./config.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-cheap-module-source-map",
  output: {
    filename: "public/statics/js/[name].js",
    chunkFilename: "public/statics/js/[id].[hash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "public/statics/css/[name].css",
      chunkFilename: "public/statics/css/[id].[hash].css",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      map: (file) => {
        return {
          ...file,
          path: file.path.replace(/^auto/, "").replace("/public", ""),
        };
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
});
