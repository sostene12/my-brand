const path = require("path");

module.exports = {
  mode: "development",
  entry: "./scripts/app.js",
  output: {
    path: path.resolve(__dirname),
    filename: "index.js",
  },
  watch: true,
};