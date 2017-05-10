var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            editor_defaultfunctionality: __dirname + '/app/editor/defaultfunctionality/app.js',
            editor_localization: __dirname + '/app/editor/localization/app.js',
            editor_toolsvisibility: __dirname + '/app/editor/toolsvisibility/app.js',
            editor_toolscustomization: __dirname + '/app/editor/toolscustomization/app.js',
            editor_customtools: __dirname + '/app/editor/customtools/app.js',
            editor_toolbarposition: __dirname + '/app/editor/toolbarposition/app.js',
            editor_printing: __dirname + '/app/editor/printing/app.js',
            editor_linebreakconfig: __dirname + '/app/editor/linebreakconfig/app.js',
            editor_fluidsize: __dirname + '/app/editor/fluidsize/app.js',
            editor_popupeditor: __dirname + '/app/editor/popupeditor/app.js',
            editor_importstyles: __dirname + '/app/editor/importstyles/app.js',
            editor_righttoleftlayout: __dirname + '/app/editor/righttoleftlayout/app.js',

            expander_defaultfunctionality: __dirname + '/app/expander/defaultfunctionality/app.js',
            expander_toggleondoubleclick: __dirname + '/app/expander/toggleondoubleclick/app.js',
            expander_loadingdataondemand: __dirname + '/app/expander/loadingdataondemand/app.js',
            expander_fluidsize: __dirname + '/app/expander/fluidsize/app.js',
            expander_righttoleftlayout: __dirname + '/app/expander/righttoleftlayout/app.js',

            fileupload_defaultfunctionality: __dirname + '/app/fileupload/defaultfunctionality/app.js',
            fileupload_buttonsrendering: __dirname + '/app/fileupload/buttonsrendering/app.js',
            fileupload_selectedfilesrendering: __dirname + '/app/fileupload/selectedfilesrendering/app.js',
            fileupload_events: __dirname + '/app/fileupload/events/app.js',
            fileupload_righttoleftlayout: __dirname + '/app/fileupload/righttoleftlayout/app.js',

            formattedinput_defaultfunctionality: __dirname + '/app/formattedinput/defaultfunctionality/app.js',
            formattedinput_simpleinput: __dirname + '/app/formattedinput/simpleinput/app.js',
            formattedinput_validation: __dirname + '/app/formattedinput/validation/app.js',
            formattedinput_negativenumbers: __dirname + '/app/formattedinput/negativenumbers/app.js',
            formattedinput_uppercasehexadecimals: __dirname + '/app/formattedinput/uppercasehexadecimals/app.js',
            formattedinput_exponentialnotation: __dirname + '/app/formattedinput/exponentialnotation/app.js',
            formattedinput_fluidsize: __dirname + '/app/formattedinput/fluidsize/app.js',
            formattedinput_events: __dirname + '/app/formattedinput/events/app.js',
            formattedinput_keyboardnavigation: __dirname + '/app/formattedinput/keyboardnavigation/app.js',
            formattedinput_righttoleftlayout: __dirname + '/app/formattedinput/righttoleftlayout/app.js',

            gauge_defaultfunctionality: __dirname + '/app/gauge/defaultfunctionality/app.js',
            gauge_gaugesettings: __dirname + '/app/gauge/gaugesettings/app.js',
            gauge_gaugewithslider: __dirname + '/app/gauge/gaugewithslider/app.js',
            gauge_lineargauge: __dirname + '/app/gauge/lineargauge/app.js',
            gauge_fluidsize: __dirname + '/app/gauge/fluidsize/app.js',

            grid_defaultfunctionality: __dirname + '/app/grid/defaultfunctionality/app.js',
            grid_spreadsheet: __dirname + '/app/grid/spreadsheet/app.js',
            grid_createremoveupdate: __dirname + '/app/grid/createremoveupdate/app.js',
            grid_dataexport: __dirname + '/app/grid/dataexport/app.js',
            grid_dataprinting: __dirname + '/app/grid/dataprinting/app.js',
            grid_statemaintenance: __dirname + '/app/grid/statemaintenance/app.js',
            grid_localization: __dirname + '/app/grid/localization/app.js',
            grid_dropdowngrid: __dirname + '/app/grid/dropdowngrid/app.js',
            grid_sorting: __dirname + '/app/grid/sorting/app.js',
            grid_customsorting: __dirname + '/app/grid/customsorting/app.js',
            grid_filtering: __dirname + '/app/grid/filtering/app.js',
            grid_filtermenutypes: __dirname + '/app/grid/filtermenutypes/app.js',
            grid_customfiltermenu: __dirname + '/app/grid/customfiltermenu/app.js',
            grid_filterrow: __dirname + '/app/grid/filterrow/app.js',
            grid_excellikefilter: __dirname + '/app/grid/excellikefilter/app.js',
            grid_filterrowcustomlistitems: __dirname + '/app/grid/filterrowcustomlistitems/app.js',
            grid_filterconditions: __dirname + '/app/grid/filterconditions/app.js',
            grid_daterangefilter: __dirname + '/app/grid/daterangefilter/app.js',
            grid_initialfilter: __dirname + '/app/grid/initialfilter/app.js',
            grid_customlistitemswithkeyvalue: __dirname + '/app/grid/customlistitemswithkeyvalue/app.js',
            grid_grouping: __dirname + '/app/grid/grouping/app.js',
            grid_groupingwithpager: __dirname + '/app/grid/groupingwithpager/app.js',
            grid_togglesubrows: __dirname + '/app/grid/togglesubrows/app.js',
            grid_groupingaggregates: __dirname + '/app/grid/groupingaggregates/app.js',
            grid_paging: __dirname + '/app/grid/paging/app.js',
            grid_initialpageandpagesize: __dirname + '/app/grid/initialpageandpagesize/app.js',
            grid_pagermodes: __dirname + '/app/grid/pagermodes/app.js',
            grid_editing: __dirname + '/app/grid/editing/app.js',
            grid_popupediting: __dirname + '/app/grid/popupediting/app.js',
            grid_editmodes: __dirname + '/app/grid/editmodes/app.js',
            grid_customizededitors: __dirname + '/app/grid/customizededitors/app.js',
            grid_disableeditingofrows: __dirname + '/app/grid/disableeditingofrows/app.js',
            grid_customdropdownlistcolumn: __dirname + '/app/grid/customdropdownlistcolumn/app.js',
            grid_customcomboboxcolumn: __dirname + '/app/grid/customcomboboxcolumn/app.js',
            grid_cascadingcomboboxes: __dirname + '/app/grid/cascadingcomboboxes/app.js',
            grid_fullrowedit: __dirname + '/app/grid/fullrowedit/app.js',
            grid_roweditwitheverpresentrow: __dirname + '/app/grid/roweditwitheverpresentrow/app.js',
            grid_customcolumneditor: __dirname + '/app/grid/customcolumneditor/app.js',
            grid_customroweditor: __dirname + '/app/grid/customroweditor/app.js',
            grid_bindingtoarray: __dirname + '/app/grid/bindingtoarray/app.js',
            grid_bindingtojsarray: __dirname + '/app/grid/bindingtojsarray/app.js',
            grid_bindingtoobservablearray: __dirname + '/app/grid/bindingtoobservablearray/app.js',
            grid_bindingtoxml: __dirname + '/app/grid/bindingtoxml/app.js',
            grid_bindingtojson: __dirname + '/app/grid/bindingtojson/app.js',
            grid_bindingtojsonusingphp: __dirname + '/app/grid/bindingtojsonusingphp/app.js',
            grid_bindingtojsonstring: __dirname + '/app/grid/bindingtojsonstring/app.js',
            grid_bindingtoremotedata: __dirname + '/app/grid/bindingtoremotedata/app.js',
            grid_bindingtocsv: __dirname + '/app/grid/bindingtocsv/app.js',
            grid_bindingtotsv: __dirname + '/app/grid/bindingtotsv/app.js',
            grid_largedataset: __dirname + '/app/grid/largedataset/app.js',
            grid_manycolumns: __dirname + '/app/grid/manycolumns/app.js',
            grid_refreshdata: __dirname + '/app/grid/refreshdata/app.js',
            grid_virtualpaging: __dirname + '/app/grid/virtualpaging/app.js',
            grid_virtualscrolling: __dirname + '/app/grid/virtualscrolling/app.js',
            grid_loadfromtable: __dirname + '/app/grid/loadfromtable/app.js',
            grid_aggregates: __dirname + '/app/grid/aggregates/app.js',
            grid_customaggregates: __dirname + '/app/grid/customaggregates/app.js',
            grid_aggregatesrenderer: __dirname + '/app/grid/aggregatesrenderer/app.js',
            grid_aggregatesgrouping: __dirname + '/app/grid/aggregatesgrouping/app.js',
            grid_textalignment: __dirname + '/app/grid/textalignment/app.js',
            grid_showhidecolumns: __dirname + '/app/grid/showhidecolumns/app.js',
            grid_autosizecolumns: __dirname + '/app/grid/autosizecolumns/app.js',
            grid_percentagewidthforcolumns: __dirname + '/app/grid/percentagewidthforcolumns/app.js',
            grid_checkboxcolumn: __dirname + '/app/grid/checkboxcolumn/app.js',
            grid_rownumbercolumn: __dirname + '/app/grid/rownumbercolumn/app.js',
            grid_columntemplate: __dirname + '/app/grid/columntemplate/app.js',
            grid_widgetcolumn: __dirname + '/app/grid/widgetcolumn/app.js',
            grid_columnshierarchy: __dirname + '/app/grid/columnshierarchy/app.js',
            grid_cellsstyling: __dirname + '/app/grid/cellsstyling/app.js',
            grid_imagecolumn: __dirname + '/app/grid/imagecolumn/app.js',
            grid_columnsresize: __dirname + '/app/grid/columnsresize/app.js',
            grid_columnsreorder: __dirname + '/app/grid/columnsreorder/app.js',
            grid_pinnedfrozencolumns: __dirname + '/app/grid/pinnedfrozencolumns/app.js',
            grid_columntooltips: __dirname + '/app/grid/columntooltips/app.js',
            grid_computedcolumn: __dirname + '/app/grid/computedcolumn/app.js',
            grid_dynamiccolumns: __dirname + '/app/grid/dynamiccolumns/app.js',
            grid_foreignkeycolumn: __dirname + '/app/grid/foreignkeycolumn/app.js',
            grid_keysvaluescolumn: __dirname + '/app/grid/keysvaluescolumn/app.js',
            grid_rowselection: __dirname + '/app/grid/rowselection/app.js',
            grid_cellsselection: __dirname + '/app/grid/cellsselection/app.js',
            grid_checkboxselection: __dirname + '/app/grid/checkboxselection/app.js',
            grid_dragdrop: __dirname + '/app/grid/dragdrop/app.js',
            grid_addnewrow: __dirname + '/app/grid/addnewrow/app.js',
            grid_addnewbottomrow: __dirname + '/app/grid/addnewbottomrow/app.js',
            grid_updatingactionsatruntime: __dirname + '/app/grid/updatingactionsatruntime/app.js',
            grid_everpresentrowwithcustomwidgets: __dirname + '/app/grid/everpresentrowwithcustomwidgets/app.js',
            grid_everpresentrowwithcolumns: __dirname + '/app/grid/everpresentrowwithcolumns/app.js',
            grid_positioning: __dirname + '/app/grid/positioning/app.js',
            grid_validation: __dirname + '/app/grid/validation/app.js',
            grid_addremoveupdate: __dirname + '/app/grid/addremoveupdate/app.js',
            grid_localizedaddnewrow: __dirname + '/app/grid/localizedaddnewrow/app.js',
            grid_rowdetails: __dirname + '/app/grid/rowdetails/app.js',
            grid_nestedgrids: __dirname + '/app/grid/nestedgrids/app.js',
            grid_masterdetails: __dirname + '/app/grid/masterdetails/app.js',
            grid_deferedscrolling: __dirname + '/app/grid/deferedscrolling/app.js',
            grid_deferedscrollingonalargedataset: __dirname + '/app/grid/deferedscrollingonalargedataset/app.js',
            grid_statusbar: __dirname + '/app/grid/statusbar/app.js',
            grid_toolbar: __dirname + '/app/grid/toolbar/app.js',
            grid_contextmenu: __dirname + '/app/grid/contextmenu/app.js',
            grid_autorowheight: __dirname + '/app/grid/autorowheight/app.js',
            grid_customkeyboardnavigation: __dirname + '/app/grid/customkeyboardnavigation/app.js',
            grid_fluidsize: __dirname + '/app/grid/fluidsize/app.js',
            grid_gridinjqxtabs: __dirname + '/app/grid/gridinjqxtabs/app.js',
            grid_keyboardnavigation: __dirname + '/app/grid/keyboardnavigation/app.js',
            grid_righttoleftlayout: __dirname + '/app/grid/righttoleftlayout/app.js',
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
