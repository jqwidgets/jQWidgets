'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        editor_defaultfunctionality: './app/editor/defaultfunctionality/main.ts',
        editor_localization: './app/editor/localization/main.ts',
        editor_toolsvisibility: './app/editor/toolsvisibility/main.ts',
        editor_toolscustomization: './app/editor/toolscustomization/main.ts',
        editor_customtools: './app/editor/customtools/main.ts',
        editor_toolbarposition: './app/editor/toolbarposition/main.ts',
        editor_printing: './app/editor/printing/main.ts',
        editor_linebreakconfig: './app/editor/linebreakconfig/main.ts',
        editor_fluidsize: './app/editor/fluidsize/main.ts',
        editor_popupeditor: './app/editor/popupeditor/main.ts',
        editor_importstyles: './app/editor/importstyles/main.ts',
        editor_righttoleftlayout: './app/editor/righttoleftlayout/main.ts',
		editor_twowaydatabinding: './app/editor/twowaydatabinding/main.ts',

        expander_defaultfunctionality: './app/expander/defaultfunctionality/main.ts',
        expander_toggleondoubleclick: './app/expander/toggleondoubleclick/main.ts',
        expander_loadingdataondemand: './app/expander/loadingdataondemand/main.ts',
        expander_fluidsize: './app/expander/fluidsize/main.ts',
        expander_righttoleftlayout: './app/expander/righttoleftlayout/main.ts',

        fileupload_defaultfunctionality: './app/fileupload/defaultfunctionality/main.ts',
        fileupload_buttonsrendering: './app/fileupload/buttonsrendering/main.ts',
        fileupload_selectedfilesrendering: './app/fileupload/selectedfilesrendering/main.ts',
        fileupload_events: './app/fileupload/events/main.ts',
        fileupload_righttoleftlayout: './app/fileupload/righttoleftlayout/main.ts',

        formattedinput_defaultfunctionality: './app/formattedinput/defaultfunctionality/main.ts',
        formattedinput_simpleinput: './app/formattedinput/simpleinput/main.ts',
        formattedinput_validation: './app/formattedinput/validation/main.ts',
        formattedinput_negativenumbers: './app/formattedinput/negativenumbers/main.ts',
        formattedinput_uppercasehexadecimals: './app/formattedinput/uppercasehexadecimals/main.ts',
        formattedinput_exponentialnotation: './app/formattedinput/exponentialnotation/main.ts',
        formattedinput_fluidsize: './app/formattedinput/fluidsize/main.ts',
        formattedinput_events: './app/formattedinput/events/main.ts',
        formattedinput_keyboardnavigation: './app/formattedinput/keyboardnavigation/main.ts',
        formattedinput_righttoleftlayout: './app/formattedinput/righttoleftlayout/main.ts',
        formattedinput_twowaydatabinding: './app/formattedinput/twowaydatabinding/main.ts',

        gauge_defaultfunctionality: './app/gauge/defaultfunctionality/main.ts',
        gauge_gaugesettings: './app/gauge/gaugesettings/main.ts',
        gauge_gaugewithslider: './app/gauge/gaugewithslider/main.ts',
        gauge_lineargauge: './app/gauge/lineargauge/main.ts',
        gauge_fluidsize: './app/gauge/fluidsize/main.ts'
    },

    output: {
        path: path.resolve(__dirname + '/aot'),
        filename: '[name].bundle.js'
    },

    module: {
        loaders:
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
};
