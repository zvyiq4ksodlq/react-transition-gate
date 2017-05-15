var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    demo: [
      "webpack/hot/only-dev-server",
      path.resolve(__dirname, "src", "index.jsx")
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        },
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "src")
        ]
      }
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "app-container"
    })
  ]
};
