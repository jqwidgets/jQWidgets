'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
	mode: 'production',
	  
    entry: {
     	pivotgrid_designer: './app/pivotgrid/designer/main.ts'
	
     
	
		 
   },
    output: {
        path: path.resolve(__dirname + '/aot'),
        filename: '[name].bundle.js'
    },

    module: {
        rules:
        [
            {
				test: /\.ts?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                exclude: [/\.(spec|e2e)\.ts$/, path.resolve(__dirname, "temp",  path.resolve(__dirname, "temp/app"))]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'raw-loader',
                    'img-loader'
                ]
            }
        ]
    },

    plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.join(process.cwd(), 'app')
        )		
    ],
    resolve: {
     extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};
