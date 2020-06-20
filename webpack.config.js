const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = {};
  config.mode = argv.mode;

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }



  config.entry = [path.join(__dirname, "/src/index.js")];
  config.output = {
    path: path.join(__dirname, "/dist")
  };

  config.resolve = {
    alias: {
      appRoot: path.join(__dirname, "/src")
    },
    extensions: ['*', '.js', '.jsx']
  };

  config.module = {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    }
    ]
  };


  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      minify: {
        collapseWhitespace: false,
        minifyCSS: true
      },
    }),
  );

  config.devServer = {
    port: 3005,
    stats: "minimal"
  };



  return config;
};