var path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-move": "react-move"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        include: [path.join(__dirname, "src")]
      }
    ]
  }
};
