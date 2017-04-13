// Creates a index.html in dist that references index_bundle.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template:__dirname + '/app/index.html',
	filename:'index.html',
	inject:'body'
});

module.exports={
	entry:[
	__dirname + '/app/index.js'
	],
	output:{
		path:__dirname + '/dist',
		filename: "index_bundle.js"
	},
	module:{
		loaders:[
		{test:/\.js$/, exclude:/node_modules/, loader: 'babel-loader'}
		]
	},
	plugins:[
	HtmlWebpackPluginConfig
	]
};
