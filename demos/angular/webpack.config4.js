'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        datetimeinput_defaultfunctionality: './app/datetimeinput/defaultfunctionality/main.ts',
        datetimeinput_localization: './app/datetimeinput/localization/main.ts',
        datetimeinput_timeinput: './app/datetimeinput/timeinput/main.ts',
        datetimeinput_restrictdaterange: './app/datetimeinput/restrictdaterange/main.ts',
        datetimeinput_formatdate: './app/datetimeinput/formatdate/main.ts',
        datetimeinput_disabled: './app/datetimeinput/disabled/main.ts',
        datetimeinput_templates: './app/datetimeinput/templates/main.ts',
        datetimeinput_datetime: './app/datetimeinput/datetime/main.ts',
        datetimeinput_rangeselection: './app/datetimeinput/rangeselection/main.ts',
        datetimeinput_dropdownhorizontalignment: './app/datetimeinput/dropdownhorizontalalignment/main.ts',
        datetimeinput_dropdownverticalalignment: './app/datetimeinput/dropdownverticalalignment/main.ts',
        datetimeinput_animation: './app/datetimeinput/animation/main.ts',
        datetimeinput_fluidsize: './app/datetimeinput/fluidsize/main.ts',
        datetimeinput_events: './app/datetimeinput/events/main.ts',
        datetimeinput_keyboardnavigation: './app/datetimeinput/keyboardnavigation/main.ts',
        datetimeinput_righttoleftlayout: './app/datetimeinput/righttoleftlayout/main.ts',
		    datetimeinput_createcomponent: './app/datetimeinput/createcomponent/main.ts',
		    datetimeinput_twowaydatabinding: './app/datetimeinput/twowaydatabinding/main.ts',

        docking_defaultfunctionality: './app/docking/defaultfunctionality/main.ts',
        docking_importlayout: './app/docking/importlayout/main.ts',
        docking_settings: './app/docking/settings/main.ts',
        docking_events: './app/docking/events/main.ts',
        docking_keyboardnavigation: './app/docking/keyboardnavigation/main.ts',
        docking_righttoleftlayout: './app/docking/righttoleftlayout/main.ts',

        dockinglayout_defaultfunctionality: './app/dockinglayout/defaultfunctionality/main.ts',
        dockinglayout_saveloadlayout: './app/dockinglayout/saveloadlayout/main.ts',
        dockinglayout_idelikelayout: './app/dockinglayout/idelikelayout/main.ts',
        dockinglayout_fluidsize: './app/dockinglayout/fluidsize/main.ts',
        dockinglayout_righttoleftlayout: './app/dockinglayout/righttoleftlayout/main.ts',
        dockinglayout_createcomponent: './app/dockinglayout/createcomponent/main.ts',

        dragdrop_defaultfunctionality: './app/dragdrop/defaultfunctionality/main.ts',
        dragdrop_events: './app/dragdrop/events/main.ts',

        draw_defaultfunctionality: './app/draw/defaultfunctionality/main.ts',

        dropdownlist_defaultfunctionality: './app/dropdownlist/defaultfunctionality/main.ts',
        dropdownlist_textwithicons: './app/dropdownlist/textwithicons/main.ts',
        dropdownlist_categories: './app/dropdownlist/categories/main.ts',
        dropdownlist_bindingtoxml: './app/dropdownlist/bindingtoxml/main.ts',
        dropdownlist_bindingtojson: './app/dropdownlist/bindingtojson/main.ts',
        dropdownlist_customrendering: './app/dropdownlist/customrendering/main.ts',
        dropdownlist_templates: './app/dropdownlist/templates/main.ts',
        dropdownlist_saveloadselectionusingcookies: './app/dropdownlist/saveloadselectionusingcookies/main.ts',
        dropdownlist_dropdownhorizontalalignment: './app/dropdownlist/dropdownhorizontalalignment/main.ts',
        dropdownlist_dropdownverticalalignment: './app/dropdownlist/dropdownverticalalignment/main.ts',
        dropdownlist_animation: './app/dropdownlist/animation/main.ts',
        dropdownlist_checkboxes: './app/dropdownlist/checkboxes/main.ts',
        dropdownlist_autoopen: './app/dropdownlist/autoopen/main.ts',
        dropdownlist_filtering: './app/dropdownlist/filtering/main.ts',
        dropdownlist_loaddatafromselect: './app/dropdownlist/loaddatafromselect/main.ts',
        dropdownlist_fluidsize: './app/dropdownlist/fluidsize/main.ts',
        dropdownlist_events: './app/dropdownlist/events/main.ts',
        dropdownlist_keyboardnavigation: './app/dropdownlist/keyboardnavigation/main.ts',
        dropdownlist_righttoleftlayout: './app/dropdownlist/righttoleftlayout/main.ts',
        dropdownlist_createcomponent: './app/dropdownlist/createcomponent/main.ts',
        dropdownlist_twowaydatabinding: './app/dropdownlist/twowaydatabinding/main.ts'
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
