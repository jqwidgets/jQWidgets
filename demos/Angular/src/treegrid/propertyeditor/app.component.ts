import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;
    myCheckBox: any;
    myColorPicker1: any;
    myColorPicker2: any;
    myDropDownList: any;

    data: any[] = [
        {
            'property': 'Name', 'value': 'jqxTreeGrid', type: 'string'
        },
        {
            'property': 'Location', 'value': '0, 0', type: 'string', 'children': [{ 'property': 'X', 'value': '0', type: 'number' }, { 'property': 'Y', 'value': '0', type: 'number' }]
        },
        {
            'property': 'Size', 'value': '200, 200', type: 'string', 'children': [{ 'property': 'Width', 'value': '200', type: 'number' }, { 'property': 'Height', 'value': '200', type: 'number' }]
        },
        {
            'property': 'Background', 'value': '#4621BC', type: 'color'
        },
        {
            'property': 'Color', 'value': '#B1B11B', type: 'color'
        },
        {
            'property': 'Alignment', 'value': 'Left', type: 'align'
        },
        {
            'property': 'Enabled', 'value': 'true', type: 'bool'
        }
    ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
    {
        dataType: 'json',
        dataFields: [
            { name: 'property', type: 'string' },
            { name: 'value', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'children', type: 'array' }
        ],
        hierarchy:
        {
            root: 'children'
        },
        localData: this.data
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns =
    [
        { text: 'Property Name', editable: false, columnType: 'none', dataField: 'property', width: 200 },
        {
            text: 'Value', dataField: 'value', width: 230, columnType: 'custom',
            // creates an editor depending on the 'type' value.
            createEditor: (rowKey: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                let row = this.myTreeGrid.getRow(rowKey);
                switch (row['type']) {
                    case 'string':
                    case 'number':
                        let inputContainer = document.createElement('input');
                        inputContainer.id = 'myInput';
                        inputContainer.style.cssText = 'height: 100%; border: none';
                        editor[0].appendChild(inputContainer);
                        this['inputRow' + rowKey] = jqwidgets.createInstance('#myInput', 'jqxInput', { width: '100%', height: '100%' });
                        break;
                    case 'align':
                        let dropDownListContainer = document.createElement('div');
                        dropDownListContainer.id = 'myDropDownList';
                        dropDownListContainer.style.cssText = 'height: 100%; border: none';
                        editor[0].appendChild(dropDownListContainer);
                        let options =
                            {
                                width: '100%', height: '100%', autoDropDownHeight: true, source: ['Left', 'Center', 'Right']
                            };
                        this.myDropDownList = jqwidgets.createInstance('#myDropDownList', 'jqxDropDownList', options);
                        break;
                    case 'color':
                        if (rowKey === '3') {
                            let dropDownButtonContainer = document.createElement('div');
                            dropDownButtonContainer.id = 'myDropDownButton1';
                            dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                            dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker1"></div></div>';
                            editor[0].appendChild(dropDownButtonContainer);
                            let myDropDownButton1 = jqwidgets.createInstance('#myDropDownButton1', 'jqxDropDownButton', { width: '100%', height: '100%' });
                            this.myColorPicker1 = jqwidgets.createInstance(`.myColorPicker1`, 'jqxColorPicker', { width: 220, height: 220 });
                            this.myColorPicker1.addEventHandler('colorchange', (event: any): void => {
                                myDropDownButton1.setContent(this.getTextElementByColor(event.args.color));
                            });
                        } else {
                            let dropDownButtonContainer = document.createElement('div');
                            dropDownButtonContainer.id = 'myDropDownButton2';
                            dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                            dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker2"></div></div>';
                            editor[0].appendChild(dropDownButtonContainer);
                            let myDropDownButton2 = jqwidgets.createInstance('#myDropDownButton2', 'jqxDropDownButton', { width: '100%', height: '100%' });
                            this.myColorPicker2 = jqwidgets.createInstance(`.myColorPicker2`, 'jqxColorPicker', { width: 220, height: 220 });
                            this.myColorPicker2.addEventHandler('colorchange', (event: any): void => {
                                myDropDownButton2.setContent(this.getTextElementByColor(event.args.color));
                            });
                        }
                        break;
                    case 'bool':
                        let checkBoxContainer = document.createElement('div');
                        checkBoxContainer.id = 'myCheckBox';
                        checkBoxContainer.style.cssText = 'margin-top: 6px; margin-left: -8px; left: 50%; position: relative';
                        editor[0].appendChild(checkBoxContainer);
                        this.myCheckBox = jqwidgets.createInstance('#myCheckBox', 'jqxCheckBox', { checked: cellvalue });
                        break;
                }
            },
            // updates the editor's value.
            initEditor: (rowKey: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                let row = this.myTreeGrid.getRow(rowKey);
                switch (row.type) {
                    case 'string':
                    case 'number':
                        this['inputRow' + rowKey].val(cellvalue);
                        break;
                    case 'align':
                        this.myDropDownList.val(cellvalue);
                        break;
                    case 'color':
                        if (rowKey === '3') {
                            this.myColorPicker1.setColor(cellvalue);
                        } else {
                            this.myColorPicker2.setColor(cellvalue);
                        }
                        break;
                    case 'bool':
                        this.myCheckBox.val(cellvalue);
                        break;
                }
            },
            // returns the value of the custom editor.
            getEditorValue: (rowKey: any, cellvalue: any, editor: any): any => {
                let row = this.myTreeGrid.getRow(rowKey);
                switch (row.type) {
                    case 'string':
                        return this['inputRow' + rowKey].val();
                    case 'number':
                        let number = parseFloat(this['inputRow' + rowKey].val());
                        if (isNaN(number)) {
                            return 0;
                        }
                        else return number;
                    case 'align':
                        return this.myDropDownList.val(1);
                    case 'color':
                        if (rowKey === '3') {
                            let color = this.myColorPicker1.getColor();
                            return '#' + color.hex;
                        } else {
                            let color = this.myColorPicker2.getColor();
                            return '#' + color.hex;
                        }
                    case 'bool':
                        return this.myCheckBox.val();
                }
                return '';
            }
        }
    ];
    editSettings: any =
    {
        saveOnPageChange: true, saveOnBlur: false,
        saveOnSelectionChange: true, cancelOnEsc: true,
        saveOnEnter: true, editOnDoubleClick: true, editOnF2: true
    };
    getTextElementByColor(color: any): string {
        if (color == 'transparent' || color.hex == '') {
            return '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;">transparent</div>';
        }
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        let element = '<div style="text-shadow: none; position: relative; padding-bottom: 4px; margin-top: 4px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
        return element;
    }
    myTreeGridOnCellValueChanged(event: any): void {
        // Update the Location and Size properties and their nested properties.
        var args = event.args;
        var row = args.row;
        var records = row.records;
        // update the nested properties when a parent value is changed.
        if (records.length > 0) {
            var values = args.value.split(',');
            for (var i = 0; i < values.length; i++) {
                var value = $.trim(values[i]);
                var rowKey = this.myTreeGrid.getKey(records[i]);
                this.myTreeGrid.setCellValue(rowKey, 'value', value);
            }
        }
        // update the parent value when the user changes a nested property, 
        else if (row.level == 1) {
            var parent = row.parent;
            var parentRowKey = this.myTreeGrid.getKey(parent);
            var value = '';
            var records = parent.records;
            if (records.length > 0) {
                for (var i = 0; i < records.length; i++) {
                    var rowKey = this.myTreeGrid.getKey(records[i]);
                    var cellValue = this.myTreeGrid.getCellValue(rowKey, 'value');
                    value += cellValue;
                    if (i < records.length - 1) {
                        value += ', ';
                    }
                }
            }
            this.myTreeGrid.setCellValue(parentRowKey, 'value', value);
        }
    };
}