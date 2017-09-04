var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            bargauge_addandremovevalues: __dirname + '/app/bargauge/addandremovevalues/app.js',
            bargauge_autochangevalue: __dirname + '/app/bargauge/autochangevalue/app.js',
            bargauge_customtooltips: __dirname + '/app/bargauge/customtooltips/app.js',
            bargauge_defaultfunctionality: __dirname + '/app/bargauge/defaultfunctionality/app.js',
            bargauge_fluidsize: __dirname + '/app/bargauge/fluidsize/app.js',
            bargauge_negativevalues: __dirname + '/app/bargauge/negativevalues/app.js',
            bargauge_sequentialgrowth: __dirname + '/app/bargauge/sequentialgrowth/app.js',
            bargauge_updatevalues: __dirname + '/app/bargauge/updatevalues/app.js',

            bulletchart_defaultfunctionality: __dirname + '/app/bulletchart/defaultfunctionality/app.js',
            bulletchart_fluidsize: __dirname + '/app/bulletchart/fluidsize/app.js',
            bulletchart_labelsformatting: __dirname + '/app/bulletchart/labelsformatting/app.js',
            bulletchart_multipleranges: __dirname + '/app/bulletchart/multipleranges/app.js',
            bulletchart_negativevalues: __dirname + '/app/bulletchart/negativevalues/app.js',
            bulletchart_rangesstyling: __dirname + '/app/bulletchart/rangesstyling/app.js',
            bulletchart_righttoleftlayout: __dirname + '/app/bulletchart/righttoleftlayout/app.js',
            bulletchart_settings: __dirname + '/app/bulletchart/settings/app.js',
            bulletchart_verticalbulletchart: __dirname + '/app/bulletchart/verticalbulletchart/app.js',

            button_defaultfunctionality: __dirname + '/app/buttons/defaultfunctionality/app.js',
            button_fluidsize: __dirname + '/app/buttons/fluidsize/app.js',
            button_imageposition: __dirname + '/app/buttons/imageposition/app.js',
            button_images: __dirname + '/app/buttons/images/app.js',
            button_linkbutton: __dirname + '/app/linkbutton/defaultfunctionality/app.js',
            button_repeatbutton: __dirname + '/app/repeatbutton/defaultfunctionality/app.js',
            button_righttoleftlayout: __dirname + '/app/buttons/righttoleftlayout/app.js',
            button_templates: __dirname + '/app/buttons/templates/app.js',
            button_textposition: __dirname + '/app/buttons/textposition/app.js',
            buttongroup_defaultfunctionality: __dirname + '/app/buttongroup/defaultfunctionality/app.js',
            buttongroup_templates: __dirname + '/app/buttongroup/templates/app.js',
            checkbox_defaultfunctionality: __dirname + '/app/checkbox/defaultfunctionality/app.js',
            dropdownbutton_defaultfunctionality: __dirname + '/app/dropdownbutton/defaultfunctionality/app.js',
            radiobutton_defaultfunctionality: __dirname + '/app/radiobutton/defaultfunctionality/app.js',
            switchbutton_defaultfunctionality: __dirname + '/app/switchbutton/defaultfunctionality/app.js',
            togglebutton_defaultfunctionality: __dirname + '/app/togglebutton/defaultfunctionality/app.js',

            calendar_defaultfunctionality: __dirname + '/app/calendar/defaultfunctionality/app.js',
            calendar_disabled: __dirname + '/app/calendar/disabled/app.js',
            calendar_displayweekendsstyle: __dirname + '/app/calendar/displayweekendsstyle/app.js',
            calendar_events: __dirname + '/app/calendar/events/app.js',
            calendar_firstdayoftheweek: __dirname + '/app/calendar/firstdayoftheweek/app.js',
            calendar_fluidsize: __dirname + '/app/calendar/fluidsize/app.js',
            calendar_hideothermonthdays: __dirname + '/app/calendar/hideothermonthdays/app.js',
            calendar_keyboardnavigation: __dirname + '/app/calendar/keyboardnavigation/app.js',
            calendar_localization: __dirname + '/app/calendar/localization/app.js',
            calendar_rangeselection: __dirname + '/app/calendar/rangeselection/app.js',
            calendar_restrictdaterange: __dirname + '/app/calendar/restrictdaterange/app.js',
            calendar_restricteddates: __dirname + '/app/calendar/restricteddates/app.js',
            calendar_righttoleftlayout: __dirname + '/app/calendar/righttoleftlayout/app.js',
            calendar_showweekoftheyear: __dirname + '/app/calendar/showweekoftheyear/app.js',
            calendar_specialdates: __dirname + '/app/calendar/specialdates/app.js',

            chart_lineseries: __dirname + '/app/chart/lineseries/app.js',
            chart_stackedlineseries: __dirname + '/app/chart/stackedlineseries/app.js',
            chart_100stackedlineseries: __dirname + '/app/chart/100stackedlineseries/app.js',
            chart_lineseriesmarkers: __dirname + '/app/chart/lineseriesmarkers/app.js',
            chart_lineseriewithmissingpoints: __dirname + '/app/chart/lineseriewithmissingpoints/app.js',
            chart_lineseriewithconditionalcolors: __dirname + '/app/chart/lineseriewithconditionalcolors/app.js',
            chart_lineseriewithmultipledatasources: __dirname + '/app/chart/lineseriewithmultipledatasources/app.js',
            chart_steplineseries: __dirname + '/app/chart/steplineseries/app.js',
            chart_splineseries: __dirname + '/app/chart/splineseries/app.js',
            chart_areaseries: __dirname + '/app/chart/areaseries/app.js',
            chart_stackedareaseries: __dirname + '/app/chart/stackedareaseries/app.js',
            chart_100stackedareaseries: __dirname + '/app/chart/100stackedareaseries/app.js',
            chart_areasplineseries: __dirname + '/app/chart/areasplineseries/app.js',
            chart_columnseries: __dirname + '/app/chart/columnseries/app.js',
            chart_columnlocaldata: __dirname + '/app/chart/columnlocaldata/app.js',
            chart_stackedcolumnseries: __dirname + '/app/chart/stackedcolumnseries/app.js',
            chart_stackedandgroupedcolumnseries: __dirname + '/app/chart/stackedandgroupedcolumnseries/app.js',
            chart_100stackedcolumns: __dirname + '/app/chart/100stackedcolumns/app.js',
            chart_columnseriewithconditionalcolors: __dirname + '/app/chart/columnseriewithconditionalcolors/app.js',
            chart_columnrange: __dirname + '/app/chart/columnrange/app.js',
            chart_barseries: __dirname + '/app/chart/barseries/app.js',
            chart_columnseriesspacing: __dirname + '/app/chart/columnseriesspacing/app.js',
            chart_negativevalues: __dirname + '/app/chart/negativevalues/app.js',
            chart_negativebarseries: __dirname + '/app/chart/negativebarseries/app.js',
            chart_columnserieswithmissingvalues: __dirname + '/app/chart/columnserieswithmissingvalues/app.js',
            chart_columnserieswithlabels: __dirname + '/app/chart/columnserieswithlabels/app.js',
            chart_pieseries: __dirname + '/app/chart/pieseries/app.js',
            chart_pieserieslegend: __dirname + '/app/chart/pieserieslegend/app.js',
            chart_partialpieseries: __dirname + '/app/chart/partialpieseries/app.js',
            chart_donutseries: __dirname + '/app/chart/donutseries/app.js',
            chart_donutlabels: __dirname + '/app/chart/donutlabels/app.js',
            chart_columnswithlogarithmicaxis: __dirname + '/app/chart/columnswithlogarithmicaxis/app.js',
            chart_columnswithbase10logarithmicaxis: __dirname + '/app/chart/columnswithbase10logarithmicaxis/app.js',
            chart_logarithmicaxisbaseline: __dirname + '/app/chart/logarithmicaxisbaseline/app.js',
            chart_percentagestackedcolumns: __dirname + '/app/chart/percentagestackedcolumns/app.js',
            chart_stackedcolumns: __dirname + '/app/chart/stackedcolumns/app.js',
            chart_logarithmicXaxis: __dirname + '/app/chart/logarithmicXaxis/app.js',
            chart_splinearea: __dirname + '/app/chart/splinearea/app.js',
            chart_columnsrange: __dirname + '/app/chart/columnsrange/app.js',
            chart_logarithmicwaterfallseries: __dirname + '/app/chart/logarithmicwaterfallseries/app.js',
            chart_stackedwaterfallseries: __dirname + '/app/chart/stackedwaterfallseries/app.js',
            chart_datetimexaxisrangeselection: __dirname + '/app/chart/datetimexaxisrangeselection/app.js',
            chart_nondatexaxisrangeselection: __dirname + '/app/chart/nondatexaxisrangeselection/app.js',
            chart_waterfallseries: __dirname + '/app/chart/waterfallseries/app.js',
            chart_waterfallwithmultipleseries: __dirname + '/app/chart/waterfallwithmultipleseries/app.js',
            chart_candlestickchart: __dirname + '/app/chart/candlestickchart/app.js',
            chart_ohlcchart: __dirname + '/app/chart/ohlcchart/app.js',
            chart_polarseries: __dirname + '/app/chart/polarseries/app.js',
            chart_partialpolarchart: __dirname + '/app/chart/partialpolarchart/app.js',
            chart_polarseriesbands: __dirname + '/app/chart/polarseriesbands/app.js',
            chart_spiderchart: __dirname + '/app/chart/spiderchart/app.js',
            chart_funnelchart: __dirname + '/app/chart/funnelchart/app.js',
            chart_stackedfunnelchart: __dirname + '/app/chart/stackedfunnelchart/app.js',
            chart_pyramidchart: __dirname + '/app/chart/pyramidchart/app.js',
            chart_stackedpyramidchart: __dirname + '/app/chart/stackedpyramidchart/app.js',
            chart_bublechart: __dirname + '/app/chart/bublechart/app.js',
            chart_scatterchart: __dirname + '/app/chart/scatterchart/app.js',
            chart_multipleseriestypes: __dirname + '/app/chart/multipleseriestypes/app.js',
            chart_liveupdates: __dirname + '/app/chart/liveupdates/app.js',
            chart_liveupdateseverysecond: __dirname + '/app/chart/liveupdateseverysecond/app.js',
            chart_liveupdatesperformance: __dirname + '/app/chart/liveupdatesperformance/app.js',
            chart_colorbands: __dirname + '/app/chart/colorbands/app.js',
            chart_colorbandsxaxis: __dirname + '/app/chart/colorbandsxaxis/app.js',
            chart_chartannotations: __dirname + '/app/chart/chartannotations/app.js',
            chart_dashboard: __dirname + '/app/chart/dashboard/app.js',
            chart_sparklines: __dirname + '/app/chart/sparklines/app.js',
            chart_axisposition: __dirname + '/app/chart/axisposition/app.js',
            chart_axisorientation: __dirname + '/app/chart/axisorientation/app.js',
            chart_axissettings: __dirname + '/app/chart/axissettings/app.js',
            chart_axisoffsettovalue: __dirname + '/app/chart/axisoffsettovalue/app.js',
            chart_axiscustomoffsetsandcolorbands: __dirname + '/app/chart/axiscustomoffsetsandcolorbands/app.js',
            chart_axiscustomoffsets: __dirname + '/app/chart/axiscustomoffsets/app.js',
            chart_intervalandsteps: __dirname + '/app/chart/intervalandsteps/app.js',
            chart_rigthtoleftlayout: __dirname + '/app/chart/rigthtoleftlayout/app.js',
            chart_textrotation: __dirname + '/app/chart/textrotation/app.js',
            chart_textwrapping: __dirname + '/app/chart/textwrapping/app.js',
            chart_alternatingbackgroundcolor: __dirname + '/app/chart/alternatingbackgroundcolor/app.js',
            chart_tooltipformatting: __dirname + '/app/chart/tooltipformatting/app.js',
            chart_chartcrosshairs: __dirname + '/app/chart/chartcrosshairs/app.js',
            chart_gridlinesdashstyle: __dirname + '/app/chart/gridlinesdashstyle/app.js',
            chart_greyscaleseries: __dirname + '/app/chart/greyscaleseries/app.js',
            chart_customstyling: __dirname + '/app/chart/customstyling/app.js',
            chart_darkbackground: __dirname + '/app/chart/darkbackground/app.js',
            chart_themes: __dirname + '/app/chart/themes/app.js',
            chart_customdrawing: __dirname + '/app/chart/customdrawing/app.js',
            chart_fluidsize: __dirname + '/app/chart/fluidsize/app.js',
            chart_chartevents: __dirname + '/app/chart/chartevents/app.js',
            chart_chartrangeselectorevents: __dirname + '/app/chart/chartrangeselectorevents/app.js',
            chart_exporttoimage: __dirname + '/app/chart/exporttoimage/app.js',
            chart_chartprinting: __dirname + '/app/chart/chartprinting/app.js',
            chart_chartwithgrid: __dirname + '/app/chart/chartwithgrid/app.js',
            chart_chartwithtabs: __dirname + '/app/chart/chartwithtabs/app.js'

        },
        output:
        {
            path: __dirname + '/build',
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                //{
                //    test: /\.json$/,
                //    loader: 'json-loader'
                //},
                //{
                //    test: /\.html$/,
                //    use: {
                //        loader: 'file-loader',
                //        query: {
                //            name: '[name].[ext]'
                //        }
                //    }
                //},
                //{
                //    test: /\.css$/,
                //    loader: "style-loader!css-loader"
                //},
                //{
                //    test: /\.scss$/,
                //    use: ['style-loader', 'css-loader', 'sass-loader']
                //},
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                            cacheDirectory: true
                        }
                    }]
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
