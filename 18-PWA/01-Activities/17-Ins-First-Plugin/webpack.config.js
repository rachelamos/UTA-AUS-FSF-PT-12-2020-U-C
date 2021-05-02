const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  entry: {
    app: "./src/app.js",
    home: "./src/home.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new BundleAnalyzerPlugin()]
};
module.exports = config;