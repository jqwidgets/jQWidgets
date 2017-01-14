var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      bargauge: __dirname + '/app/bargauge/defaultfunctionality/app.js',
      bulletchart: __dirname + '/app/bulletchart/defaultfunctionality/app.js',
      buttongroup: __dirname + '/app/buttongroup/defaultfunctionality/app.js',
      buttons: __dirname + '/app/buttons/defaultfunctionality/app.js',
      calendar: __dirname + '/app/calendar/defaultfunctionality/app.js',
      chart_defaultfunctionality: __dirname + '/app/chart/defaultfunctionality/app.js',
      chart_donutseries: __dirname + '/app/chart/donutseries/app.js',
      chart_polarseries: __dirname + '/app/chart/polarseries/app.js',
      chart_columnlocaldata: __dirname + '/app/chart/columnlocaldata/app.js',
      checkbox: __dirname + '/app/checkbox/defaultfunctionality/app.js',
      colorpicker: __dirname + '/app/colorpicker/defaultfunctionality/app.js',
      combobox: __dirname + '/app/combobox/defaultfunctionality/app.js',
      complexinput: __dirname + '/app/complexinput/defaultfunctionality/app.js',
      datatable_defaultfunctionality: __dirname + '/app/datatable/defaultfunctionality/app.js',
      datatable_editing: __dirname + '/app/datatable/editing/app.js',
      datatable_filtering: __dirname + '/app/datatable/filtering/app.js',
      datatable_paging: __dirname + '/app/datatable/paging/app.js',
      datatable_sorting: __dirname + '/app/datatable/sorting/app.js',
      datetimeinput: __dirname + '/app/datetimeinput/defaultfunctionality/app.js',
      docking: __dirname + '/app/docking/defaultfunctionality/app.js',
      dockinglayout: __dirname + '/app/dockinglayout/defaultfunctionality/app.js',
      dockpanel: __dirname + '/app/dockpanel/defaultfunctionality/app.js',
      dragdrop: __dirname + '/app/dragdrop/defaultfunctionality/app.js',
      draw: __dirname + '/app/draw/defaultfunctionality/app.js',
      dropdownbutton: __dirname + '/app/dropdownbutton/defaultfunctionality/app.js',
      dropdownlist: __dirname + '/app/dropdownlist/defaultfunctionality/app.js',
      editor: __dirname + '/app/editor/defaultfunctionality/app.js',
      expander: __dirname + '/app/expander/defaultfunctionality/app.js',
      fileupload: __dirname + '/app/fileupload/defaultfunctionality/app.js',
      formattedinput: __dirname + '/app/formattedinput/defaultfunctionality/app.js',
      gauge: __dirname + '/app/gauge/defaultfunctionality/app.js',
      grid_defaultfunctionality: __dirname + '/app/grid/defaultfunctionality/app.js',
      grid_editing: __dirname + '/app/grid/editing/app.js',
      grid_filtering: __dirname + '/app/grid/filtering/app.js',
      grid_filterrow: __dirname + '/app/grid/filterrow/app.js',
      grid_grouping: __dirname + '/app/grid/grouping/app.js',
      grid_nestedgrid: __dirname + '/app/grid/nestedgrid/app.js',
      grid_paging: __dirname + '/app/grid/paging/app.js',
      input: __dirname + '/app/input/defaultfunctionality/app.js',
      kanban: __dirname + '/app/kanban/defaultfunctionality/app.js',
      knob: __dirname + '/app/knob/defaultfunctionality/app.js',
      layout: __dirname + '/app/layout/defaultfunctionality/app.js',
      lineargauge: __dirname + '/app/lineargauge/defaultfunctionality/app.js',
      listbox: __dirname + '/app/listbox/defaultfunctionality/app.js',
      listmenu: __dirname + '/app/listmenu/defaultfunctionality/app.js',
      loader: __dirname + '/app/loader/defaultfunctionality/app.js',
      maskedinput: __dirname + '/app/maskedinput/defaultfunctionality/app.js',
      menu: __dirname + '/app/menu/defaultfunctionality/app.js',
      navbar: __dirname + '/app/navbar/defaultfunctionality/app.js',
      navigationbar: __dirname + '/app/navigationbar/defaultfunctionality/app.js',
      notification: __dirname + '/app/notification/defaultfunctionality/app.js',
      numberinput: __dirname + '/app/numberinput/defaultfunctionality/app.js',
      panel: __dirname + '/app/panel/defaultfunctionality/app.js',
      passwordinput: __dirname + '/app/passwordinput/defaultfunctionality/app.js',
      popover: __dirname + '/app/popover/defaultfunctionality/app.js',
      progressbar: __dirname + '/app/progressbar/defaultfunctionality/app.js',
      radiobutton: __dirname + '/app/radiobutton/defaultfunctionality/app.js',
      rangeselector: __dirname + '/app/rangeselector/defaultfunctionality/app.js',
      rating: __dirname + '/app/rating/defaultfunctionality/app.js',
      responsivepanel: __dirname + '/app/responsivepanel/defaultfunctionality/app.js',
      ribbon: __dirname + '/app/ribbon/defaultfunctionality/app.js',
      scheduler_defaultfunctionality: __dirname + '/app/scheduler/defaultfunctionality/app.js',
      scheduler_resources: __dirname + '/app/scheduler/resources/app.js',
      scheduler_defaultfunctionality: __dirname + '/app/scheduler/defaultfunctionality/app.js',
      scrollbar: __dirname + '/app/scrollbar/defaultfunctionality/app.js',
      scrollview: __dirname + '/app/scrollview/defaultfunctionality/app.js',
      slider: __dirname + '/app/slider/defaultfunctionality/app.js',
      sortable: __dirname + '/app/sortable/defaultfunctionality/app.js',
      splitter: __dirname + '/app/splitter/defaultfunctionality/app.js',
      switchbutton: __dirname + '/app/switchbutton/defaultfunctionality/app.js',
      tabs: __dirname + '/app/tabs/defaultfunctionality/app.js',
      tagcloud: __dirname + '/app/tagcloud/defaultfunctionality/app.js',
      textarea: __dirname + '/app/textarea/defaultfunctionality/app.js',
      toolbar: __dirname + '/app/toolbar/defaultfunctionality/app.js',
      tooltip: __dirname + '/app/tooltip/defaultfunctionality/app.js',
      tree: __dirname + '/app/tree/defaultfunctionality/app.js',
      treegrid_defaultfunctionality: __dirname + '/app/treegrid/defaultfunctionality/app.js',
      treegrid_virtualmode: __dirname + '/app/treegrid/virtualmode/app.js',
      treemap: __dirname + '/app/treemap/defaultfunctionality/app.js',
      validator: __dirname + '/app/validator/defaultfunctionality/app.js',
      window: __dirname + '/app/window/defaultfunctionality/app.js'

   	
    //You can add additional entry points if you want
         //grid: __dirname + '/app/grid/app.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
    module: {
        loaders: [
          {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
          }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          sourcemap: false,
          compress: { warnings: false }
      })
    ]
};
