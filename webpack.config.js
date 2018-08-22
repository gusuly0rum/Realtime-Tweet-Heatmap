const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./public/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};