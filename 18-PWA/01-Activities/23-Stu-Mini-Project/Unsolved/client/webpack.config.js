const config = {
  entry: {
    app: "./assets/js/index.js",
    favorites: "./assets/js/favorites.js",
    topic: "./assets/js/topic.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;
