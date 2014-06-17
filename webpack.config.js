var webpack = require("webpack");

new webpack.ProvidePlugin({
  jQuery: "jquery"
});

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    , { test: /\.handlebars$/, loader: "handlebars-loader" }
    , { test: /\.less$/, loader: "less-loader" }
    , { test: /\.ttf$/, loader: 'file-loader?prefix=font/' }
    , { test: /\.eot$/, loader: 'file-loader?prefix=font/' }
    , { test: /\.svg$/, loader: 'file-loader?prefix=font/' }
    , { test: /\.woff$/, loader: 'file-loader?prefix=font/' }
    ]
  }
};
