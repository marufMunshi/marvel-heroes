const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

require("dotenv").config({ path: ".env" });

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "",
                publicPath: "/dist",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.PUBLIC_KEY": JSON.stringify(process.env.PUBLIC_KEY),
        "process.env.PRIVATE_KEY": JSON.stringify(process.env.PRIVATE_KEY),
      }),
    ],
    devtool: isProduction ? "source-map" : "eval",
    mode: isProduction ? "production" : "development",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
