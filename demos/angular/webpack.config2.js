'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {  
        chart_lineseries: './app/chart/lineseries/main.ts',
        chart_stackedlineseries: './app/chart/stackedlineseries/main.ts',
        chart_100stackedlineseries: './app/chart/100stackedlineseries/main.ts',
        chart_lineseriesmarkers: './app/chart/lineseriesmarkers/main.ts',
        chart_lineseriewithmissingpoints: './app/chart/lineseriewithmissingpoints/main.ts',
        chart_lineseriewithconditionalcolors: './app/chart/lineseriewithconditionalcolors/main.ts',
        chart_lineseriewithmultipledatasources: './app/chart/lineseriewithmultipledatasources/main.ts',
        chart_steplineseries: './app/chart/steplineseries/main.ts',
        chart_splineseries: './app/chart/splineseries/main.ts',
        chart_areaseries: './app/chart/areaseries/main.ts',
        chart_stackedareaseries: './app/chart/stackedareaseries/main.ts',
        chart_100stackedareaseries: './app/chart/100stackedareaseries/main.ts',
        chart_areasplineseries: './app/chart/areasplineseries/main.ts',
        chart_columnseries: './app/chart/columnseries/main.ts',
        chart_columnlocaldata: './app/chart/columnlocaldata/main.ts',
        chart_stackedcolumnseries: './app/chart/stackedcolumnseries/main.ts',
        chart_stackedandgroupedcolumnseries: './app/chart/stackedandgroupedcolumnseries/main.ts',
        chart_100stackedcolumns: './app/chart/100stackedcolumns/main.ts',
        chart_columnseriewithconditionalcolors: './app/chart/columnseriewithconditionalcolors/main.ts',
        chart_columnrange: './app/chart/columnrange/main.ts',
        chart_barseries: './app/chart/barseries/main.ts',
        chart_columnseriesspacing: './app/chart/columnseriesspacing/main.ts',
        chart_negativevalues: './app/chart/negativevalues/main.ts',
        chart_negativebarseries: './app/chart/negativebarseries/main.ts',
        chart_columnserieswithmissingvalues: './app/chart/columnserieswithmissingvalues/main.ts',
        chart_columnserieswithlabels: './app/chart/columnserieswithlabels/main.ts',
        chart_pieseries: './app/chart/pieseries/main.ts',
        chart_pieserieslegend: './app/chart/pieserieslegend/main.ts',
        chart_partialpieseries: './app/chart/partialpieseries/main.ts',
        chart_donutseries: './app/chart/donutseries/main.ts',
        chart_donutlabels: './app/chart/donutlabels/main.ts',
        chart_columnswithlogarithmicaxis: './app/chart/columnswithlogarithmicaxis/main.ts',
        chart_columnswithbase10logarithmicaxis: './app/chart/columnswithbase10logarithmicaxis/main.ts',
        chart_logarithmicaxisbaseline: './app/chart/logarithmicaxisbaseline/main.ts',
        chart_percentagestackedcolumns: './app/chart/percentagestackedcolumns/main.ts',
        chart_stackedcolumns: './app/chart/stackedcolumns/main.ts',
        chart_logarithmicXaxis: './app/chart/logarithmicXaxis/main.ts',
        chart_splinearea: './app/chart/splinearea/main.ts',
        chart_columnsrange: './app/chart/columnsrange/main.ts',
        chart_logarithmicwaterfallseries: './app/chart/logarithmicwaterfallseries/main.ts',
        chart_stackedwaterfallseries: './app/chart/stackedwaterfallseries/main.ts',
        chart_datetimexaxisrangeselection: './app/chart/datetimexaxisrangeselection/main.ts',
        chart_nondatexaxisrangeselection: './app/chart/nondatexaxisrangeselection/main.ts',
        chart_waterfallseries: './app/chart/waterfallseries/main.ts',
        chart_waterfallwithmultipleseries: './app/chart/waterfallwithmultipleseries/main.ts',
        chart_candlestickchart: './app/chart/candlestickchart/main.ts',
        chart_ohlcchart: './app/chart/ohlcchart/main.ts',
        chart_polarseries: './app/chart/polarseries/main.ts',
        chart_partialpolarchart: './app/chart/partialpolarchart/main.ts',
        chart_polarseriesbands: './app/chart/polarseriesbands/main.ts',
        chart_spiderchart: './app/chart/spiderchart/main.ts',
        chart_funnelchart: './app/chart/funnelchart/main.ts',
        chart_stackedfunnelchart: './app/chart/stackedfunnelchart/main.ts',
        chart_pyramidchart: './app/chart/pyramidchart/main.ts',
        chart_stackedpyramidchart: './app/chart/stackedpyramidchart/main.ts',
        chart_bublechart: './app/chart/bublechart/main.ts',
        chart_scatterchart: './app/chart/scatterchart/main.ts',
        chart_multipleseriestypes: './app/chart/multipleseriestypes/main.ts',
        chart_liveupdates: './app/chart/liveupdates/main.ts',
        chart_liveupdateseverysecond: './app/chart/liveupdateseverysecond/main.ts',
        chart_liveupdatesperformance: './app/chart/liveupdatesperformance/main.ts',
        chart_colorbands: './app/chart/colorbands/main.ts',
        chart_colorbandsxaxis: './app/chart/colorbandsxaxis/main.ts',
        chart_chartannotations: './app/chart/chartannotations/main.ts',
        chart_dashboard: './app/chart/dashboard/main.ts',
        chart_sparklines: './app/chart/sparklines/main.ts',
        chart_axisposition: './app/chart/axisposition/main.ts',
        chart_axisorientation: './app/chart/axisorientation/main.ts',
        chart_axissettings: './app/chart/axissettings/main.ts',
        chart_axisoffsettovalue: './app/chart/axisoffsettovalue/main.ts',
        chart_axiscustomoffsetsandcolorbands: './app/chart/axiscustomoffsetsandcolorbands/main.ts',
        chart_axiscustomoffsets: './app/chart/axiscustomoffsets/main.ts',
        chart_intervalandsteps: './app/chart/intervalandsteps/main.ts',
        chart_rigthtoleftlayout: './app/chart/rigthtoleftlayout/main.ts',
        chart_textrotation: './app/chart/textrotation/main.ts',
        chart_textwrapping: './app/chart/textwrapping/main.ts',
        chart_alternatingbackgroundcolor: './app/chart/alternatingbackgroundcolor/main.ts',
        chart_tooltipformatting: './app/chart/tooltipformatting/main.ts',
        chart_chartcrosshairs: './app/chart/chartcrosshairs/main.ts',
        chart_gridlinesdashstyle: './app/chart/gridlinesdashstyle/main.ts',
        chart_greyscaleseries: './app/chart/greyscaleseries/main.ts',
        chart_customstyling: './app/chart/customstyling/main.ts',
        chart_darkbackground: './app/chart/darkbackground/main.ts',
        chart_themes: './app/chart/themes/main.ts',
        chart_customdrawing: './app/chart/customdrawing/main.ts',
        chart_fluidsize: './app/chart/fluidsize/main.ts',
        chart_chartevents: './app/chart/chartevents/main.ts',
        chart_chartrangeselectorevents: './app/chart/chartrangeselectorevents/main.ts',
        chart_exporttoimage: './app/chart/exporttoimage/main.ts',
        chart_chartprinting: './app/chart/chartprinting/main.ts',
        chart_chartwithgrid: './app/chart/chartwithgrid/main.ts',
        chart_chartwithtabs: './app/chart/chartwithtabs/main.ts',
        chart_createcomponent: './app/chart/createcomponent/main.ts'
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
