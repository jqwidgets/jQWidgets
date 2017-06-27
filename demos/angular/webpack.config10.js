'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        scheduler_defaultfunctionality: './app/scheduler/defaultfunctionality/main.ts',
        scheduler_resources: './app/scheduler/resources/main.ts',
        scheduler_timelineviews: './app/scheduler/timelineviews/main.ts',
        scheduler_agendaview: './app/scheduler/agendaview/main.ts',
        scheduler_bindingtojson: './app/scheduler/bindingtojson/main.ts',
        scheduler_bindingtoicalendar: './app/scheduler/bindingtoicalendar/main.ts',
        scheduler_appointmentstatuses: './app/scheduler/appointmentstatuses/main.ts',
        scheduler_appointmentrestrictions: './app/scheduler/appointmentrestrictions/main.ts',
        scheduler_appointmentcustomization: './app/scheduler/appointmentcustomization/main.ts',
        scheduler_appointmentsexacttimerendering: './app/scheduler/appointmentsexacttimerendering/main.ts',
        scheduler_recurringappointments: './app/scheduler/recurringappointments/main.ts',
        scheduler_timezones: './app/scheduler/timezones/main.ts',
        scheduler_timescaleszooming: './app/scheduler/timescaleszooming/main.ts',
        scheduler_timescalesconfiguration: './app/scheduler/timescalesconfiguration/main.ts',
        scheduler_timelineviewswithcustomslotwidth: './app/scheduler/timelineviewswithcustomslotwidth/main.ts',
        scheduler_rowheight: './app/scheduler/rowheight/main.ts',
        scheduler_hidetimeruler: './app/scheduler/hidetimeruler/main.ts',
        scheduler_hideweekends: './app/scheduler/hideweekends/main.ts',
        scheduler_contextmenu: './app/scheduler/contextmenu/main.ts',
        scheduler_editdialog: './app/scheduler/editdialog/main.ts',
        scheduler_worktime: './app/scheduler/worktime/main.ts',
        scheduler_rowheightconfiguration: './app/scheduler/rowheightconfiguration/main.ts',
        scheduler_monthviewwithautorowheight: './app/scheduler/monthviewwithautorowheight/main.ts',
        scheduler_monthviewweeknumbers: './app/scheduler/monthviewweeknumbers/main.ts',
        scheduler_events: './app/scheduler/events/main.ts',
        scheduler_keyboardnavigation: './app/scheduler/keyboardnavigation/main.ts',
        scheduler_resourceswithcustomcolumnwidths: './app/scheduler/resourceswithcustomcolumnwidths/main.ts',
        scheduler_verticalresources: './app/scheduler/verticalresources/main.ts',
        scheduler_timelineviewswithresources: './app/scheduler/timelineviewswithresources/main.ts',
        scheduler_dataexport: './app/scheduler/dataexport/main.ts',
        scheduler_dataprinting: './app/scheduler/dataprinting/main.ts',
        scheduler_localization: './app/scheduler/localization/main.ts',
        scheduler_fluidsize: './app/scheduler/fluidsize/main.ts',
        scheduler_righttoleft: './app/scheduler/righttoleft/main.ts',

        scrollbar_defaultfunctionality: './app/scrollbar/defaultfunctionality/main.ts',
        scrollbar_righttoleft: './app/scrollbar/righttoleft/main.ts',

        scrollview_defaultfunctionality: './app/scrollview/defaultfunctionality/main.ts',

        slider_defaultfunctionality: './app/slider/defaultfunctionality/main.ts',
        slider_rangeslider: './app/slider/rangeslider/main.ts',
        slider_verticalslider: './app/slider/verticalslider/main.ts',
        slider_fluidsize: './app/slider/fluidsize/main.ts',
        slider_events: './app/slider/events/main.ts',
        slider_templates: './app/slider/templates/main.ts',
        slider_layout: './app/slider/layout/main.ts',
        slider_slidertooltip: './app/slider/slidertooltip/main.ts',
        slider_sliderlabels: './app/slider/sliderlabels/main.ts',
        slider_keyboardnavigation: './app/slider/keyboardnavigation/main.ts',
        slider_righttoleft: './app/slider/righttoleft/main.ts',
        slider_twowaydatabinding: './app/slider/twowaydatabinding/main.ts',

        sortable_defaultfunctionality: './app/sortable/defaultfunctionality/main.ts',
        sortable_events: './app/sortable/events/main.ts',
        sortable_connectedlist: './app/sortable/connectedlist/main.ts',
        sortable_displayastable: './app/sortable/displayastable/main.ts',

        splitter_defaultfunctionality: './app/splitter/defaultfunctionality/main.ts',
        splitter_nestedsplitters: './app/splitter/nestedsplitters/main.ts',
        splitter_horizontalsplitter: './app/splitter/horizontalsplitter/main.ts',
        splitter_verticalsplitter: './app/splitter/verticalsplitter/main.ts',
        splitter_togglebottompanel: './app/splitter/togglebottompanel/main.ts',
        splitter_togglerightpanel: './app/splitter/togglerightpanel/main.ts',
        splitter_integrationwithjqxtabs: './app/splitter/integrationwithjqxtabs/main.ts',
        splitter_integrationwithjqxtree: './app/splitter/integrationwithjqxtree/main.ts',
        splitter_integrationwithjqxgrid: './app/splitter/integrationwithjqxgrid/main.ts',
        splitter_multiplesplitpanelswithjqxtabs: './app/splitter/multiplesplitpanelswithjqxtabs/main.ts',
        splitter_splitterwithinjqxtabs: './app/splitter/splitterwithinjqxtabs/main.ts',
        splitter_simplecontainer: './app/splitter/simplecontainer/main.ts',
        splitter_nestedsidesplitters: './app/splitter/nestedsidesplitters/main.ts',
        splitter_fluidsize: './app/splitter/fluidsize/main.ts',
        splitter_api: './app/splitter/api/main.ts',
        splitter_events: './app/splitter/events/main.ts'
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
