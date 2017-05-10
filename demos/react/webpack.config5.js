var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            popover_defaultfunctionality: __dirname + '/app/popover/defaultfunctionality/app.js',
            popover_positioning: __dirname + '/app/popover/positioning/app.js',
            popover_bottompositioning: __dirname + '/app/popover/bottompositioning/app.js',
            popover_modalpopover: __dirname + '/app/popover/modalpopover/app.js',
            popover_righttoleftlayout: __dirname + '/app/popover/righttoleftlayout/app.js',

            progressbar_defaultfunctionality: __dirname + '/app/progressbar/defaultfunctionality/app.js',
            progressbar_colorranges: __dirname + '/app/progressbar/colorranges/app.js',
            progressbar_templates: __dirname + '/app/progressbar/templates/app.js',
            progressbar_layout: __dirname + '/app/progressbar/layout/app.js',
            progressbar_righttoleftlayout: __dirname + '/app/progressbar/righttoleftlayout/app.js',

            rangeselector_defaultfunctionality: __dirname + '/app/rangeselector/defaultfunctionality/app.js',
            rangeselector_datascale: __dirname + '/app/rangeselector/datascale/app.js',
            rangeselector_timescale: __dirname + '/app/rangeselector/timescale/app.js',
            rangeselector_numericscale: __dirname + '/app/rangeselector/numericscale/app.js',
            rangeselector_negativescale: __dirname + '/app/rangeselector/negativescale/app.js',
            rangeselector_decimalscale: __dirname + '/app/rangeselector/decimalscale/app.js',
            rangeselector_backgroundimage: __dirname + '/app/rangeselector/backgroundimage/app.js',
            rangeselector_chartonbackground: __dirname + '/app/rangeselector/chartonbackground/app.js',
            rangeselector_rangeselectorasafilter: __dirname + '/app/rangeselector/rangeselectorasafilter/app.js',
            rangeselector_fluidsize: __dirname + '/app/rangeselector/fluidsize/app.js',
            rangeselector_customizedmarkers: __dirname + '/app/rangeselector/customizedmarkers/app.js',
            rangeselector_righttoleftlayout: __dirname + '/app/rangeselector/righttoleftlayout/app.js',

            rating_defaultfunctionality: __dirname + '/app/rating/defaultfunctionality/app.js',

            responsivepanel_defaultfunctionality: __dirname + '/app/responsivepanel/defaultfunctionality/app.js',
            responsivepanel_integrationwithjqxmenu: __dirname + '/app/responsivepanel/integrationwithjqxmenu/app.js',
            responsivepanel_fluidsize: __dirname + '/app/responsivepanel/fluidsize/app.js',
            responsivepanel_righttoleftlayout: __dirname + '/app/responsivepanel/righttoleftlayout/app.js',

            ribbon_defaultfunctionality: __dirname + '/app/ribbon/defaultfunctionality/app.js',
            ribbon_collapsible: __dirname + '/app/ribbon/collapsible/app.js',
            ribbon_ribbonatthebottom: __dirname + '/app/ribbon/ribbonatthebottom/app.js',
            ribbon_verticalribbon: __dirname + '/app/ribbon/verticalribbon/app.js',
            ribbon_verticalrightposition: __dirname + '/app/ribbon/verticalrightposition/app.js',
            ribbon_popuplayout: __dirname + '/app/ribbon/popuplayout/app.js',
            ribbon_integrationwithotherwidgets: __dirname + '/app/ribbon/integrationwithotherwidgets/app.js',
            ribbon_scrolling: __dirname + '/app/ribbon/scrolling/app.js',
            ribbon_events: __dirname + '/app/ribbon/events/app.js',
            ribbon_fluidsize: __dirname + '/app/ribbon/fluidsize/app.js',
            ribbon_righttoleftlayout: __dirname + '/app/ribbon/righttoleftlayout/app.js',

            scheduler_defaultfunctionality: __dirname + '/app/scheduler/defaultfunctionality/app.js',
            scheduler_resources: __dirname + '/app/scheduler/resources/app.js',
            scheduler_timelineviews: __dirname + '/app/scheduler/timelineviews/app.js',
            scheduler_agendaview: __dirname + '/app/scheduler/agendaview/app.js',
            scheduler_bindingtojson: __dirname + '/app/scheduler/bindingtojson/app.js',
            scheduler_bindingtoicalendar: __dirname + '/app/scheduler/bindingtoicalendar/app.js',
            scheduler_appointmentstatuses: __dirname + '/app/scheduler/appointmentstatuses/app.js',
            scheduler_appointmentrestrictions: __dirname + '/app/scheduler/appointmentrestrictions/app.js',
            scheduler_appointmentcustomization: __dirname + '/app/scheduler/appointmentcustomization/app.js',
            scheduler_appointmentsexacttimerendering: __dirname + '/app/scheduler/appointmentsexacttimerendering/app.js',
            scheduler_recurringappointments: __dirname + '/app/scheduler/recurringappointments/app.js',
            scheduler_timezones: __dirname + '/app/scheduler/timezones/app.js',
            scheduler_timescaleszooming: __dirname + '/app/scheduler/timescaleszooming/app.js',
            scheduler_timescalesconfiguration: __dirname + '/app/scheduler/timescalesconfiguration/app.js',
            scheduler_timelineviewswithcustomslotwidth: __dirname + '/app/scheduler/timelineviewswithcustomslotwidth/app.js',
            scheduler_rowheight: __dirname + '/app/scheduler/rowheight/app.js',
            scheduler_hidetimeruler: __dirname + '/app/scheduler/hidetimeruler/app.js',
            scheduler_hideweekends: __dirname + '/app/scheduler/hideweekends/app.js',
            scheduler_contextmenu: __dirname + '/app/scheduler/contextmenu/app.js',
            scheduler_editdialog: __dirname + '/app/scheduler/editdialog/app.js',
            scheduler_worktime: __dirname + '/app/scheduler/worktime/app.js',
            scheduler_rowheightconfiguration: __dirname + '/app/scheduler/rowheightconfiguration/app.js',
            scheduler_monthviewwithautorowheight: __dirname + '/app/scheduler/monthviewwithautorowheight/app.js',
            scheduler_monthviewweeknumbers: __dirname + '/app/scheduler/monthviewweeknumbers/app.js',
            scheduler_events: __dirname + '/app/scheduler/events/app.js',
            scheduler_keyboardnavigation: __dirname + '/app/scheduler/keyboardnavigation/app.js',
            scheduler_resourceswithcustomcolumnwidths: __dirname + '/app/scheduler/resourceswithcustomcolumnwidths/app.js',
            scheduler_verticalresources: __dirname + '/app/scheduler/verticalresources/app.js',
            scheduler_timelineviewswithresources: __dirname + '/app/scheduler/timelineviewswithresources/app.js',
            scheduler_dataexport: __dirname + '/app/scheduler/dataexport/app.js',
            scheduler_dataprinting: __dirname + '/app/scheduler/dataprinting/app.js',
            scheduler_localization: __dirname + '/app/scheduler/localization/app.js',
            scheduler_fluidsize: __dirname + '/app/scheduler/fluidsize/app.js',
            scheduler_righttoleft: __dirname + '/app/scheduler/righttoleft/app.js',

            scrollbar_defaultfunctionality: __dirname + '/app/scrollbar/defaultfunctionality/app.js',
            scrollbar_righttoleft: __dirname + '/app/scrollbar/righttoleft/app.js',

            scrollview_defaultfunctionality: __dirname + '/app/scrollview/defaultfunctionality/app.js',

            slider_defaultfunctionality: __dirname + '/app/slider/defaultfunctionality/app.js',
            slider_rangeslider: __dirname + '/app/slider/rangeslider/app.js',
            slider_verticalslider: __dirname + '/app/slider/verticalslider/app.js',
            slider_fluidsize: __dirname + '/app/slider/fluidsize/app.js',
            slider_events: __dirname + '/app/slider/events/app.js',
            slider_templates: __dirname + '/app/slider/templates/app.js',
            slider_layout: __dirname + '/app/slider/layout/app.js',
            slider_slidertooltip: __dirname + '/app/slider/slidertooltip/app.js',
            slider_sliderlabels: __dirname + '/app/slider/sliderlabels/app.js',
            slider_keyboardnavigation: __dirname + '/app/slider/keyboardnavigation/app.js',
            slider_righttoleft: __dirname + '/app/slider/righttoleft/app.js',

            sortable_defaultfunctionality: __dirname + '/app/sortable/defaultfunctionality/app.js',
            sortable_events: __dirname + '/app/sortable/events/app.js',
            sortable_connectedlist: __dirname + '/app/sortable/connectedlist/app.js',
            sortable_displayastable: __dirname + '/app/sortable/displayastable/app.js',

            splitter_defaultfunctionality: __dirname + '/app/splitter/defaultfunctionality/app.js',
            splitter_nestedsplitter: __dirname + '/app/splitter/nestedsplitter/app.js',
            splitter_horizontalsplitter: __dirname + '/app/splitter/horizontalsplitter/app.js',
            splitter_verticalsplitter: __dirname + '/app/splitter/verticalsplitter/app.js',
            splitter_togglebottompanel: __dirname + '/app/splitter/togglebottompanel/app.js',
            splitter_togglerightpanel: __dirname + '/app/splitter/togglerightpanel/app.js',
            splitter_integrationwithjqxtabs: __dirname + '/app/splitter/integrationwithjqxtabs/app.js',
            splitter_integrationwithjqxtree: __dirname + '/app/splitter/integrationwithjqxtree/app.js',
            splitter_integrationwithjqxgrid: __dirname + '/app/splitter/integrationwithjqxgrid/app.js',
            splitter_multiplesplitpanelswithjqxtabs: __dirname + '/app/splitter/multiplesplitpanelswithjqxtabs/app.js',
            splitter_splitterwithinjqxtabs: __dirname + '/app/splitter/splitterwithinjqxtabs/app.js',
            splitter_simplecontainer: __dirname + '/app/splitter/simplecontainer/app.js',
            splitter_nestedsidesplitters: __dirname + '/app/splitter/nestedsidesplitters/app.js',
            splitter_loadingsplitpanelswithxhr: __dirname + '/app/splitter/loadingsplitpanelswithxhr/app.js',
            splitter_fluidsize: __dirname + '/app/splitter/fluidsize/app.js',
            splitter_api: __dirname + '/app/splitter/api/app.js',
            splitter_events: __dirname + '/app/splitter/events/app.js',
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
