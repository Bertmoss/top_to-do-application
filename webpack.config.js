const path = require("path");

module.exports = {
  mode: "development",
  "entry": "/src/index.js",
  "output": {
    "filename": "main.js",
    "path": path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
}