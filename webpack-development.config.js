const webpack = require('webpack')
let coreConfig = require('./webpack.config.js')

coreConfig.devtool = 'source-map'

const loaders = [
	{
		test: /\.scss$/,
		use: [
			{
				loader: "style-loader"
			},
			{
				loader: "css-loader",
				options: {
					sourceMap: true
				}
			},
			{
				loader: "sass-loader",
				options: {
					sourceMap: true
				}
			}
		]
	},
  {
    test: /\.css$/,
    use: [
    	{
      	loader: "style-loader"
    	},
			{
				loader: "css-loader", // translates CSS into CommonJS
				options: {
					sourceMap: true
				}
    	}
    ]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader']
  }
]

coreConfig.module.rules.push(...loaders)

coreConfig.plugins.push(
  /* Don't forget to let globals through in .eslintrc */
	new webpack.DefinePlugin({
		ENV: JSON.stringify("development")
	})
)

module.exports = coreConfig