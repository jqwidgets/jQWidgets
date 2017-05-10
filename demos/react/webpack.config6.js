var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            tabs_defaultfunctionality: __dirname + '/app/tabs/defaultfunctionality/app.js',
            tabs_integrationwithotherwidgets: __dirname + '/app/tabs/integrationwithotherwidgets/app.js',
            tabs_wizard: __dirname + '/app/tabs/wizard/app.js',
            tabs_tabswithimages: __dirname + '/app/tabs/tabswithimages/app.js',
            tabs_mapinsidetab: __dirname + '/app/tabs/mapinsidetab/app.js',
            tabs_closebuttons: __dirname + '/app/tabs/closebuttons/app.js',
            tabs_collapsible: __dirname + '/app/tabs/collapsible/app.js',
            tabs_draganddrop: __dirname + '/app/tabs/draganddrop/app.js',
            tabs_loadingtabcontentswithxhr: __dirname + '/app/tabs/loadingtabcontentswithxhr/app.js',
            tabs_saveloadselectionusingcookies: __dirname + '/app/tabs/saveloadselectionusingcookies/app.js',
            tabs_scrolling: __dirname + '/app/tabs/scrolling/app.js',
            tabs_events: __dirname + '/app/tabs/events/app.js',
            tabs_settings: __dirname + '/app/tabs/settings/app.js',
            tabs_fluidsize: __dirname + '/app/tabs/fluidsize/app.js',
            tabs_keyboardnavigation: __dirname + '/app/tabs/keyboardnavigation/app.js',
            tabs_righttoleftlayout: __dirname + '/app/tabs/righttoleftlayout/app.js',

            tagcloud_defaultfunctionality: __dirname + '/app/tagcloud/defaultfunctionality/app.js',
            tagcloud_addremoveupdatetags: __dirname + '/app/tagcloud/addremoveupdatetags/app.js',
            tagcloud_colorselection: __dirname + '/app/tagcloud/colorselection/app.js',
            tagcloud_customtags: __dirname + '/app/tagcloud/customtags/app.js',
            tagcloud_fontsize: __dirname + '/app/tagcloud/fontsize/app.js',
            tagcloud_bindingtojson: __dirname + '/app/tagcloud/bindingtojson/app.js',
            tagcloud_showhidetags: __dirname + '/app/tagcloud/showhidetags/app.js',
            tagcloud_sortingfiltering: __dirname + '/app/tagcloud/sortingfiltering/app.js',

            textarea_defaultfunctionality: __dirname + '/app/textarea/defaultfunctionality/app.js',
            textarea_autocomplete: __dirname + '/app/textarea/autocomplete/app.js',
            textarea_multiplevalues: __dirname + '/app/textarea/multiplevalues/app.js',
            textarea_bindingtojsondata: __dirname + '/app/textarea/bindingtojsondata/app.js',
            textarea_fluidsize: __dirname + '/app/textarea/fluidsize/app.js',
            textarea_righttoleftlayout: __dirname + '/app/textarea/righttoleftlayout/app.js',

            toolbar_defaultfunctionality: __dirname + '/app/toolbar/defaultfunctionality/app.js',
            toolbar_resizabletoolbar: __dirname + '/app/toolbar/resizabletoolbar/app.js',
            toolbar_nonminimizabletools: __dirname + '/app/toolbar/nonminimizabletools/app.js',
            toolbar_buttongroupsintoolbar: __dirname + '/app/toolbar/buttongroupsintoolbar/app.js',
            toolbar_cascadingcomboboxesintoolbar: __dirname + '/app/toolbar/cascadingcomboboxesintoolbar/app.js',
            toolbar_settings: __dirname + '/app/toolbar/settings/app.js',
            toolbar_toolevents: __dirname + '/app/toolbar/toolevents/app.js',
            toolbar_fluidsize: __dirname + '/app/toolbar/fluidsize/app.js',
            toolbar_righttoleftlayout: __dirname + '/app/toolbar/righttoleftlayout/app.js',

            tooltip_defaultfunctionality: __dirname + '/app/tooltip/defaultfunctionality/app.js',
            tooltip_tooltippositions: __dirname + '/app/tooltip/tooltippositions/app.js',
            tooltip_closeonclick: __dirname + '/app/tooltip/closeonclick/app.js',
            tooltip_popover: __dirname + '/app/tooltip/popover/app.js',

            tree_defaultfunctionality: __dirname + '/app/tree/defaultfunctionality/app.js',
            tree_settings: __dirname + '/app/tree/settings/app.js',
            tree_checkboxes: __dirname + '/app/tree/checkboxes/app.js',
            tree_jsontree: __dirname + '/app/tree/jsontree/app.js',
            tree_xmltree: __dirname + '/app/tree/xmltree/app.js',
            tree_draganddrop: __dirname + '/app/tree/draganddrop/app.js',
            tree_contextmenu: __dirname + '/app/tree/contextmenu/app.js',
            tree_loadondemandwithxhr: __dirname + '/app/tree/loadondemandwithxhr/app.js',
            tree_navigation: __dirname + '/app/tree/navigation/app.js',
            tree_dropdowntree: __dirname + '/app/tree/dropdowntree/app.js',
            tree_fluidsize: __dirname + '/app/tree/fluidsize/app.js',
            tree_events: __dirname + '/app/tree/events/app.js',
            tree_keyboardnavigation: __dirname + '/app/tree/keyboardnavigation/app.js',
            tree_righttoleftlayout: __dirname + '/app/tree/righttoleftlayout/app.js',

            treegrid_defaultfunctionality: __dirname + '/app/treegrid/defaultfunctionality/app.js',
            treegrid_virtualmode: __dirname + '/app/treegrid/virtualmode/app.js',
            treegrid_localdata: __dirname + '/app/treegrid/localdata/app.js',
            treegrid_xmldata: __dirname + '/app/treegrid/xmldata/app.js',
            treegrid_nestedxmldata: __dirname + '/app/treegrid/nestedxmldata/app.js',
            treegrid_jsondata: __dirname + '/app/treegrid/jsondata/app.js',
            treegrid_nestedjsondata: __dirname + '/app/treegrid/nestedjsondata/app.js',
            treegrid_csvdata: __dirname + '/app/treegrid/csvdata/app.js',
            treegrid_tabdata: __dirname + '/app/treegrid/tabdata/app.js',
            treegrid_virtualmodewithajax: __dirname + '/app/treegrid/virtualmodewithajax/app.js',
            treegrid_columnshierarchy: __dirname + '/app/treegrid/columnshierarchy/app.js',
            treegrid_columnformatting: __dirname + '/app/treegrid/columnformatting/app.js',
            treegrid_columnalignment: __dirname + '/app/treegrid/columnalignment/app.js',
            treegrid_columnresize: __dirname + '/app/treegrid/columnresize/app.js',
            treegrid_columnreorder: __dirname + '/app/treegrid/columnreorder/app.js',
            treegrid_showorhidecolumn: __dirname + '/app/treegrid/showorhidecolumn/app.js',
            treegrid_pinnedfrozencolumn: __dirname + '/app/treegrid/pinnedfrozencolumn/app.js',
            treegrid_columncheckboxes: __dirname + '/app/treegrid/columncheckboxes/app.js',
            treegrid_columnhierarchicalcheckboxes: __dirname + '/app/treegrid/columnhierarchicalcheckboxes/app.js',
            treegrid_columnicons: __dirname + '/app/treegrid/columnicons/app.js',
            treegrid_columnsmallicons: __dirname + '/app/treegrid/columnsmallicons/app.js',
            treegrid_headertemplate: __dirname + '/app/treegrid/headertemplate/app.js',
            treegrid_inlinerow: __dirname + '/app/treegrid/inlinerow/app.js',
            treegrid_dialog: __dirname + '/app/treegrid/dialog/app.js',
            treegrid_commandcolumn: __dirname + '/app/treegrid/commandcolumn/app.js',
            treegrid_lockrow: __dirname + '/app/treegrid/lockrow/app.js',
            treegrid_celledit: __dirname + '/app/treegrid/celledit/app.js',
            treegrid_customeditors: __dirname + '/app/treegrid/customeditors/app.js',
            treegrid_propertyeditor: __dirname + '/app/treegrid/propertyeditor/app.js',
            treegrid_validation: __dirname + '/app/treegrid/validation/app.js',
            treegrid_sorting: __dirname + '/app/treegrid/sorting/app.js',
            treegrid_sortingapi: __dirname + '/app/treegrid/sortingapi/app.js',
            treegrid_filtering: __dirname + '/app/treegrid/filtering/app.js',
            treegrid_searchfield: __dirname + '/app/treegrid/searchfield/app.js',
            treegrid_advancedfiltering: __dirname + '/app/treegrid/advancedfiltering/app.js',
            treegrid_filteringapi: __dirname + '/app/treegrid/filteringapi/app.js',
            treegrid_paging: __dirname + '/app/treegrid/paging/app.js',
            treegrid_pagingbyrootrecords: __dirname + '/app/treegrid/pagingbyrootrecords/app.js',
            treegrid_pagingapi: __dirname + '/app/treegrid/pagingapi/app.js',
            treegrid_aggregates: __dirname + '/app/treegrid/aggregates/app.js',
            treegrid_aggregatestemplate: __dirname + '/app/treegrid/aggregatestemplate/app.js',
            treegrid_manualaggregates: __dirname + '/app/treegrid/manualaggregates/app.js',
            treegrid_rowdetails: __dirname + '/app/treegrid/rowdetails/app.js',
            treegrid_localization: __dirname + '/app/treegrid/localization/app.js',
            treegrid_dataexport: __dirname + '/app/treegrid/dataexport/app.js',
            treegrid_dataprinting: __dirname + '/app/treegrid/dataprinting/app.js',
            treegrid_datagrouping: __dirname + '/app/treegrid/datagrouping/app.js',
            treegrid_fluidsize: __dirname + '/app/treegrid/fluidsize/app.js',
            treegrid_conditionalformatting: __dirname + '/app/treegrid/conditionalformatting/app.js',
            treegrid_conditionalrendering: __dirname + '/app/treegrid/conditionalrendering/app.js',
            treegrid_contextmenu: __dirname + '/app/treegrid/contextmenu/app.js',
            treegrid_keyboardnavigation: __dirname + '/app/treegrid/keyboardnavigation/app.js',
            treegrid_righttoleftlayout: __dirname + '/app/treegrid/righttoleftlayout/app.js',

            treemap_defaultfunctionality: __dirname + '/app/treemap/defaultfunctionality/app.js',
            treemap_automaticrendering: __dirname + '/app/treemap/automaticrendering/app.js',
            treemap_rangesrendering: __dirname + '/app/treemap/rangesrendering/app.js',
            treemap_customrendering: __dirname + '/app/treemap/customrendering/app.js',
            treemap_fluidsize: __dirname + '/app/treemap/fluidsize/app.js',
            treemap_bindingtojson: __dirname + '/app/treemap/bindingtojson/app.js',
            treemap_bindingtotabdata: __dirname + '/app/treemap/bindingtotabdata/app.js',

            validator_defaultfunctionality: __dirname + '/app/validator/defaultfunctionality/app.js',
            validator_errorlabels: __dirname + '/app/validator/errorlabels/app.js',
            validator_righttoleftlayout: __dirname + '/app/validator/righttoleftlayout/app.js',

            window_defaultfunctionality: __dirname + '/app/window/defaultfunctionality/app.js',
            window_multiplewindows: __dirname + '/app/window/multiplewindows/app.js',
            window_settings: __dirname + '/app/window/settings/app.js',
            window_events: __dirname + '/app/window/events/app.js',
            window_keyboardnavigation: __dirname + '/app/window/keyboardnavigation/app.js',
            window_righttoleftlayout: __dirname + '/app/window/righttoleftlayout/app.js'       
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
