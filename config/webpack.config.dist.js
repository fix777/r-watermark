const webpack = require("webpack");

const paths = require("./paths");

module.exports = {
  entry: [paths.libIndexTsx],
  output: {
    path: paths.appDist,
    filename: "r-watermark.min.js",
    library: "RWatermark",
    libraryTarget: "window",
  },
  resolve: {
    extensions: [".tsx"],
  },
  module: {
    rules: [
      // Process TS with TsLoader.
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              compact: true,
            },
          },
          {
            loader: require.resolve("ts-loader"),
            options: {
              configFile: "tsconfig.dist.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebookincubator/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false,
      },
      output: {
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebookincubator/create-react-app/issues/2488
        ascii_only: true,
      },
      sourceMap: false,
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
