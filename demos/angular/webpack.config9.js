'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        popover_defaultfunctionality: './app/popover/defaultfunctionality/main.ts',
        popover_positioning: './app/popover/positioning/main.ts',
        popover_bottompositioning: './app/popover/bottompositioning/main.ts',
        popover_modalpopover: './app/popover/modalpopover/main.ts',
        popover_righttoleftlayout: './app/popover/righttoleftlayout/main.ts',

        progressbar_defaultfunctionality: './app/progressbar/defaultfunctionality/main.ts',
        progressbar_colorranges: './app/progressbar/colorranges/main.ts',
        progressbar_templates: './app/progressbar/templates/main.ts',
        progressbar_layout: './app/progressbar/layout/main.ts',
        progressbar_righttoleftlayout: './app/progressbar/righttoleftlayout/main.ts',

        rangeselector_defaultfunctionality: './app/rangeselector/defaultfunctionality/main.ts',
        rangeselector_datascale: './app/rangeselector/datascale/main.ts',
        rangeselector_timescale: './app/rangeselector/timescale/main.ts',
        rangeselector_numericscale: './app/rangeselector/numericscale/main.ts',
        rangeselector_negativescale: './app/rangeselector/negativescale/main.ts',
        rangeselector_decimalscale: './app/rangeselector/decimalscale/main.ts',
        rangeselector_backgroundimage: './app/rangeselector/backgroundimage/main.ts',
        rangeselector_chartonbackground: './app/rangeselector/chartonbackground/main.ts',
        rangeselector_rangeselectorasafilter: './app/rangeselector/rangeselectorasafilter/main.ts',
        rangeselector_fluidsize: './app/rangeselector/fluidsize/main.ts',
        rangeselector_customizedmarkers: './app/rangeselector/customizedmarkers/main.ts',
        rangeselector_righttoleftlayout: './app/rangeselector/righttoleftlayout/main.ts',

        rating_defaultfunctionality: './app/rating/defaultfunctionality/main.ts',
        rating_twowaydatabinding: './app/rating/twowaydatabinding/main.ts',

        responsivepanel_defaultfunctionality: './app/responsivepanel/defaultfunctionality/main.ts',
        responsivepanel_integrationwithjqxmenu: './app/responsivepanel/integrationwithjqxmenu/main.ts',
        responsivepanel_fluidsize: './app/responsivepanel/fluidsize/main.ts',
        responsivepanel_righttoleftlayout: './app/responsivepanel/righttoleftlayout/main.ts',

        ribbon_defaultfunctionality: './app/ribbon/defaultfunctionality/main.ts',
        ribbon_collapsible: './app/ribbon/collapsible/main.ts',
        ribbon_ribbonatthebottom: './app/ribbon/ribbonatthebottom/main.ts',
        ribbon_verticalribbon: './app/ribbon/verticalribbon/main.ts',
        ribbon_verticalrightposition: './app/ribbon/verticalrightposition/main.ts',
        ribbon_popuplayout: './app/ribbon/popuplayout/main.ts',
        ribbon_integrationwithotherwidgets: './app/ribbon/integrationwithotherwidgets/main.ts',
        ribbon_scrolling: './app/ribbon/scrolling/main.ts',
        ribbon_events: './app/ribbon/events/main.ts',
        ribbon_fluidsize: './app/ribbon/fluidsize/main.ts',
        ribbon_righttoleftlayout: './app/ribbon/righttoleftlayout/main.ts'
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
