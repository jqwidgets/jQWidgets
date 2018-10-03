var fs = require('fs')
var path = require('path')

/*fs.readFile('./src/app/app.module', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}

	const widgetNames =
        [
            'BarGauge', 'PivotDesigner', 'PivotGrid', 'Form',
            'BulletChart', 'Buttons', 'ButtonGroup', 'Calendar', 'Draw',
            'Chart', 'CheckBox', 'ColorPicker', 'Combobox', 'ComplexInput',
            'DataTable', 'DateTimeInput', 'Layout', 'DockingLayout', 'DockPanel',
            'Docking', 'DragDrop', 'DropDownButton', 'DropDownList', 'Editor',
            'Expander', 'FileUpload', 'FormattedInput', 'Gauge', 'Grid',
            'Input', 'Kanban', 'Knob', 'LinearGauge', 'LinkButton',
            'ListBox', 'ListMenu', 'Loader', 'MaskedInput', 'Menu',
            'NavBar', 'NavigationBar', 'Notification', 'NumberInput',
            'Panel', 'PasswordInput', 'Popover', 'ProgressBar',
            'RadioButton', 'RangeSelector', 'Rating', 'RepeatButton',
            'Response', 'ResponsivePanel', 'Ribbon', 'Scheduler',
            'Scrollbar', 'ScrollView', 'Slider', 'Sortable', 'Splitter',
            'Switchbutton', 'Tabs', 'TagCloud', 'ToggleButton', 'TextArea',
            'ToolBar', 'Tooltip', 'Tree', 'TreeGrid', 'TreeMap', 'Validator', 'Window'
        ];

    const widgetsUsed = [];

    for (let i = 0; i < widgetNames.length; i++) {
        const widgetName = widgetNames[i].toLocaleLowerCase() + '.module';
        if (data.indexOf(widgetName) !== -1) {
            widgetsUsed.push(widgetNames[i]);
        }
    }

    data = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
`
        ;

    let declarations = 'AppComponent, ';

    for (i = 0; i < widgetsUsed.length; i++) {
        const comma = i === widgetsUsed.length - 1 ? '' : ', ';
        if (widgetsUsed[i] === 'Buttons') {
            data += `import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';\n`;
            declarations += `jqxButtonComponent${comma}`;
        } else {
            data += `import { jqx${widgetsUsed[i]}Component } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqx${widgetsUsed[i].toLocaleLowerCase()}';\n`;
            declarations += `jqx${widgetsUsed[i]}Component${comma}`;
        }

    }

    data += `
@NgModule({
declarations: [${declarations}],
imports: [BrowserModule],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }
    `;

	fs.writeFile('./src/app/app.module', data, 'utf8', function (err) {
	     if (err) return console.log(err);
	  });
});
*/

fs.readdir(path.resolve(__dirname, './angular_demos'), function(err, filenames) {
    if (err) {
      console.log(err);
      return;
    }

    filenames.forEach(function (filename) {
        if (filename === 'app.component') {
            console.log(filename, '/ component')
        } else if (filename === 'app.module') {
            console.log(filename, '/ module')
        }           
    });
  });