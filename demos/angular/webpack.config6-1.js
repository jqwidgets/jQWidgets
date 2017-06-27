'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        grid_virtualscrolling: './app/grid/virtualscrolling/main.ts',
        grid_loadfromtable: './app/grid/loadfromtable/main.ts',
        grid_aggregates: './app/grid/aggregates/main.ts',
        grid_customaggregates: './app/grid/customaggregates/main.ts',
        grid_aggregatesrenderer: './app/grid/aggregatesrenderer/main.ts',
        grid_aggregatesgrouping: './app/grid/aggregatesgrouping/main.ts',
        grid_textalignment: './app/grid/textalignment/main.ts',
        grid_showhidecolumns: './app/grid/showhidecolumns/main.ts',
        grid_autosizecolumns: './app/grid/autosizecolumns/main.ts',
        grid_percentagewidthforcolumns: './app/grid/percentagewidthforcolumns/main.ts',
        grid_checkboxcolumn: './app/grid/checkboxcolumn/main.ts',
        grid_rownumbercolumn: './app/grid/rownumbercolumn/main.ts',
        grid_columntemplate: './app/grid/columntemplate/main.ts',
        grid_widgetcolumn: './app/grid/widgetcolumn/main.ts',
        grid_columnshierarchy: './app/grid/columnshierarchy/main.ts',
        grid_cellsstyling: './app/grid/cellsstyling/main.ts',
        grid_imagecolumn: './app/grid/imagecolumn/main.ts',
        grid_columnsresize: './app/grid/columnsresize/main.ts',
        grid_columnsreorder: './app/grid/columnsreorder/main.ts',
        grid_pinnedfrozencolumns: './app/grid/pinnedfrozencolumns/main.ts',
        grid_columntooltips: './app/grid/columntooltips/main.ts',
        grid_computedcolumn: './app/grid/computedcolumn/main.ts',
        grid_dynamiccolumns: './app/grid/dynamiccolumns/main.ts',
        grid_foreignkeycolumn: './app/grid/foreignkeycolumn/main.ts',
        grid_keysvaluescolumn: './app/grid/keysvaluescolumn/main.ts',
        grid_rowselection: './app/grid/rowselection/main.ts',
        grid_cellsselection: './app/grid/cellsselection/main.ts',
        grid_checkboxselection: './app/grid/checkboxselection/main.ts',
        grid_dragdrop: './app/grid/dragdrop/main.ts',
        grid_addnewrow: './app/grid/addnewrow/main.ts',
        grid_addnewbottomrow: './app/grid/addnewbottomrow/main.ts',
        grid_updatingactionsatruntime: './app/grid/updatingactionsatruntime/main.ts',
        grid_everpresentrowwithcustomwidgets: './app/grid/everpresentrowwithcustomwidgets/main.ts',
        grid_everpresentrowwithcolumns: './app/grid/everpresentrowwithcolumns/main.ts',
        grid_positioning: './app/grid/positioning/main.ts',
        grid_validation: './app/grid/validation/main.ts',
        grid_addremoveupdate: './app/grid/addremoveupdate/main.ts',
        grid_localizedaddnewrow: './app/grid/localizedaddnewrow/main.ts',
        grid_rowdetails: './app/grid/rowdetails/main.ts',
        grid_nestedgrids: './app/grid/nestedgrids/main.ts',
        grid_masterdetails: './app/grid/masterdetails/main.ts',
        grid_deferedscrolling: './app/grid/deferedscrolling/main.ts',
        grid_deferedscrollingonalargedataset: './app/grid/deferedscrollingonalargedataset/main.ts',
        grid_statusbar: './app/grid/statusbar/main.ts',
        grid_toolbar: './app/grid/toolbar/main.ts',
        grid_contextmenu: './app/grid/contextmenu/main.ts',
        grid_autorowheight: './app/grid/autorowheight/main.ts',
        grid_customkeyboardnavigation: './app/grid/customkeyboardnavigation/main.ts',
        grid_fluidsize: './app/grid/fluidsize/main.ts',
        grid_gridinjqxtabs: './app/grid/gridinjqxtabs/main.ts',
        grid_keyboardnavigation: './app/grid/keyboardnavigation/main.ts',
        grid_righttoleftlayout: './app/grid/righttoleftlayout/main.ts'
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
