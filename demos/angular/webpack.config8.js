'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        maskedinput_defaultfunctionality: './app/maskedinput/defaultfunctionality/main.ts',
        maskedinput_fluidsize: './app/maskedinput/fluidsize/main.ts',
        maskedinput_events: './app/maskedinput/events/main.ts',
        maskedinput_righttoleftlayout: './app/maskedinput/righttoleftlayout/main.ts',

        menu_defaultfunctionality: './app/menu/defaultfunctionality/main.ts',
        menu_contextmenu: './app/menu/contextmenu/main.ts',
        menu_verticalmenu: './app/menu/verticalmenu/main.ts',
        menu_minimizedmenu: './app/menu/minimizedmenu/main.ts',
        menu_opendirection: './app/menu/opendirection/main.ts',
        menu_columns: './app/menu/columns/main.ts',
        menu_images: './app/menu/images/main.ts',
        menu_jsonmenu: './app/menu/jsonmenu/main.ts',
        menu_xmlmenu: './app/menu/xmlmenu/main.ts',
        menu_loadmenufromarray: './app/menu/loadmenufromarray/main.ts',
        menu_centermenuitems: './app/menu/centermenuitems/main.ts',
        menu_fluidsize: './app/menu/fluidsize/main.ts',
        menu_keyboardnavigation: './app/menu/keyboardnavigation/main.ts',
        menu_righttoleftlayout: './app/menu/righttoleftlayout/main.ts',

        navbar_defaultfunctionality: './app/navbar/defaultfunctionality/main.ts',
        navbar_verticalnavbar: './app/navbar/verticalnavbar/main.ts',
        navbar_minimizednavbar: './app/navbar/minimizednavbar/main.ts',
        navbar_righttoleftlayout: './app/navbar/righttoleftlayout/main.ts',

        navigationbar_defaultfunctionality: './app/navigationbar/defaultfunctionality/main.ts',
        navigationbar_multipleexpanded: './app/navigationbar/multipleexpanded/main.ts',
        navigationbar_disabled: './app/navigationbar/disabled/main.ts',
        navigationbar_events: './app/navigationbar/events/main.ts',
        navigationbar_togglemode: './app/navigationbar/togglemode/main.ts',
        navigationbar_fittocontainer: './app/navigationbar/fittocontainer/main.ts',
        navigationbar_fluidsize: './app/navigationbar/fluidsize/main.ts',
        navigationbar_keyboardnavigation: './app/navigationbar/keyboardnavigation/main.ts',
        navigationbar_righttoleftlayout: './app/navigationbar/righttoleftlayout/main.ts',

        notification_defaultfunctionality: './app/notification/defaultfunctionality/main.ts',
        notification_notificationcontainer: './app/notification/notificationcontainer/main.ts',
        notification_events: './app/notification/events/main.ts',
        notification_customicon: './app/notification/customicon/main.ts',
        notification_settings: './app/notification/settings/main.ts',
        notification_fluidsize: './app/notification/fluidsize/main.ts',
        notification_righttoleftlayout: './app/notification/righttoleftlayout/main.ts',

        numberinput_defaultfunctionality: './app/numberinput/defaultfunctionality/main.ts',
        numberinput_validation: './app/numberinput/validation/main.ts',
        numberinput_settings: './app/numberinput/settings/main.ts',
        numberinput_simpleinputmode: './app/numberinput/simpleinputmode/main.ts',
        numberinput_templates: './app/numberinput/templates/main.ts',
        numberinput_fluidsize: './app/numberinput/fluidsize/main.ts',
        numberinput_events: './app/numberinput/events/main.ts',
        numberinput_righttoleftlayout: './app/numberinput/righttoleftlayout/main.ts',
        numberinput_twowaydatabinding: './app/numberinput/twowaydatabinding/main.ts',

        panel_defaultfunctionality: './app/panel/defaultfunctionality/main.ts',
        panel_dockpanel: './app/panel/dockpanel/main.ts',
        panel_fluidsize: './app/panel/fluidsize/main.ts',
        panel_righttoleftlayout: './app/panel/righttoleftlayout/main.ts',

        passwordinput_defaultfunctionality: './app/passwordinput/defaultfunctionality/main.ts',
        passwordinput_customstrengthrendering: './app/passwordinput/customstrengthrendering/main.ts',
        passwordinput_fluidsize: './app/passwordinput/fluidsize/main.ts',
        passwordinput_righttoleftlayout: './app/passwordinput/righttoleftlayout/main.ts',
        passwordinput_twowaydatabinding: './app/passwordinput/twowaydatabinding/main.ts'
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
