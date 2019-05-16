const fs = require('fs');
const path = require('path');
const prependFile = require('prepend-file');

const widgetNames =
  [    
    'BarGauge', 'PivotDesigner', 'PivotGrid',
    'BulletChart', 'ButtonGroup', 'Calendar', 'Draw',
    'CheckBox', 'ColorPicker', 'ComboBox', 'ComplexInput',
    'DataTable', 'DateTimeInput', 'DockingLayout', 'DockPanel',
    'DragDrop', 'DropDownButton', 'DropDownList', 'Editor',
    'Expander', 'FileUpload', 'FormattedInput',
    'Kanban', 'Knob', 'LinearGauge', 'LinkButton',
    'ListBox', 'ListMenu', 'Loader', 'MaskedInput',
    'NavBar', 'NavigationBar', 'Notification', 'NumberInput',
    'PasswordInput', 'Popover', 'ProgressBar',
    'RadioButton', 'RangeSelector', 'Rating', 'RepeatButton',
    'ResponsivePanel', 'Ribbon', 'Scheduler',
    'ScrollBar', 'ScrollView', 'Slider', 'Sortable', 'Splitter',
    'SwitchButton', 'Tabs', 'TagCloud', 'ToggleButton', 'TextArea',
    'ToolBar', 'Tooltip', 'TreeGrid', 'TreeMap', 'Validator', 'Window',
    'Form', 'Gauge', 'Grid', 'Input', 'Panel', 'Tree', 'Chart', 'Docking', 'Layout', 'Button', 'Menu'
  ];

walkSync('./dist/');

function walkSync(folder) {
    const allDirs = fs.readdirSync(folder);

    for (const dir of allDirs) {
        const newDir = path.join(folder, dir);

        if (fs.statSync(newDir).isDirectory()) {
            walkSync(newDir);
        } else {
            // delete unnecessary files
            if (newDir.indexOf('delete') !== -1 ||
                newDir.indexOf('.map') !== -1 ||
                newDir.indexOf('jqwidgets-ng.umd.js') !== -1 ||
                newDir.indexOf('jqwidgets-ng.umd.min.js') !== -1 ||
                newDir.indexOf('jqwidgets-ng.js') !== -1 ||
                newDir.indexOf('esm5\\pulic_api.js') !== -1 ||
                newDir.indexOf('esm2015\\public_api.js') !== -1 ||
                newDir.indexOf('jqwidgets-ng.d.ts') !== -1 ||
                newDir.indexOf('jqwidgets-ng.metadata.json') !== -1 ||
                newDir.indexOf('dist\\public_api.d.ts') !== -1 ||
                newDir.indexOf('dist\\package.json') !== -1 ) {
                fs.unlink(newDir, function (err) {
                    if (err) return console.log(err);
                });
                continue;
            }

            // update typings link
            if (newDir.indexOf('.d.ts') !== -1) {
                fs.readFile(newDir, 'utf8', function (err, data) {
                    if (err) return console.log(err);

                    data = data.replace(' path="../../jqwidgets.d.ts"', ' path="../jqwidgets.d.ts"');

                    fs.writeFile(newDir, data, 'utf8', function (err) {
                        if (err) return console.log(err);
                    });
                });
                continue;
            } 

            // imports 
            if (newDir.indexOf('.js') !== -1) {
                for (let i = 0; i < widgetNames.length; i++) {
                    const nameLowerCase = widgetNames[i].toLowerCase();

                    if (newDir.indexOf(`fesm5\\jqwidgets-ng-jqx${nameLowerCase}`) !== -1
                        || newDir.indexOf(`fesm2015\\jqwidgets-ng-jqx${nameLowerCase}`) !== -1
                        || newDir.indexOf(`esm5\\jqx${nameLowerCase}\\angular_jqx${nameLowerCase}`) !== -1
                        || newDir.indexOf(`esm2015\\jqx${nameLowerCase}\\angular_jqx${nameLowerCase}`) !== -1) {

                        const toPrepend = requireES6Import(widgetNames[i]);

                        prependFile(newDir, toPrepend, function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });

                        break;
                    }

                    if (newDir.indexOf(`bundles\\jqwidgets-ng-jqx${nameLowerCase}`) !== -1) {
                        const toPrepend = requireUMDImport(widgetNames[i]);

                        prependFile(newDir, toPrepend, function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });

                        break;
                    }
                } 

            }
       
        }
    }
}

