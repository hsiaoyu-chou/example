module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	ignore: [
		'**/index.js'
	],
	sections: [
		{
			name: 'Buttons',
			sections: [
				{
					name: 'Buttons',
					content: './lib/components/Buttons/Button/Readme.md',
					components: './lib/components/Buttons/Button/Button.js'
				},
				{
					name: 'PushButton',
					components: './lib/components/Buttons/PushButton/PushButton.js'
				},
			],
			components: './lib/components/Buttons/*.js'
		},
		{
			name: 'Modal',
			content: './lib/components/Modal/Readme.md',
			components: './lib/components/Modal/Modal.js'
		},
		{
			name: 'Placeholder',
			content: './lib/components/Placeholder/Readme.md',
			components: './lib/components/Modal/Placeholder.js'
		}
	],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				}
			]
		}
	},
};
