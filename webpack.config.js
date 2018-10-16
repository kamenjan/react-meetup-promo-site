const path = require("path")
const webpack = require('webpack')

/* Hashing resource file names requires dynamic on the fly html template */
const HtmlWebPackPlugin = require("html-webpack-plugin")

/* Used to copy static assets to dist */
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: ["babel-polyfill", "./App.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[chunkhash].js"
	},
	devServer: {
		contentBase: "./dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html"
		}),
		new CopyWebpackPlugin(
			[{ from: 'static/images', to: './images/' }], {}
		)
	],
	resolve: {
		modules: [
			/* Path resolvers for application imports using absolute path */
			path.resolve('./'),
			path.resolve('./node_modules')
		]
	}
};
