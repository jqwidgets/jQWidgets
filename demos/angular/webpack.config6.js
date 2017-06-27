'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        grid_defaultfunctionality: './app/grid/defaultfunctionality/main.ts',
        grid_spreadsheet: './app/grid/spreadsheet/main.ts',
        grid_createremoveupdate: './app/grid/createremoveupdate/main.ts',
        grid_dataexport: './app/grid/dataexport/main.ts',
        grid_dataprinting: './app/grid/dataprinting/main.ts',
        grid_statemaintenance: './app/grid/statemaintenance/main.ts',
        grid_localization: './app/grid/localization/main.ts',
        grid_dropdowngrid: './app/grid/dropdowngrid/main.ts',
        grid_sorting: './app/grid/sorting/main.ts',
        grid_customsorting: './app/grid/customsorting/main.ts',
        grid_filtering: './app/grid/filtering/main.ts',
        grid_filtermenutypes: './app/grid/filtermenutypes/main.ts',
        grid_customfiltermenu: './app/grid/customfiltermenu/main.ts',
        grid_filterrow: './app/grid/filterrow/main.ts',
        grid_excellikefilter: './app/grid/excellikefilter/main.ts',
        grid_filterrowcustomlistitems: './app/grid/filterrowcustomlistitems/main.ts',
        grid_filterconditions: './app/grid/filterconditions/main.ts',
        grid_daterangefilter: './app/grid/daterangefilter/main.ts',
        grid_initialfilter: './app/grid/initialfilter/main.ts',
        grid_customlistitemswithkeyvalue: './app/grid/customlistitemswithkeyvalue/main.ts',
        grid_grouping: './app/grid/grouping/main.ts',
        grid_groupingwithpager: './app/grid/groupingwithpager/main.ts',
        grid_togglesubrows: './app/grid/togglesubrows/main.ts',
        grid_groupingaggregates: './app/grid/groupingaggregates/main.ts',
        grid_paging: './app/grid/paging/main.ts',
        grid_initialpageandpagesize: './app/grid/initialpageandpagesize/main.ts',
        grid_pagermodes: './app/grid/pagermodes/main.ts',
        grid_editing: './app/grid/editing/main.ts',
        grid_popupediting: './app/grid/popupediting/main.ts',
        grid_editmodes: './app/grid/editmodes/main.ts',
        grid_customizededitors: './app/grid/customizededitors/main.ts',
        grid_disableeditingofrows: './app/grid/disableeditingofrows/main.ts',
        grid_customdropdownlistcolumn: './app/grid/customdropdownlistcolumn/main.ts',
        grid_customcomboboxcolumn: './app/grid/customcomboboxcolumn/main.ts',
        grid_cascadingcomboboxes: './app/grid/cascadingcomboboxes/main.ts',
        grid_fullrowedit: './app/grid/fullrowedit/main.ts',
        grid_roweditwitheverpresentrow: './app/grid/roweditwitheverpresentrow/main.ts',
        grid_customcolumneditor: './app/grid/customcolumneditor/main.ts',
        grid_customroweditor: './app/grid/customroweditor/main.ts',
        grid_bindingtoarray: './app/grid/bindingtoarray/main.ts',
        grid_bindingtojsarray: './app/grid/bindingtojsarray/main.ts',
        grid_bindingtoobservablearray: './app/grid/bindingtoobservablearray/main.ts',
        grid_bindingtoxml: './app/grid/bindingtoxml/main.ts',
        grid_bindingtojson: './app/grid/bindingtojson/main.ts',
        grid_bindingtojsonusingphp: './app/grid/bindingtojsonusingphp/main.ts',
        grid_bindingtojsonstring: './app/grid/bindingtojsonstring/main.ts',
        grid_bindingtoremotedata: './app/grid/bindingtoremotedata/main.ts',
        grid_bindingtocsv: './app/grid/bindingtocsv/main.ts',
        grid_bindingtotsv: './app/grid/bindingtotsv/main.ts',
        grid_largedataset: './app/grid/largedataset/main.ts',
        grid_manycolumns: './app/grid/manycolumns/main.ts',
        grid_refreshdata: './app/grid/refreshdata/main.ts',
        grid_virtualpaging: './app/grid/virtualpaging/main.ts'
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
