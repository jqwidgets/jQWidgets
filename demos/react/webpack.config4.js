var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        entry:
        {
            input_defaultfunctionality: __dirname + '/app/input/defaultfunctionality/app.js',
            input_autocomplete: __dirname + '/app/input/autocomplete/app.js',
            input_multiplevalues: __dirname + '/app/input/multiplevalues/app.js',
            input_bindingtojsondata: __dirname + '/app/input/bindingtojsondata/app.js',
            input_inputgroup: __dirname + '/app/input/inputgroup/app.js',
            input_fluidsize: __dirname + '/app/input/fluidsize/app.js',
            input_righttoleftlayout: __dirname + '/app/input/righttoleftlayout/app.js',

            kanban_defaultfunctionality: __dirname + '/app/kanban/defaultfunctionality/app.js',
            kanban_headertemplate: __dirname + '/app/kanban/headertemplate/app.js',
            kanban_itemtemplate: __dirname + '/app/kanban/itemtemplate/app.js',
            kanban_kanbanediting: __dirname + '/app/kanban/kanbanediting/app.js',
            kanban_multiplekanbans: __dirname + '/app/kanban/multiplekanbans/app.js',
            kanban_addremoveupdateitems: __dirname + '/app/kanban/addremoveupdateitems/app.js',
            kanban_disablecollapse: __dirname + '/app/kanban/disablecollapse/app.js',
            kanban_kanbanevents: __dirname + '/app/kanban/kanbanevents/app.js',
            kanban_kanbanfluidsize: __dirname + '/app/kanban/kanbanfluidsize/app.js',
            kanban_righttoleftlayout: __dirname + '/app/kanban/righttoleftlayout/app.js',

            knob_defaultfunctionality: __dirname + '/app/knob/defaultfunctionality/app.js',
            knob_multipleknobs: __dirname + '/app/knob/multipleknobs/app.js',
            knob_knobwithcustomshape: __dirname + '/app/knob/knobwithcustomshape/app.js',
            knob_multiplecirclepointers: __dirname + '/app/knob/multiplecirclepointers/app.js',
            knob_infiniteknob: __dirname + '/app/knob/infiniteknob/app.js',
            knob_linepointer: __dirname + '/app/knob/linepointer/app.js',
            knob_circlepointer: __dirname + '/app/knob/circlepointer/app.js',
            knob_knobprogressranges: __dirname + '/app/knob/knobprogressranges/app.js',
            knob_multiplearrowpointes: __dirname + '/app/knob/multiplearrowpointes/app.js',
            knob_semiknob: __dirname + '/app/knob/semiknob/app.js',
            knob_knobwithinput: __dirname + '/app/knob/knobwithinput/app.js',
            knob_radialgradient: __dirname + '/app/knob/radialgradient/app.js',
            knob_knobrotation: __dirname + '/app/knob/knobrotation/app.js',
            knob_fluidsize: __dirname + '/app/knob/fluidsize/app.js',

            layout_defaultfunctionality: __dirname + '/app/layout/defaultfunctionality/app.js',
            layout_dashboard: __dirname + '/app/layout/dashboard/app.js',
            layout_saveloadlayout: __dirname + '/app/layout/saveloadlayout/app.js',
            layout_integrationwithotherwidgets: __dirname + '/app/layout/integrationwithotherwidgets/app.js',
            layout_fluidsize: __dirname + '/app/layout/fluidsize/app.js',
            layout_righttoleftlayout: __dirname + '/app/layout/righttoleftlayout/app.js',

            listbox_defaultfunctionality: __dirname + '/app/listbox/defaultfunctionality/app.js',
            listbox_textwithicons: __dirname + '/app/listbox/textwithicons/app.js',
            listbox_categories: __dirname + '/app/listbox/categories/app.js',
            listbox_multipleselection: __dirname + '/app/listbox/multipleselection/app.js',
            listbox_selectionwithshiftctrl: __dirname + '/app/listbox/selectionwithshiftctrl/app.js',
            listbox_bindingtoarray: __dirname + '/app/listbox/bindingtoarray/app.js',
            listbox_bindingtoxml: __dirname + '/app/listbox/bindingtoxml/app.js',
            listbox_bindingtojsondata: __dirname + '/app/listbox/bindingtojsondata/app.js',
            listbox_itemsreorder: __dirname + '/app/listbox/itemsreorder/app.js',
            listbox_dragdrop: __dirname + '/app/listbox/dragdrop/app.js',
            listbox_customrendering: __dirname + '/app/listbox/customrendering/app.js',
            listbox_checkboxes: __dirname + '/app/listbox/checkboxes/app.js',
            listbox_filtering: __dirname + '/app/listbox/filtering/app.js',
            listbox_loaddatafromselect: __dirname + '/app/listbox/loaddatafromselect/app.js',
            listbox_fluidsize: __dirname + '/app/listbox/fluidsize/app.js',
            listbox_events: __dirname + '/app/listbox/events/app.js',
            listbox_keyboardnavigation: __dirname + '/app/listbox/keyboardnavigation/app.js',
            listbox_righttoleftlayout: __dirname + '/app/listbox/righttoleftlayout/app.js',

            listmenu_defaultfunctionality: __dirname + '/app/listmenu/defaultfunctionality/app.js',
            listmenu_nestedlists: __dirname + '/app/listmenu/nestedlists/app.js',
            listmenu_fluidsize: __dirname + '/app/listmenu/fluidsize/app.js',
            listmenu_righttoleftlayout: __dirname + '/app/listmenu/righttoleftlayout/app.js',

            loader_defaultfunctionality: __dirname + '/app/loader/defaultfunctionality/app.js',
            loader_showonlyicon: __dirname + '/app/loader/showonlyicon/app.js',
            loader_showonlytext: __dirname + '/app/loader/showonlytext/app.js',
            loader_showmodalloader: __dirname + '/app/loader/showmodalloader/app.js',
            loader_loaderwithjqxgrid: __dirname + '/app/loader/loaderwithjqxgrid/app.js',
            loader_righttoleftlayout: __dirname + '/app/loader/righttoleftlayout/app.js',

            maskedinput_defaultfunctionality: __dirname + '/app/maskedinput/defaultfunctionality/app.js',
            maskedinput_fluidsize: __dirname + '/app/maskedinput/fluidsize/app.js',
            maskedinput_events: __dirname + '/app/maskedinput/events/app.js',
            maskedinput_righttoleftlayout: __dirname + '/app/maskedinput/righttoleftlayout/app.js',

            menu_defaultfunctionality: __dirname + '/app/menu/defaultfunctionality/app.js',
            menu_contextmenu: __dirname + '/app/menu/contextmenu/app.js',
            menu_verticalmenu: __dirname + '/app/menu/verticalmenu/app.js',
            menu_minimizedmenu: __dirname + '/app/menu/minimizedmenu/app.js',
            menu_opendirection: __dirname + '/app/menu/opendirection/app.js',
            menu_columns: __dirname + '/app/menu/columns/app.js',
            menu_images: __dirname + '/app/menu/images/app.js',
            menu_jsonmenu: __dirname + '/app/menu/jsonmenu/app.js',
            menu_xmlmenu: __dirname + '/app/menu/xmlmenu/app.js',
            menu_loadmenufromarray: __dirname + '/app/menu/loadmenufromarray/app.js',
            menu_centermenuitems: __dirname + '/app/menu/centermenuitems/app.js',
            menu_fluidsize: __dirname + '/app/menu/fluidsize/app.js',
            menu_keyboardnavigation: __dirname + '/app/menu/keyboardnavigation/app.js',
            menu_righttoleftlayout: __dirname + '/app/menu/righttoleftlayout/app.js',

            navbar_defaultfunctionality: __dirname + '/app/navbar/defaultfunctionality/app.js',
            navbar_verticalnavbar: __dirname + '/app/navbar/verticalnavbar/app.js',
            navbar_minimizednavbar: __dirname + '/app/navbar/minimizednavbar/app.js',
            navbar_righttoleftlayout: __dirname + '/app/navbar/righttoleftlayout/app.js',

            navigationbar_defaultfunctionality: __dirname + '/app/navigationbar/defaultfunctionality/app.js',
            navigationbar_multipleexpanded: __dirname + '/app/navigationbar/multipleexpanded/app.js',
            navigationbar_disabled: __dirname + '/app/navigationbar/disabled/app.js',
            navigationbar_events: __dirname + '/app/navigationbar/events/app.js',
            navigationbar_togglemode: __dirname + '/app/navigationbar/togglemode/app.js',
            navigationbar_fittocontainer: __dirname + '/app/navigationbar/fittocontainer/app.js',
            navigationbar_fluidsize: __dirname + '/app/navigationbar/fluidsize/app.js',
            navigationbar_keyboardnavigation: __dirname + '/app/navigationbar/keyboardnavigation/app.js',
            navigationbar_righttoleftlayout: __dirname + '/app/navigationbar/righttoleftlayout/app.js',

            notification_defaultfunctionality: __dirname + '/app/notification/defaultfunctionality/app.js',
            notification_notificationcontainer: __dirname + '/app/notification/notificationcontainer/app.js',
            notification_events: __dirname + '/app/notification/events/app.js',
            notification_customicon: __dirname + '/app/notification/customicon/app.js',
            notification_settings: __dirname + '/app/notification/settings/app.js',
            notification_fluidsize: __dirname + '/app/notification/fluidsize/app.js',
            notification_righttoleftlayout: __dirname + '/app/notification/righttoleftlayout/app.js',

            numberinput_defaultfunctionality: __dirname + '/app/numberinput/defaultfunctionality/app.js',
            numberinput_validation: __dirname + '/app/numberinput/validation/app.js',
            numberinput_settings: __dirname + '/app/numberinput/settings/app.js',
            numberinput_simpleinputmode: __dirname + '/app/numberinput/simpleinputmode/app.js',
            numberinput_templates: __dirname + '/app/numberinput/templates/app.js',
            numberinput_fluidsize: __dirname + '/app/numberinput/fluidsize/app.js',
            numberinput_events: __dirname + '/app/numberinput/events/app.js',
            numberinput_righttoleftlayout: __dirname + '/app/numberinput/righttoleftlayout/app.js',

            panel_defaultfunctionality: __dirname + '/app/panel/defaultfunctionality/app.js',
            panel_dockpanel: __dirname + '/app/panel/dockpanel/app.js',
            panel_fluidsize: __dirname + '/app/panel/fluidsize/app.js',
            panel_righttoleftlayout: __dirname + '/app/panel/righttoleftlayout/app.js',

            passwordinput_defaultfunctionality: __dirname + '/app/passwordinput/defaultfunctionality/app.js',
            passwordinput_customstrengthrendering: __dirname + '/app/passwordinput/customstrengthrendering/app.js',
            passwordinput_fluidsize: __dirname + '/app/passwordinput/fluidsize/app.js',
            passwordinput_righttoleftlayout: __dirname + '/app/passwordinput/righttoleftlayout/app.js',
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
