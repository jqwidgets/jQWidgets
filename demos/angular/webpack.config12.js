'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        treegrid_defaultfunctionality: './app/treegrid/defaultfunctionality/main.ts',
        treegrid_virtualmode: './app/treegrid/virtualmode/main.ts',
        treegrid_localdata: './app/treegrid/localdata/main.ts',
        treegrid_xmldata: './app/treegrid/xmldata/main.ts',
        treegrid_nestedxmldata: './app/treegrid/nestedxmldata/main.ts',
        treegrid_jsondata: './app/treegrid/jsondata/main.ts',
        treegrid_nestedjsondata: './app/treegrid/nestedjsondata/main.ts',
        treegrid_csvdata: './app/treegrid/csvdata/main.ts',
        treegrid_tabdata: './app/treegrid/tabdata/main.ts',
        treegrid_virtualmodewithajax: './app/treegrid/virtualmodewithajax/main.ts',
        treegrid_columnshierarchy: './app/treegrid/columnshierarchy/main.ts',
        treegrid_columnformatting: './app/treegrid/columnformatting/main.ts',
        treegrid_columnalignment: './app/treegrid/columnalignment/main.ts',
        treegrid_columnresize: './app/treegrid/columnresize/main.ts',
        treegrid_columnreorder: './app/treegrid/columnreorder/main.ts',
        treegrid_showorhidecolumn: './app/treegrid/showorhidecolumn/main.ts',
        treegrid_pinnedfrozencolumn: './app/treegrid/pinnedfrozencolumn/main.ts',
        treegrid_columncheckboxes: './app/treegrid/columncheckboxes/main.ts',
        treegrid_columnhierarchicalcheckboxes: './app/treegrid/columnhierarchicalcheckboxes/main.ts',
        treegrid_columnicons: './app/treegrid/columnicons/main.ts',
        treegrid_columnsmallicons: './app/treegrid/columnsmallicons/main.ts',
        treegrid_headertemplate: './app/treegrid/headertemplate/main.ts',
        treegrid_inlinerow: './app/treegrid/inlinerow/main.ts',
        treegrid_dialog: './app/treegrid/dialog/main.ts',
        treegrid_commandcolumn: './app/treegrid/commandcolumn/main.ts',
        treegrid_lockrow: './app/treegrid/lockrow/main.ts',
        treegrid_celledit: './app/treegrid/celledit/main.ts',
        treegrid_customeditors: './app/treegrid/customeditors/main.ts',
        treegrid_propertyeditor: './app/treegrid/propertyeditor/main.ts',
        treegrid_validation: './app/treegrid/validation/main.ts',
        treegrid_sorting: './app/treegrid/sorting/main.ts',
        treegrid_sortingapi: './app/treegrid/sortingapi/main.ts',
        treegrid_filtering: './app/treegrid/filtering/main.ts',
        treegrid_searchfield: './app/treegrid/searchfield/main.ts',
        treegrid_advancedfiltering: './app/treegrid/advancedfiltering/main.ts',
        treegrid_filteringapi: './app/treegrid/filteringapi/main.ts',
        treegrid_paging: './app/treegrid/paging/main.ts',
        treegrid_pagingbyrootrecords: './app/treegrid/pagingbyrootrecords/main.ts',
        treegrid_pagingapi: './app/treegrid/pagingapi/main.ts',
        treegrid_aggregates: './app/treegrid/aggregates/main.ts',
        treegrid_aggregatestemplate: './app/treegrid/aggregatestemplate/main.ts',
        treegrid_manualaggregates: './app/treegrid/manualaggregates/main.ts',
        treegrid_rowdetails: './app/treegrid/rowdetails/main.ts',
        treegrid_localization: './app/treegrid/localization/main.ts',
        treegrid_dataexport: './app/treegrid/dataexport/main.ts',
        treegrid_dataprinting: './app/treegrid/dataprinting/main.ts',
        treegrid_datagrouping: './app/treegrid/datagrouping/main.ts',
        treegrid_fluidsize: './app/treegrid/fluidsize/main.ts',
        treegrid_conditionalformatting: './app/treegrid/conditionalformatting/main.ts',
        treegrid_conditionalrendering: './app/treegrid/conditionalrendering/main.ts',
        treegrid_contextmenu: './app/treegrid/contextmenu/main.ts',
        treegrid_keyboardnavigation: './app/treegrid/keyboardnavigation/main.ts',
        treegrid_righttoleftlayout: './app/treegrid/righttoleftlayout/main.ts',

        treemap_defaultfunctionality: './app/treemap/defaultfunctionality/main.ts',
        treemap_automaticrendering: './app/treemap/automaticrendering/main.ts',
        treemap_rangesrendering: './app/treemap/rangesrendering/main.ts',
        treemap_customrendering: './app/treemap/customrendering/main.ts',
        treemap_fluidsize: './app/treemap/fluidsize/main.ts',
        treemap_bindingtojson: './app/treemap/bindingtojson/main.ts',
        treemap_bindingtotabdata: './app/treemap/bindingtotabdata/main.ts',

        validator_defaultfunctionality: './app/validator/defaultfunctionality/main.ts',
        validator_errorlabels: './app/validator/errorlabels/main.ts',
        validator_righttoleftlayout: './app/validator/righttoleftlayout/main.ts',

        window_defaultfunctionality: './app/window/defaultfunctionality/main.ts',
        window_multiplewindows: './app/window/multiplewindows/main.ts',
        window_settings: './app/window/settings/main.ts',
        window_events: './app/window/events/main.ts',
        window_keyboardnavigation: './app/window/keyboardnavigation/main.ts',
        window_righttoleftlayout: './app/window/righttoleftlayout/main.ts'
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
