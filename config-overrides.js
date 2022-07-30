const path = require('path');

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@components': path.resolve(__dirname, 'src/components')
		},
	};
	return config;
};