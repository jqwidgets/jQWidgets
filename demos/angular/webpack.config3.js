'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        colorpicker_defaultfunctionality: './app/colorpicker/defaultfunctionality/main.ts',
        colorpicker_settings: './app/colorpicker/settings/main.ts',

        combobox_defaultfunctionality: './app/combobox/defaultfunctionality/main.ts',
        combobox_multiselect: './app/combobox/multiselect/main.ts',
        combobox_settings: './app/combobox/settings/main.ts',
        combobox_categories: './app/combobox/categories/main.ts',
        combobox_bindingtoxml: './app/combobox/bindingtoxml/main.ts',
        combobox_bindingtojson: './app/combobox/bindingtojson/main.ts',
        combobox_bindingtoremotedata: './app/combobox/bindingtoremotedata/main.ts',
        combobox_customrendering: './app/combobox/customrendering/main.ts',
        combobox_templates: './app/combobox/templates/main.ts',
        combobox_dropdownhorizontalalignment: './app/combobox/dropdownhorizontalalignment/main.ts',
        combobox_dropdownverticalalignment: './app/combobox/dropdownverticalalignment/main.ts',
        combobox_cascadingcomboboxes: './app/combobox/cascadingcomboboxes/main.ts',
        combobox_checkboxes: './app/combobox/checkboxes/main.ts',
        combobox_animation: './app/combobox/animation/main.ts',
        combobox_fluidsize: './app/combobox/fluidsize/main.ts',
        combobox_events: './app/combobox/events/main.ts',
        combobox_keyboardnavigation: './app/combobox/keyboardnavigation/main.ts',
        combobox_righttoleftlayout: './app/combobox/righttoleftlayout/main.ts',
        combobox_createcomponent: './app/combobox/createcomponent/main.ts',
        combobox_twowaydatabinding: './app/combobox/twowaydatabinding/main.ts',

        complexinput_defaultfunctionality: './app/complexinput/defaultfunctionality/main.ts',
        complexinput_spinbuttons: './app/complexinput/spinbuttons/main.ts',
        complexinput_validation: './app/complexinput/validation/main.ts',
        complexinput_exponentialnotation: './app/complexinput/exponentialnotation/main.ts',
        complexinput_changeevent: './app/complexinput/changeevent/main.ts',
        complexinput_fluidsize: './app/complexinput/fluidsize/main.ts',
        complexinput_twowaydatabinding: './app/complexinput/twowaydatabinding/main.ts',

        datatable_defaultfunctionality: './app/datatable/defaultfunctionality/main.ts',
        datatable_localdata: './app/datatable/localdata/main.ts',
        datatable_remotedata: './app/datatable/remotedata/main.ts',
        datatable_xmldata: './app/datatable/xmldata/main.ts',
        datatable_jsondata: './app/datatable/jsondata/main.ts',
        datatable_csvdata: './app/datatable/csvdata/main.ts',
        datatable_tsvdata: './app/datatable/tsvdata/main.ts',
        datatable_rowtemplate: './app/datatable/rowtemplate/main.ts',
        datatable_rowdetails: './app/datatable/rowdetails/main.ts',
        datatable_rowselectionhover: './app/datatable/rowselectionhover/main.ts',
        datatable_columnshierarchy: './app/datatable/columnshierarchy/main.ts',
        datatable_columnformatting: './app/datatable/columnformatting/main.ts',
        datatable_columnalignment: './app/datatable/columnalignment/main.ts',
        datatable_columnresize: './app/datatable/columnresize/main.ts',
        datatable_columnreorder: './app/datatable/columnreorder/main.ts',
        datatable_showorhidecolumn: './app/datatable/showorhidecolumn/main.ts',
        datatable_pinnedfrozencolumn: './app/datatable/pinnedfrozencolumn/main.ts',
        datatable_columntemplate: './app/datatable/columntemplate/main.ts',
        datatable_headertemplate: './app/datatable/headertemplate/main.ts',
        datatable_inlinerow: './app/datatable/inlinerow/main.ts',
        datatable_dialog: './app/datatable/dialog/main.ts',
        datatable_lockrow: './app/datatable/lockrow/main.ts',
        datatable_celledit: './app/datatable/celledit/main.ts',
        datatable_customeditors: './app/datatable/customeditors/main.ts',
        datatable_validation: './app/datatable/validation/main.ts',
        datatable_sorting: './app/datatable/sorting/main.ts',
        datatable_serversorting: './app/datatable/serversorting/main.ts',
        datatable_sortingapi: './app/datatable/sortingapi/main.ts',
        datatable_filtering: './app/datatable/filtering/main.ts',
        datatable_searchfield: './app/datatable/searchfield/main.ts',
        datatable_advancedfiltering: './app/datatable/advancedfiltering/main.ts',
        datatable_serverfiltering: './app/datatable/serverfiltering/main.ts',
        datatable_filteringapi: './app/datatable/filteringapi/main.ts',
        datatable_paging: './app/datatable/paging/main.ts',
        datatable_serverpaging: './app/datatable/serverpaging/main.ts',
        datatable_pagingapi: './app/datatable/pagingapi/main.ts',
        datatable_nestedtables: './app/datatable/nestedtables/main.ts',
        datatable_separatetables: './app/datatable/separatetables/main.ts',
        datatable_aggregates: './app/datatable/aggregates/main.ts',
        datatable_aggregatestemplate: './app/datatable/aggregatestemplate/main.ts',
        datatable_grouping: './app/datatable/grouping/main.ts',
        datatable_groupingserverpaging: './app/datatable/groupingserverpaging/main.ts',
        datatable_dataexport: './app/datatable/dataexport/main.ts',
        datatable_dataprinting: './app/datatable/dataprinting/main.ts',
        datatable_localization: './app/datatable/localization/main.ts',
        datatable_conditionalformatting: './app/datatable/conditionalformatting/main.ts',
        datatable_fluidsize: './app/datatable/fluidsize/main.ts',
        datatable_keyboardnavigation: './app/datatable/keyboardnavigation/main.ts',
        datatable_righttoleftlayout: './app/datatable/righttoleftlayout/main.ts',
        datatable_createcomponent: './app/datatable/createcomponent/main.ts'
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
