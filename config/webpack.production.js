const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const path = require("path");

const PATH = {
  dist: path.resolve(__dirname, "dist"),
};

const config = {
  mode: "production",

  output: {
    filename: "assets/js/main.js",
    path: PATH.dist,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/img/[name].[ext]",
            publicPath: "../../",
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
  ],
};

module.exports = merge.smart(common, config);
