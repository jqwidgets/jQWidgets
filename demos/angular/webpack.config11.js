'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        tabs_defaultfunctionality: './app/tabs/defaultfunctionality/main.ts',
        tabs_integrationwithotherwidgets: './app/tabs/integrationwithotherwidgets/main.ts',
        tabs_wizard: './app/tabs/wizard/main.ts',
        tabs_tabswithimages: './app/tabs/tabswithimages/main.ts',
        tabs_mapinsidetab: './app/tabs/mapinsidetab/main.ts',
        tabs_closebuttons: './app/tabs/closebuttons/main.ts',
        tabs_collapsible: './app/tabs/collapsible/main.ts',
        tabs_draganddrop: './app/tabs/draganddrop/main.ts',
        tabs_saveloadselectionusingcookies: './app/tabs/saveloadselectionusingcookies/main.ts',
        tabs_scrolling: './app/tabs/scrolling/main.ts',
        tabs_events: './app/tabs/events/main.ts',
        tabs_settings: './app/tabs/settings/main.ts',
        tabs_fluidsize: './app/tabs/fluidsize/main.ts',
        tabs_keyboardnavigation: './app/tabs/keyboardnavigation/main.ts',
        tabs_righttoleftlayout: './app/tabs/righttoleftlayout/main.ts',

        tagcloud_defaultfunctionality: './app/tagcloud/defaultfunctionality/main.ts',
        tagcloud_addremoveupdatetags: './app/tagcloud/addremoveupdatetags/main.ts',
        tagcloud_colorselection: './app/tagcloud/colorselection/main.ts',
        tagcloud_customtags: './app/tagcloud/customtags/main.ts',
        tagcloud_fontsize: './app/tagcloud/fontsize/main.ts',
        tagcloud_bindingtojson: './app/tagcloud/bindingtojson/main.ts',
        tagcloud_showhidetags: './app/tagcloud/showhidetags/main.ts',
        tagcloud_sortingfiltering: './app/tagcloud/sortingfiltering/main.ts',

        textarea_defaultfunctionality: './app/textarea/defaultfunctionality/main.ts',
        textarea_autocomplete: './app/textarea/autocomplete/main.ts',
        textarea_multiplevalues: './app/textarea/multiplevalues/main.ts',
        textarea_bindingtojsondata: './app/textarea/bindingtojsondata/main.ts',
        textarea_fluidsize: './app/textarea/fluidsize/main.ts',
        textarea_righttoleftlayout: './app/textarea/righttoleftlayout/main.ts',
        textarea_twowaydatabinding: './app/textarea/twowaydatabinding/main.ts',

        toolbar_defaultfunctionality: './app/toolbar/defaultfunctionality/main.ts',
        toolbar_resizabletoolbar: './app/toolbar/resizabletoolbar/main.ts',
        toolbar_nonminimizabletools: './app/toolbar/nonminimizabletools/main.ts',
        toolbar_buttongroupsintoolbar: './app/toolbar/buttongroupsintoolbar/main.ts',
        toolbar_cascadingcomboboxesintoolbar: './app/toolbar/cascadingcomboboxesintoolbar/main.ts',
        toolbar_settings: './app/toolbar/settings/main.ts',
        toolbar_toolevents: './app/toolbar/toolevents/main.ts',
        toolbar_fluidsize: './app/toolbar/fluidsize/main.ts',
        toolbar_righttoleftlayout: './app/toolbar/righttoleftlayout/main.ts',

        tooltip_defaultfunctionality: './app/tooltip/defaultfunctionality/main.ts',
        tooltip_tooltippositions: './app/tooltip/tooltippositions/main.ts',
        tooltip_closeonclick: './app/tooltip/closeonclick/main.ts',
        tooltip_popover: './app/tooltip/popover/main.ts',

        tree_defaultfunctionality: './app/tree/defaultfunctionality/main.ts',
        tree_settings: './app/tree/settings/main.ts',
        tree_checkboxes: './app/tree/checkboxes/main.ts',
        tree_jsontree: './app/tree/jsontree/main.ts',
        tree_xmltree: './app/tree/xmltree/main.ts',
        tree_draganddrop: './app/tree/draganddrop/main.ts',
        tree_contextmenu: './app/tree/contextmenu/main.ts',
        tree_navigation: './app/tree/navigation/main.ts',
        tree_dropdowntree: './app/tree/dropdowntree/main.ts',
        tree_fluidsize: './app/tree/fluidsize/main.ts',
        tree_events: './app/tree/events/main.ts',
        tree_keyboardnavigation: './app/tree/keyboardnavigation/main.ts',
        tree_righttoleftlayout: './app/tree/righttoleftlayout/main.ts'
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
