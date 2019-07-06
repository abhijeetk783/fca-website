  const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path")
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },


      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: './app/Public/',
              spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false}
              ]
            }
          }
          
        ]
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              //because remove style-loader,my css can't work
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]"
              } // translates CSS into CommonJS
            },
            {
              loader: "less-loader" // compiles Sass to CSS
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
     
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "index.html"
    }),
    new ExtractTextPlugin("main.css"),
    new webpack.DefinePlugin( {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG) } ),
    new SpriteLoaderPlugin({ plainSprite: true })
  ],

  devServer: {
    // configuration for webpack-dev-server
    contentBase: './app/Public',  //source of static assets
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    inline: true,
    historyApiFallback: true,
    port: 9000 // port to run dev-server
  }
};

