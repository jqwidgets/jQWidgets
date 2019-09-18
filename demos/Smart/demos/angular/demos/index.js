// This task autogenerates demos sample files.

const fs = require('fs');
const path = require('path');

walkSync('./');

function walkSync(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(function (file, value) {
		if (file === 'index.js') {
			return;
		}
				
		let components =  ['Accordion','Button','Calendar','Card','Cardview', 'Carousel','Chart', 'Checkbox', 'Chip',  'Color panel',
		  'Colorpicker','Combobox', 'Datetimepicker',  'Docking layout',  'Dropdownbutton','Dropdownlist','Fileupload',
		  'Ganttchart', 'Gauge',
		  'Grid',
		  'Led',
		  'Listbox',
		  'Listmenu',
		  'Masked Textbox',
		  'Menu',
		  'Multisplitbutton',
		  'Multiline Textbox',
		  'Numeric Textbox',
		  'Pager',
		  'Password Textbox',
		  'Progress bar',
		  'Query builder',
		  'Radio button',
		  'Repeat button',
		  'Scroll bar',
		  'Slider',
		  'Sortable',
		  'Splitter',
		  'Switch button',
		  'Table',
		  'Tabs',
		  'Tank',
		  'Text box',
		  'Time picker',
		  'Toast',
		  'Toggle button',
		  'Tooltip',
		  'Tree',
		  'Window'];
		  
		fs.readFile(file + '/overview.htm', 'utf8', function(err, contents) {
			console.log(contents);
			for(let i = 1; i < components.length; i++) {
				const name = components[i];
				
				if (!fs.existsSync(name.toLowerCase())){
					fs.mkdirSync(name.toLowerCase());
				}
				createFile(name.toLowerCase() + '//overview.htm', contents.replace(/Accordion/g, name));
			}
		});
	 });
}

function createFile(fileName, data) {
	if(fs.existsSync(fileName)) {
		fs.truncateSync(fileName);
	}
    fs.appendFile(fileName, data, function (err) {
		if (err) console.log('error at "appendFile"   =>   ' + err);
	});
}