const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rootPath = path.join(__dirname, "../../../");

module.exports = {
  mode: "development",
  entry: [path.join(rootPath, "src/site/index.tsx")],
  target: "node",
  name: "server",
  externals: [
    nodeExternals({
      allowlist: /\.css$/,
    }),
  ],
  output: {
    path: path.join(rootPath, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "public/statics/css/app.css",
    }),
  ],
  performance: {
    hints: false,
  },
};
