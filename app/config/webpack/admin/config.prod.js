const merge = require("webpack-merge");
const baseConfig = require("./config.dev.js");

module.exports = merge(baseConfig, {
  mode: "production",
});
