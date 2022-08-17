const path = require('path');

module.exports = {
	paths: function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			'@src': path.resolve(__dirname, 'src'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@data': path.resolve(__dirname, 'src/data')
		},
	};
	return config;
	},
	jest: function(config) {
		return {
			...config,
			moduleNameMapper: {
				'\\.(css|scss)$': 'identity-obj-proxy',
				'^@src/(.*)$': '<rootDir>/src/src/$1',
				'^@components/(.*)$': '<rootDir>/src/components/$1',
				'^@assets/(.*)$': '<rootDir>/src/assets/$1',
				'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
				'^@data/(.*)$': '<rootDir>/src/data/$1'
			}
		}
	}
}