function requireES6Import(name) {
  const widgetName = 'jqx' + name;
  let outData = `import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';\n`;
  switch (widgetName) {
    case `jqxButton`:
    case `jqxToggleButton`:
    case `jqxRepeatButton`:
    case `jqxLinkButton`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      break;
    case `jqxButtonGroup`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxbuttongroup from '../../jqwidgets-scripts/jqwidgets/jqxbuttongroup';\n`;
      break;
    case `jqxDropDownButton`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxdropdownbutton from '../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton';\n`;
      break;
    case `jqxBarGauge`:
      outData += `import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';\n`;
      outData += `import * as jqxbargauge from '../../jqwidgets-scripts/jqwidgets/jqxbargauge';\n`;
      break;
    case `jqxBulletChart`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxbulletchart from '../../jqwidgets-scripts/jqwidgets/jqxbulletchart';\n`;
      break;
    case `jqxCalendar`:
      outData += `import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';\n`;
      outData += `import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';\n`;
      break;
    case `jqxChart`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';\n`;
      outData += `import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';\n`;
      outData += `import * as jqxchartcore from '../../jqwidgets-scripts/jqwidgets/jqxchart.core';\n`;
      outData += `import * as jqxchartapi from '../../jqwidgets-scripts/jqwidgets/jqxchart.api';\n`;
      outData += `import * as jqxchartannotations from '../../jqwidgets-scripts/jqwidgets/jqxchart.annotations';\n`;
      outData += `import * as jqxchartrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector';\n`;
      outData += `import * as jqxchartwaterfall from '../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall';\n`;
      break;
    case `jqxColorPicker`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxdropdownbutton from '../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton';\n`;
      outData += `import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';\n`;
      outData += `import * as jqxcolorpicker from '../../jqwidgets-scripts/jqwidgets/jqxcolorpicker';\n`;
      break;
    case `jqxComboBox`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      break;
    case `jqxCheckBox`:
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      break;
    case `jqxRadioButton`:
      outData += `import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';\n`;
      break;
    case `jqxComplexInput`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxcomplexinput from '../../jqwidgets-scripts/jqwidgets/jqxcomplexinput';\n`;
      break;
    case `jqxDataAdapter`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      break;
    case `jqxDataTable`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxdatatable from '../../jqwidgets-scripts/jqwidgets/jqxdatatable';\n`;
      break;
    case `jqxDateTimeInput`:
      outData += `import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';\n`;
      outData += `import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';\n`;

      break;
    case `jqxDocking`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      outData += `import * as jqxdocking from '../../jqwidgets-scripts/jqwidgets/jqxdocking';\n`;
      break;
    case `jqxDockingLayout`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      outData += `import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';\n`;
      outData += `import * as jqxlayout from '../../jqwidgets-scripts/jqwidgets/jqxlayout';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxdockinglayout from '../../jqwidgets-scripts/jqwidgets/jqxdockinglayout';\n`;
      break;
    case `jqxDockPanel`:
      outData += `import * as jqxdockpanel from '../../jqwidgets-scripts/jqwidgets/jqxdockpanel';\n`;
      break;
    case `jqxDragDrop`:
      outData += `import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';\n`;
      break;
    case `jqxDraw`:
      outData += `import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';\n`;
      break;
    case `jqxDropDownList`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      break;
    case `jqxEditor`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxdropdownbutton from '../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      outData += `import * as jqxeditor from '../../jqwidgets-scripts/jqwidgets/jqxeditor';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxcolorpicker from '../../jqwidgets-scripts/jqwidgets/jqxcolorpicker';\n`;
      break;
    case `jqxExpander`:
      outData += `import * as jqxexpander from '../../jqwidgets-scripts/jqwidgets/jqxexpander';\n`;
      break;
    case `jqxFileUpload`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxfileupload from '../../jqwidgets-scripts/jqwidgets/jqxfileupload';\n`;
      break;
    case `jqxFormattedInput`:
      outData += `import * as jqxformattedinput from '../../jqwidgets-scripts/jqwidgets/jqxformattedinput';\n`;
      break;
    case `jqxForm`:
      outData += `import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';\n`;
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';\n`;
      outData += `import * as jqxpasswordinput from '../../jqwidgets-scripts/jqwidgets/jqxpasswordinput';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      outData += `import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxmaskedinput from '../../jqwidgets-scripts/jqwidgets/jqxmaskedinput';\n`;
      outData += `import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';\n`;
      outData += `import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';\n`;
      outData += `import * as jqxform from '../../jqwidgets-scripts/jqwidgets/jqxform';\n`;
      break;
    case `jqxGauge`:
    case `jqxLinearGauge`:
      outData += `import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';\n`;
      outData += `import * as jqxgauge from '../../jqwidgets-scripts/jqwidgets/jqxgauge';\n`;
      break;
    case `jqxGrid`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxbuttongroup from '../../jqwidgets-scripts/jqwidgets/jqxbuttongroup';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';\n`;
      outData += `import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';\n`;
      outData += `import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';\n`;
      outData += `import * as jqxgrid from '../../jqwidgets-scripts/jqwidgets/jqxgrid';\n`;
      outData += `import * as jqxgridedit from '../../jqwidgets-scripts/jqwidgets/jqxgrid.edit';\n`;
      outData += `import * as jqxgridpager from '../../jqwidgets-scripts/jqwidgets/jqxgrid.pager';\n`;
      outData += `import * as jqxgridselection from '../../jqwidgets-scripts/jqwidgets/jqxgrid.selection';\n`;
      outData += `import * as jqxgridfilter from '../../jqwidgets-scripts/jqwidgets/jqxgrid.filter';\n`;
      outData += `import * as jqxgridsort from '../../jqwidgets-scripts/jqwidgets/jqxgrid.sort';\n`;
      outData += `import * as jqxgridstorage from '../../jqwidgets-scripts/jqwidgets/jqxgrid.storage';\n`;
      outData += `import * as jqxgridgrouping from '../../jqwidgets-scripts/jqwidgets/jqxgrid.grouping';\n`;
      outData += `import * as jqxgridexport from '../../jqwidgets-scripts/jqwidgets/jqxgrid.export';\n`;
      outData += `import * as jqxgridcolumnsresiz from '../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsresize';\n`;
      outData += `import * as jqxgridcolumnsreorder from '../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsreorder';\n`;
      outData += `import * as jqxgridaggregates from '../../jqwidgets-scripts/jqwidgets/jqxgrid.aggregates';\n`;
      break;
    case `jqxInput`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';\n`;
      break;
    case `jqxKanban`:
      outData += `import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';\n`;
      outData += `import * as jqxsplitter from '../../jqwidgets-scripts/jqwidgets/jqxsplitter';\n`;
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxkanban from '../../jqwidgets-scripts/jqwidgets/jqxkanban';\n`;
      break;
    case `jqxKnob`:
      outData += `import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';\n`;
      outData += `import * as jqxknob from '../../jqwidgets-scripts/jqwidgets/jqxknob';\n`;
      break;
    case `jqxLayout`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      outData += `import * as jqxlayout from '../../jqwidgets-scripts/jqwidgets/jqxlayout';\n`;
      break;
    case `jqxListBox`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';\n`;
      break;
    case `jqxListMenu`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistmenu from '../../jqwidgets-scripts/jqwidgets/jqxlistmenu';\n`;
      break;
    case `jqxLoader`:
      outData += `import * as jqxloader from '../../jqwidgets-scripts/jqwidgets/jqxloader';\n`;
      break;
    case `jqxMaskedInput`:
      outData += `import * as jqxmaskedinput from '../../jqwidgets-scripts/jqwidgets/jqxmaskedinput';\n`;
      break;
    case `jqxMenu`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      break;
    case `jqxNavBar`:
      outData += `import * as jqxnavbar from '../../jqwidgets-scripts/jqwidgets/jqxnavbar';\n`;
      break;
    case `jqxNavigationBar`:
      outData += `import * as jqxnavigationbar from '../../jqwidgets-scripts/jqwidgets/jqxnavigationbar';\n`;
      break;
    case `jqxNotification`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxnotification from '../../jqwidgets-scripts/jqwidgets/jqxnotification';\n`;
      break;
    case `jqxNumberInput`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      break;
    case `jqxPanel`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';\n`;
      break;
    case `jqxPasswordInput`:
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxpasswordinput from '../../jqwidgets-scripts/jqwidgets/jqxpasswordinput';\n`;
      break;
    case `jqxPivotGrid`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      outData += `import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxpivot from '../../jqwidgets-scripts/jqwidgets/jqxpivot';\n`;
      outData += `import * as jqxpivotgrid from '../../jqwidgets-scripts/jqwidgets/jqxpivotgrid';\n`;
      outData += `import * as jqxpivotdesigner from '../../jqwidgets-scripts/jqwidgets/jqxpivotdesigner';\n`;
      break;
    case `jqxPopover`:
      outData += `import * as jqxpopover from '../../jqwidgets-scripts/jqwidgets/jqxpopover';\n`;
      break;
    case `jqxProgressBar`:
      outData += `import * as jqxprogressbar from '../../jqwidgets-scripts/jqwidgets/jqxprogressbar';\n`;
      break;
    case `jqxRangeSelector`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxrangeselector';\n`;
      break;
    case `jqxRating`:
      outData += `import * as jqxrating from '../../jqwidgets-scripts/jqwidgets/jqxrating';\n`;
      break;
    case `jqxResponsivePanel`:
      outData += `import * as jqxresponsivepanel from '../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel';\n`;
      break;
    case `jqxRibbon`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';\n`;
      break;
    case `jqxScheduler`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';\n`;
      outData += `import * as jqxdate from '../../jqwidgets-scripts/jqwidgets/jqxdate';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxcolorpicker from '../../jqwidgets-scripts/jqwidgets/jqxcolorpicker';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      outData += `import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';\n`;
      outData += `import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';\n`;
      outData += `import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';\n`;
      outData += `import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';\n`;
      outData += `import * as jqxscheduler from '../../jqwidgets-scripts/jqwidgets/jqxscheduler';\n`;
      outData += `import * as jqxschedulerapi from '../../jqwidgets-scripts/jqwidgets/jqxscheduler.api';\n`;
      break;
    case `jqxSwitchButton`:
      outData += `import * as jqxswitchbutton from '../../jqwidgets-scripts/jqwidgets/jqxswitchbutton';\n`;
      break;
    case `jqxScrollBar`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      break;
    case `jqxScrollView`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollview from '../../jqwidgets-scripts/jqwidgets/jqxscrollview';\n`;
      break;
    case `jqxSlider`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxslider from '../../jqwidgets-scripts/jqwidgets/jqxslider';\n`;
      break;
    case `jqxSortable`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';\n`;
      break;
    case `jqxSplitter`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxsplitter from '../../jqwidgets-scripts/jqwidgets/jqxsplitter';\n`;
      break;
    case `jqxTabs`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxtabs from '../../jqwidgets-scripts/jqwidgets/jqxtabs';\n`;
      break;
    case `jqxTagCloud`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxtagcloud from '../../jqwidgets-scripts/jqwidgets/jqxtagcloud';\n`;
      break;
    case `jqxTextArea`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxtextarea from '../../jqwidgets-scripts/jqwidgets/jqxtextarea';\n`;
      break;
    case `jqxToolBar`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';\n`;
      outData += `import * as jqxtoolbar from '../../jqwidgets-scripts/jqwidgets/jqxtoolbar';\n`;
      break;
    case `jqxTooltip`:
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      break;
    case `jqxTree`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';\n`;
      outData += `import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';\n`;
      outData += `import * as jqxtree from '../../jqwidgets-scripts/jqwidgets/jqxtree';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      break;
    case `jqxTreeGrid`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';\n`;
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      outData += `import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';\n`;
      outData += `import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';\n`;
      outData += `import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';\n`;
      outData += `import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';\n`;
      outData += `import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';\n`;
      outData += `import * as jqxdatatable from '../../jqwidgets-scripts/jqwidgets/jqxdatatable';\n`;
      outData += `import * as jqxtreegrid from '../../jqwidgets-scripts/jqwidgets/jqxtreegrid';\n`;
      break;
    case `jqxTreeMap`:
      outData += `import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';\n`;
      outData += `import * as jqxtreemap from '../../jqwidgets-scripts/jqwidgets/jqxtreemap';\n`;
      outData += `import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';\n`;
      break;
    case `jqxValidator`:
      outData += `import * as jqxvalidator from '../../jqwidgets-scripts/jqwidgets/jqxvalidator';\n`;
      break;
    case `jqxWindow`:
      outData += `import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';\n`;
      outData += `import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';\n`;
      break;
  }

  return outData;
}

