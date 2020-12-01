const path = require("path");

module.exports = {
  entry: {
    app: "./main.js",
  },
  module: {
    rules: [{}],
  },
  plugins: [],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
