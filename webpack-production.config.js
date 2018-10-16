const webpack = require('webpack')
let baseConfig = require('./webpack.config.js')

/* NOTE: UglifyJS grabs presets from .babelrc */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

let loaders = [
  {
    test: /\.scss$/, // Sass loader for custom sass styles
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader"
      }
    ]
  },
  {
    test: /\.css$/, // Useful for vendors compiled style builds
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      {
        loader: "css-loader"
      }
    ]
  }
]

baseConfig.module.rules.push(...loaders)

/* NOTE: This is remnant from webpack3 */
/* TODO: Figure out how webpack4 handles this */
baseConfig.plugins.push(
	new webpack.DefinePlugin({
		ENV: JSON.stringify("production")
	})
)

/* NOTE: This messes up some of the variables in components (component.name ...) */
/* TODO: Test and fine tune uglifyJS config */
baseConfig.plugins.push(
	new UglifyJSPlugin({
		test: /\.js$/,
		exclude: /node_modules/,
		uglifyOptions: {
      output: {
        comments: false
      },
      compress: {
        unused: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
      }
		}
	})
)

module.exports = baseConfig