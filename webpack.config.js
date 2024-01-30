const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.mp4|.png$/i,
        type: "asset/resource"
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "head",
        scriptLoading: "defer"
      })
    ]
  };