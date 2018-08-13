'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        form_events: './app/form/events/main.ts',
        form_input_alignment: './app/form/input_alignment/main.ts',
        form_input_types: './app/form/input_types/main.ts',
        form_label_position: './app/form/label_position/main.ts',
        form_overview: './app/form/overview/main.ts',
        form_submit: './app/form/submit/main.ts',		
   },

    output: {
        path: path.resolve(__dirname + '/aot'),
        filename: '[name].bundle.js'
    },

    module: {
        rules:
        [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                exclude: [/\.(spec|e2e)\.ts$/]
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
        extensions: ['.ts', '.js']
    }
}
