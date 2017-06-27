'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        input_defaultfunctionality: './app/input/defaultfunctionality/main.ts',
        input_autocomplete: './app/input/autocomplete/main.ts',
        input_multiplevalues: './app/input/multiplevalues/main.ts',
        input_bindingtojsondata: './app/input/bindingtojsondata/main.ts',
        input_inputgroup: './app/input/inputgroup/main.ts',
        input_fluidsize: './app/input/fluidsize/main.ts',
        input_righttoleftlayout: './app/input/righttoleftlayout/main.ts',
        input_twowaydatabinding: './app/input/twowaydatabinding/main.ts',

        kanban_defaultfunctionality: './app/kanban/defaultfunctionality/main.ts',
        kanban_headertemplate: './app/kanban/headertemplate/main.ts',
        kanban_itemtemplate: './app/kanban/itemtemplate/main.ts',
        kanban_kanbanediting: './app/kanban/kanbanediting/main.ts',
        kanban_multiplekanbans: './app/kanban/multiplekanbans/main.ts',
        kanban_addremoveupdateitems: './app/kanban/addremoveupdateitems/main.ts',
        kanban_disablecollapse: './app/kanban/disablecollapse/main.ts',
        kanban_kanbanevents: './app/kanban/kanbanevents/main.ts',
        kanban_kanbanfluidsize: './app/kanban/kanbanfluidsize/main.ts',
        kanban_righttoleftlayout: './app/kanban/righttoleftlayout/main.ts',

        knob_defaultfunctionality: './app/knob/defaultfunctionality/main.ts',
        knob_multipleknobs: './app/knob/multipleknobs/main.ts',
        knob_knobwithcustomshape: './app/knob/knobwithcustomshape/main.ts',
        knob_multiplecirclepointers: './app/knob/multiplecirclepointers/main.ts',
        knob_infiniteknob: './app/knob/infiniteknob/main.ts',
        knob_linepointer: './app/knob/linepointer/main.ts',
        knob_circlepointer: './app/knob/circlepointer/main.ts',
        knob_knobprogressranges: './app/knob/knobprogressranges/main.ts',
        knob_multiplearrowpointes: './app/knob/multiplearrowpointes/main.ts',
        knob_semiknob: './app/knob/semiknob/main.ts',
        knob_knobwithinput: './app/knob/knobwithinput/main.ts',
        knob_radialgradient: './app/knob/radialgradient/main.ts',
        knob_knobrotation: './app/knob/knobrotation/main.ts',
        knob_fluidsize: './app/knob/fluidsize/main.ts',

        layout_defaultfunctionality: './app/layout/defaultfunctionality/main.ts',
        layout_dashboard: './app/layout/dashboard/main.ts',
        layout_saveloadlayout: './app/layout/saveloadlayout/main.ts',
        layout_integrationwithotherwidgets: './app/layout/integrationwithotherwidgets/main.ts',
        layout_fluidsize: './app/layout/fluidsize/main.ts',
        layout_righttoleftlayout: './app/layout/righttoleftlayout/main.ts',

        listbox_defaultfunctionality: './app/listbox/defaultfunctionality/main.ts',
        listbox_textwithicons: './app/listbox/textwithicons/main.ts',
        listbox_categories: './app/listbox/categories/main.ts',
        listbox_multipleselection: './app/listbox/multipleselection/main.ts',
        listbox_selectionwithshiftctrl: './app/listbox/selectionwithshiftctrl/main.ts',
        listbox_bindingtoarray: './app/listbox/bindingtoarray/main.ts',
        listbox_bindingtoxml: './app/listbox/bindingtoxml/main.ts',
        listbox_bindingtojsondata: './app/listbox/bindingtojsondata/main.ts',
        listbox_itemsreorder: './app/listbox/itemsreorder/main.ts',
        listbox_dragdrop: './app/listbox/dragdrop/main.ts',
        listbox_customrendering: './app/listbox/customrendering/main.ts',
        listbox_checkboxes: './app/listbox/checkboxes/main.ts',
        listbox_filtering: './app/listbox/filtering/main.ts',
        listbox_loaddatafromselect: './app/listbox/loaddatafromselect/main.ts',
        listbox_fluidsize: './app/listbox/fluidsize/main.ts',
        listbox_events: './app/listbox/events/main.ts',
        listbox_keyboardnavigation: './app/listbox/keyboardnavigation/main.ts',
        listbox_righttoleftlayout: './app/listbox/righttoleftlayout/main.ts',

        listmenu_defaultfunctionality: './app/listmenu/defaultfunctionality/main.ts',
        listmenu_nestedlists: './app/listmenu/nestedlists/main.ts',
        listmenu_fluidsize: './app/listmenu/fluidsize/main.ts',
        listmenu_righttoleftlayout: './app/listmenu/righttoleftlayout/main.ts',

        loader_defaultfunctionality: './app/loader/defaultfunctionality/main.ts',
        loader_showonlyicon: './app/loader/showonlyicon/main.ts',
        loader_showonlytext: './app/loader/showonlytext/main.ts',
        loader_showmodalloader: './app/loader/showmodalloader/main.ts',
        loader_loaderwithjqxgrid: './app/loader/loaderwithjqxgrid/main.ts',
        loader_righttoleftlayout: './app/loader/righttoleftlayout/main.ts'
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
