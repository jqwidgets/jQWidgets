'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
      
 	    bargauge_addandremovevalues: './app/bargauge/addandremovevalues/main.ts',
        bargauge_autochangevalue: './app/bargauge/autochangevalue/main.ts',
        bargauge_customtooltips: './app/bargauge/customtooltips/main.ts',
        bargauge_defaultfunctionality: './app/bargauge/defaultfunctionality/main.ts',
        bargauge_fluidsize: './app/bargauge/fluidsize/main.ts',
        bargauge_negativevalues: './app/bargauge/negativevalues/main.ts',
        bargauge_sequentialgrowth: './app/bargauge/sequentialgrowth/main.ts',
        bargauge_updatevalues: './app/bargauge/updatevalues/main.ts',
        bargauge_createcomponent: './app/bargauge/createcomponent/main.ts',

        bulletchart_defaultfunctionality: './app/bulletchart/defaultfunctionality/main.ts',
        bulletchart_fluidsize: './app/bulletchart/fluidsize/main.ts',
        bulletchart_labelsformatting: './app/bulletchart/labelsformatting/main.ts',
        bulletchart_multipleranges: './app/bulletchart/multipleranges/main.ts',
        bulletchart_negativevalues: './app/bulletchart/negativevalues/main.ts',
        bulletchart_rangesstyling: './app/bulletchart/rangesstyling/main.ts',
        bulletchart_righttoleftlayout: './app/bulletchart/righttoleftlayout/main.ts',
        bulletchart_settings: './app/bulletchart/settings/main.ts',
        bulletchart_verticalbulletchart: './app/bulletchart/verticalbulletchart/main.ts',

        button_defaultfunctionality: './app/buttons/defaultfunctionality/main.ts',
        button_fluidsize: './app/buttons/fluidsize/main.ts',
        button_imageposition: './app/buttons/imageposition/main.ts',
        button_images: './app/buttons/images/main.ts',
        button_repeatbutton: './app/repeatbutton/defaultfunctionality/main.ts',
        button_righttoleftlayout: './app/buttons/righttoleftlayout/main.ts',
        button_templates: './app/buttons/templates/main.ts',
        button_textposition: './app/buttons/textposition/main.ts',
        buttongroup_defaultfunctionality: './app/buttongroup/defaultfunctionality/main.ts',
        buttongroup_templates: './app/buttongroup/templates/main.ts',
        checkbox_defaultfunctionality: './app/checkbox/defaultfunctionality/main.ts',
        checkbox_twowaydatabinding: './app/checkbox/twowaydatabinding/main.ts',
        dropdownbutton_defaultfunctionality: './app/dropdownbutton/defaultfunctionality/main.ts',
        radiobutton_defaultfunctionality: './app/radiobutton/defaultfunctionality/main.ts',
        switchbutton_defaultfunctionality: './app/switchbutton/defaultfunctionality/main.ts',
        switchbutton_twowaydatabinding: './app/switchbutton/twowaydatabinding/main.ts',
        togglebutton_defaultfunctionality: './app/togglebutton/defaultfunctionality/main.ts',

        calendar_defaultfunctionality: './app/calendar/defaultfunctionality/main.ts',
        calendar_disabled: './app/calendar/disabled/main.ts',
        calendar_displayweekendsstyle: './app/calendar/displayweekendsstyle/main.ts',
        calendar_events: './app/calendar/events/main.ts',
        calendar_firstdayoftheweek: './app/calendar/firstdayoftheweek/main.ts',
        calendar_fluidsize: './app/calendar/fluidsize/main.ts',
        calendar_hideothermonthdays: './app/calendar/hideothermonthdays/main.ts',
        calendar_keyboardnavigation: './app/calendar/keyboardnavigation/main.ts',
        calendar_localization: './app/calendar/localization/main.ts',
        calendar_rangeselection: './app/calendar/rangeselection/main.ts',
        calendar_restrictdaterange: './app/calendar/restrictdaterange/main.ts',
        calendar_restricteddates: './app/calendar/restricteddates/main.ts',
        calendar_righttoleftlayout: './app/calendar/righttoleftlayout/main.ts',
        calendar_showweekoftheyear: './app/calendar/showweekoftheyear/main.ts',
        calendar_specialdates: './app/calendar/specialdates/main.ts',
        calendar_twowaydatabinding: './app/calendar/twowaydatabinding/main.ts',
	
		pivotgrid_cellvaluesalignment: './app/pivotgrid/cell-values-alignment/main.ts',
		pivotgrid_custompivotfunction: './app/pivotgrid/custom-pivot-function/main.ts',
		pivotgrid_customrendering: './app/pivotgrid/custom-rendering/main.ts',
		pivotgrid_designer: './app/pivotgrid/designer/main.ts',
		pivotgrid_drillthrough: './app/pivotgrid/drill-through/main.ts',
		pivotgrid_events: './app/pivotgrid/events/main.ts',
		pivotgrid_localization: './app/pivotgrid/localization/main.ts',
		pivotgrid_olaptreestylerows: './app/pivotgrid/olap-tree-style-rows/main.ts',
		pivotgrid_rowscolumnscellscssstyling: './app/pivotgrid/rows-columns-cells-css-styling/main.ts',
		pivotgrid_totals: './app/pivotgrid/totals/main.ts',
		pivotgrid_valuesoncolumns: './app/pivotgrid/values-on-columns/main.ts',
		pivotgrid_valuesonrows: './app/pivotgrid/values-on-rows/main.ts'
	
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
