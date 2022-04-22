const { merge } = require("webpack-merge");
const baseConfig = require("./config.base.js");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = process.env.PATH_STATIC;

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "statics/js/[name].[hash].js",
    chunkFilename: "statics/js/[id].[hash].js",
  },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "statics/css/[name].[hash].css",
      chunkFilename: "statics/css/[id].[hash].css",
    }),
  ],
  module: {
    rules: {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            publicPath,
          },
        },
      ],
    },
  },
});
