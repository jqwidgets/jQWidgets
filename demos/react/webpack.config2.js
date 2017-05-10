var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            colorpicker_defaultfunctionality: __dirname + '/app/colorpicker/defaultfunctionality/app.js',
            colorpicker_settings: __dirname + '/app/colorpicker/settings/app.js',

            combobox_defaultfunctionality: __dirname + '/app/combobox/defaultfunctionality/app.js',
            combobox_multiselect: __dirname + '/app/combobox/multiselect/app.js',
            combobox_settings: __dirname + '/app/combobox/settings/app.js',
            combobox_categories: __dirname + '/app/combobox/categories/app.js',
            combobox_bindingtoxml: __dirname + '/app/combobox/bindingtoxml/app.js',
            combobox_bindingtojson: __dirname + '/app/combobox/bindingtojson/app.js',
            combobox_bindingtoremotedata: __dirname + '/app/combobox/bindingtoremotedata/app.js',
            combobox_customrendering: __dirname + '/app/combobox/customrendering/app.js',
            combobox_templates: __dirname + '/app/combobox/templates/app.js',
            combobox_dropdownhorizontalalignment: __dirname + '/app/combobox/dropdownhorizontalalignment/app.js',
            combobox_dropdownverticalalignment: __dirname + '/app/combobox/dropdownverticalalignment/app.js',
            combobox_cascadingcomboboxes: __dirname + '/app/combobox/cascadingcomboboxes/app.js',
            combobox_checkboxes: __dirname + '/app/combobox/checkboxes/app.js',
            combobox_animation: __dirname + '/app/combobox/animation/app.js',
            combobox_fluidsize: __dirname + '/app/combobox/fluidsize/app.js',
            combobox_events: __dirname + '/app/combobox/events/app.js',
            combobox_keyboardnavigation: __dirname + '/app/combobox/keyboardnavigation/app.js',
            combobox_righttoleftlayout: __dirname + '/app/combobox/righttoleftlayout/app.js',

            complexinput_defaultfunctionality: __dirname + '/app/complexinput/defaultfunctionality/app.js',
            complexinput_spinbuttons: __dirname + '/app/complexinput/spinbuttons/app.js',
            complexinput_validation: __dirname + '/app/complexinput/validation/app.js',
            complexinput_exponentialnotation: __dirname + '/app/complexinput/exponentialnotation/app.js',
            complexinput_changeevent: __dirname + '/app/complexinput/changeevent/app.js',
            complexinput_fluidsize: __dirname + '/app/complexinput/fluidsize/app.js',
            complexinput_righttoleftlayout: __dirname + '/app/complexinput/righttoleftlayout/app.js',

            datatable_defaultfunctionality: __dirname + '/app/datatable/defaultfunctionality/app.js',
            datatable_localdata: __dirname + '/app/datatable/localdata/app.js',
            datatable_remotedata: __dirname + '/app/datatable/remotedata/app.js',
            datatable_xmldata: __dirname + '/app/datatable/xmldata/app.js',
            datatable_jsondata: __dirname + '/app/datatable/jsondata/app.js',
            datatable_csvdata: __dirname + '/app/datatable/csvdata/app.js',
            datatable_tsvdata: __dirname + '/app/datatable/tsvdata/app.js',
            datatable_rowtemplate: __dirname + '/app/datatable/rowtemplate/app.js',
            datatable_rowdetails: __dirname + '/app/datatable/rowdetails/app.js',
            datatable_rowselectionhover: __dirname + '/app/datatable/rowselectionhover/app.js',
            datatable_columnshierarchy: __dirname + '/app/datatable/columnshierarchy/app.js',
            datatable_columnformatting: __dirname + '/app/datatable/columnformatting/app.js',
            datatable_columnalignment: __dirname + '/app/datatable/columnalignment/app.js',
            datatable_columnresize: __dirname + '/app/datatable/columnresize/app.js',
            datatable_columnreorder: __dirname + '/app/datatable/columnreorder/app.js',
            datatable_showorhidecolumn: __dirname + '/app/datatable/showorhidecolumn/app.js',
            datatable_pinnedfrozencolumn: __dirname + '/app/datatable/pinnedfrozencolumn/app.js',
            datatable_columntemplate: __dirname + '/app/datatable/columntemplate/app.js',
            datatable_headertemplate: __dirname + '/app/datatable/headertemplate/app.js',
            datatable_inlinerow: __dirname + '/app/datatable/inlinerow/app.js',
            datatable_dialog: __dirname + '/app/datatable/dialog/app.js',
            datatable_lockrow: __dirname + '/app/datatable/lockrow/app.js',
            datatable_celledit: __dirname + '/app/datatable/celledit/app.js',
            datatable_customeditors: __dirname + '/app/datatable/customeditors/app.js',
            datatable_validation: __dirname + '/app/datatable/validation/app.js',
            datatable_sorting: __dirname + '/app/datatable/sorting/app.js',
            datatable_serversorting: __dirname + '/app/datatable/serversorting/app.js',
            datatable_sortingapi: __dirname + '/app/datatable/sortingapi/app.js',
            datatable_filtering: __dirname + '/app/datatable/filtering/app.js',
            datatable_searchfield: __dirname + '/app/datatable/searchfield/app.js',
            datatable_advancedfiltering: __dirname + '/app/datatable/advancedfiltering/app.js',
            datatable_serverfiltering: __dirname + '/app/datatable/serverfiltering/app.js',
            datatable_filteringapi: __dirname + '/app/datatable/filteringapi/app.js',
            datatable_paging: __dirname + '/app/datatable/paging/app.js',
            datatable_serverpaging: __dirname + '/app/datatable/serverpaging/app.js',
            datatable_pagingapi: __dirname + '/app/datatable/pagingapi/app.js',
            datatable_nestedtables: __dirname + '/app/datatable/nestedtables/app.js',
            datatable_separatetables: __dirname + '/app/datatable/separatetables/app.js',
            datatable_aggregates: __dirname + '/app/datatable/aggregates/app.js',
            datatable_aggregatestemplate: __dirname + '/app/datatable/aggregatestemplate/app.js',
            datatable_grouping: __dirname + '/app/datatable/grouping/app.js',
            datatable_groupingserverpaging: __dirname + '/app/datatable/groupingserverpaging/app.js',
            datatable_dataexport: __dirname + '/app/datatable/dataexport/app.js',
            datatable_dataprinting: __dirname + '/app/datatable/dataprinting/app.js',
            datatable_localization: __dirname + '/app/datatable/localization/app.js',
            datatable_conditionalformatting: __dirname + '/app/datatable/conditionalformatting/app.js',
            datatable_fluidsize: __dirname + '/app/datatable/fluidsize/app.js',
            datatable_keyboardnavigation: __dirname + '/app/datatable/keyboardnavigation/app.js',
            datatable_righttoleftlayout: __dirname + '/app/datatable/righttoleftlayout/app.js',

            datetimeinput_defaultfunctionality: __dirname + '/app/datetimeinput/defaultfunctionality/app.js',
            datetimeinput_localization: __dirname + '/app/datetimeinput/localization/app.js',
            datetimeinput_timeinput: __dirname + '/app/datetimeinput/timeinput/app.js',
            datetimeinput_restrictdaterange: __dirname + '/app/datetimeinput/restrictdaterange/app.js',
            datetimeinput_formatdate: __dirname + '/app/datetimeinput/formatdate/app.js',
            datetimeinput_disabled: __dirname + '/app/datetimeinput/disabled/app.js',
            datetimeinput_templates: __dirname + '/app/datetimeinput/templates/app.js',
            datetimeinput_datetime: __dirname + '/app/datetimeinput/datetime/app.js',
            datetimeinput_rangeselection: __dirname + '/app/datetimeinput/rangeselection/app.js',
            datetimeinput_dropdownhorizontalalignment: __dirname + '/app/datetimeinput/dropdownhorizontalalignment/app.js',
            datetimeinput_dropdownverticalalignment: __dirname + '/app/datetimeinput/dropdownverticalalignment/app.js',
            datetimeinput_animation: __dirname + '/app/datetimeinput/animation/app.js',
            datetimeinput_fluidsize: __dirname + '/app/datetimeinput/fluidsize/app.js',
            datetimeinput_events: __dirname + '/app/datetimeinput/events/app.js',
            datetimeinput_keyboardnavigation: __dirname + '/app/datetimeinput/keyboardnavigation/app.js',
            datetimeinput_righttoleftlayout: __dirname + '/app/datetimeinput/righttoleftlayout/app.js',

            docking_defaultfunctionality: __dirname + '/app/docking/defaultfunctionality/app.js',
            docking_importlayout: __dirname + '/app/docking/importlayout/app.js',
            docking_settings: __dirname + '/app/docking/settings/app.js',
            docking_events: __dirname + '/app/docking/events/app.js',
            docking_keyboardnavigation: __dirname + '/app/docking/keyboardnavigation/app.js',
            docking_righttoleftlayout: __dirname + '/app/docking/righttoleftlayout/app.js',

            dockinglayout_defaultfunctionality: __dirname + '/app/dockinglayout/defaultfunctionality/app.js',
            dockinglayout_saveloadlayout: __dirname + '/app/dockinglayout/saveloadlayout/app.js',
            dockinglayout_idelikelayout: __dirname + '/app/dockinglayout/idelikelayout/app.js',
            dockinglayout_fluidsize: __dirname + '/app/dockinglayout/fluidsize/app.js',
            dockinglayout_righttoleftlayout: __dirname + '/app/dockinglayout/righttoleftlayout/app.js',

            dragdrop_defaultfunctionality: __dirname + '/app/dragdrop/defaultfunctionality/app.js',
            dragdrop_events: __dirname + '/app/dragdrop/events/app.js',

            draw_defaultfunctionality: __dirname + '/app/draw/defaultfunctionality/app.js',

            dropdownlist_defaultfunctionality: __dirname + '/app/dropdownlist/defaultfunctionality/app.js',
            dropdownlist_textwithicons: __dirname + '/app/dropdownlist/textwithicons/app.js',
            dropdownlist_categories: __dirname + '/app/dropdownlist/categories/app.js',
            dropdownlist_bindingtoxml: __dirname + '/app/dropdownlist/bindingtoxml/app.js',
            dropdownlist_bindingtojson: __dirname + '/app/dropdownlist/bindingtojson/app.js',
            dropdownlist_customrendering: __dirname + '/app/dropdownlist/customrendering/app.js',
            dropdownlist_templates: __dirname + '/app/dropdownlist/templates/app.js',
            dropdownlist_saveloadselectionusingcookies: __dirname + '/app/dropdownlist/saveloadselectionusingcookies/app.js',
            dropdownlist_dropdownhorizontalalignment: __dirname + '/app/dropdownlist/dropdownhorizontalalignment/app.js',
            dropdownlist_dropdownverticalalignment: __dirname + '/app/dropdownlist/dropdownverticalalignment/app.js',
            dropdownlist_animation: __dirname + '/app/dropdownlist/animation/app.js',
            dropdownlist_checkboxes: __dirname + '/app/dropdownlist/checkboxes/app.js',
            dropdownlist_autoopen: __dirname + '/app/dropdownlist/autoopen/app.js',
            dropdownlist_filtering: __dirname + '/app/dropdownlist/filtering/app.js',
            dropdownlist_loaddatafromselect: __dirname + '/app/dropdownlist/loaddatafromselect/app.js',
            dropdownlist_fluidsize: __dirname + '/app/dropdownlist/fluidsize/app.js',
            dropdownlist_events: __dirname + '/app/dropdownlist/events/app.js',
            dropdownlist_keyboardnavigation: __dirname + '/app/dropdownlist/keyboardnavigation/app.js',
            dropdownlist_righttoleftlayout: __dirname + '/app/dropdownlist/righttoleftlayout/app.js'
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