function requireUMDImport(name) {
    const widgetName = 'jqx' + name;
    let outData = `require('../../jqwidgets-scripts/jqwidgets/jqxcore');\n`;
    switch (widgetName) {
        case `jqxButton`:
        case `jqxToggleButton`:
        case `jqxRepeatButton`:
        case `jqxLinkButton`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            break;
        case `jqxButtonGroup`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttongroup');\n`;
            break;
        case `jqxDropDownButton`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');\n`;
            break;
        case `jqxBarGauge`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdraw');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbargauge');\n`;
            break;
        case `jqxBulletChart`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbulletchart');\n`;
            break;
        case `jqxCalendar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');\n`;
            break;
        case `jqxChart`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdraw');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxchart.core');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxchart.api');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxchart.annotations');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall');\n`;
            break;
        case `jqxColorPicker`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcolorpicker');\n`;
            break;
        case `jqxComboBox`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            break;
        case `jqxCheckBox`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            break;
        case `jqxRadioButton`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');\n`;
            break;
        case `jqxComplexInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcomplexinput');\n`;
            break;
        case `jqxDataAdapter`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            break;
        case `jqxDataTable`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatatable');\n`;
            break;
        case `jqxDateTimeInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');\n`;

            break;
        case `jqxDocking`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdocking');\n`;
            break;
        case `jqxDockingLayout`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxribbon');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlayout');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdockinglayout');\n`;
            break;
        case `jqxDockPanel`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdockpanel');\n`;
            break;
        case `jqxDragDrop`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');\n`;
            break;
        case `jqxDraw`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdraw');\n`;
            break;
        case `jqxDropDownList`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            break;
        case `jqxEditor`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxeditor');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcolorpicker');\n`;
            break;
        case `jqxExpander`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxexpander');\n`;
            break;
        case `jqxFileUpload`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxfileupload');\n`;
            break;
        case `jqxFormattedInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxformattedinput');\n`;
            break;
        case `jqxForm`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpasswordinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmaskedinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxform');\n`;
            break;
        case `jqxGauge`:
        case `jqxLinearGauge`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdraw');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgauge');\n`;
            break;
        case `jqxGrid`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttongroup');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.edit');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.pager');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.selection');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.filter');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.sort');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.storage');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.grouping');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsresize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsreorder');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxgrid.aggregates');\n`;
            break;
        case `jqxInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxinput');\n`;
            break;
        case `jqxKanban`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxsortable');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxsplitter');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxkanban');\n`;
            break;
        case `jqxKnob`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdraw');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxknob');\n`;
            break;
        case `jqxLayout`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxribbon');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlayout');\n`;
            break;
        case `jqxListBox`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');\n`;
            break;
        case `jqxListMenu`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistmenu');\n`;
            break;
        case `jqxLoader`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxloader');\n`;
            break;
        case `jqxMaskedInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmaskedinput');\n`;
            break;
        case `jqxMenu`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            break;
        case `jqxNavBar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnavbar');\n`;
            break;
        case `jqxNavigationBar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnavigationbar');\n`;
            break;
        case `jqxNotification`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnotification');\n`;
            break;
        case `jqxNumberInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            break;
        case `jqxPanel`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpanel');\n`;
            break;
        case `jqxPasswordInput`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpasswordinput');\n`;
            break;
        case `jqxPivotGrid`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpivot');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpivotgrid');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpivotdesigner');\n`;
            break;
        case `jqxPopover`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpopover');\n`;
            break;
        case `jqxProgressBar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxprogressbar');\n`;
            break;
        case `jqxRangeSelector`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxrangeselector');\n`;
            break;
        case `jqxRating`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxrating');\n`;
            break;
        case `jqxResponsivePanel`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel');\n`;
            break;
        case `jqxRibbon`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxribbon');\n`;
            break;
        case `jqxScheduler`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdate');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxmenu');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcolorpicker');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscheduler');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscheduler.api');\n`;
            break;
        case `jqxSwitchButton`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxswitchbutton');\n`;
            break;
        case `jqxScrollBar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            break;
        case `jqxScrollView`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollview');\n`;
            break;
        case `jqxSlider`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxslider');\n`;
            break;
        case `jqxSortable`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxsortable');\n`;
            break;
        case `jqxSplitter`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxsplitter');\n`;
            break;
        case `jqxTabs`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtabs');\n`;
            break;
        case `jqxTagCloud`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtagcloud');\n`;
            break;
        case `jqxTextArea`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtextarea');\n`;
            break;
        case `jqxToolBar`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtoolbar');\n`;
            break;
        case `jqxTooltip`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            break;
        case `jqxTree`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxpanel');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtree');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            break;
        case `jqxTreeGrid`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require(('../../jqwidgets-scripts/jqwidgets/jqxdata.export');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdatatable');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtreegrid');\n`;
            break;
        case `jqxTreeMap`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxdata');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtreemap');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');\n`;
            break;
        case `jqxValidator`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxvalidator');\n`;
            break;
        case `jqxWindow`:
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');\n`;
            outData += `require('../../jqwidgets-scripts/jqwidgets/jqxwindow');\n`;
            break;
    }

    return outData;
}