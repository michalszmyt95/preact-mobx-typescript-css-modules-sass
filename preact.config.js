const CopyWebpackPlugin = require('copy-webpack-plugin');
const preactCliTypeScript = require('preact-cli-plugin-typescript');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config original webpack config.
 * @param {object} env options passed to CLI.
 * @param {WebpackConfigHelpers} helpers object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	preactCliTypeScript(config);
	if (config.devServer) {
		config.devServer.port = 3000;
	}
	config.plugins.push(new CopyWebpackPlugin([{ from: '../public', to: './' }]));
}
