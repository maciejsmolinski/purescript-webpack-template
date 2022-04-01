const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode,
    module: {
        rules: [
            {
                test: /\.purs$/,
                loader: 'purs-loader',
                exclude: /node_modules/,
		options: {
		    spago: true
		}
            }
        ]
    }
};
