var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            pivotgrid_pivot_designer: __dirname + '/app/pivotgrid/pivot-designer/app.js',
            pivotgrid_tree_olap_style_rows: __dirname + '/app/pivotgrid/olap-tree-style-rows/app.js',
            pivotgrid_totals: __dirname + '/app/pivotgrid/totals/app.js',
            pivotgrid_values_on_columns: __dirname + '/app/pivotgrid/values-on-columns/app.js',
            pivotgrid_values_on_rows: __dirname + '/app/pivotgrid/values-on-rows/app.js',
            pivotgrid_localization: __dirname + '/app/pivotgrid/localization/app.js',
            pivotgrid_events: __dirname + '/app/pivotgrid/events/app.js',
            pivotgrid_drill_through: __dirname + '/app/pivotgrid/drill-through/app.js',
            pivotgrid_custom_rendering: __dirname + '/app/pivotgrid/custom-rendering/app.js',
            pivotgrid_cell_values_alignment: __dirname + '/app/pivotgrid/cell-values-alignment/app.js',
            pivotgrid_row_columns_cells_css_styling: __dirname + '/app/pivotgrid/row-columns-cells-css-styling/app.js',
            pivotgrid_custom_pivot_function: __dirname + '/app/pivotgrid/custom-pivot-function/app.js'
        },
        output:
        {
            path: __dirname + '/build',
            filename: '[name].bundle.js'
        },
        module:
        {
            loaders:
            [{
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                    presets: ['es2015', 'react']
                }
            }]
        },
        plugins:
        [
            new webpack.DefinePlugin
                ({
                    'process.env':
                    {
                        'NODE_ENV': JSON.stringify('production')
                    }
                }),
            new webpack.optimize.UglifyJsPlugin
                ({
                    mangle: true,
                    sourcemap: false,
                    compress: { warnings: false }
                })
        ]
    };
