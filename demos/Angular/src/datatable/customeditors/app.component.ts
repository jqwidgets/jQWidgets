import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data: any[] = generatedata(200, false);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        localData: this.data,
        datatype: 'array',
        dataFields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    getEditorDataAdapter = (datafield: any): any => {
        let source =
            {
                localData: this.data,
                dataType: 'array',
                dataFields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' }
                ]
            };
        let dataAdapter = new jqx.dataAdapter(source, { uniqueDataFields: [datafield] });

        return dataAdapter;
    }

    columns =
    [
        {
            text: 'First Name', columntype: 'template', datafield: 'firstname', width: 180,
            createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor.
                let container = document.createElement('input');
                container.className = 'firstNameInput';
                container.style.cssText = 'padding-left: 4px; border: none';
                editor[0].appendChild(container);

                let inputOptions = {
                    width: width, height: height, source: this.getEditorDataAdapter('firstname'), displayMember: 'firstname'
                };

                jqwidgets.createInstance('.firstNameInput', 'jqxInput', inputOptions);
            },
            initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                let inputField = editor.find('input');
                inputField.val(cellvalue);
            },
            getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.find('input').val();
            }
        },
        {
            text: 'Last Name', datafield: 'lastname', columntype: 'template', width: 180,
            createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor.
                let container = document.createElement('input');
                container.className = 'lastNameInput';
                container.style.cssText = 'padding-left: 4px; border: none';
                editor[0].appendChild(container);

                let inputOptions = {
                    width: width, height: height, source: this.getEditorDataAdapter('lastname'), displayMember: 'lastname'
                };

                jqwidgets.createInstance('.lastNameInput', 'jqxInput', inputOptions);
            },
            initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                let inputField = editor.find('input');
                inputField.val(cellvalue);
            },
            getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.find('input').val();
            }
        },
        {
            text: 'Products', columntype: 'template', datafield: 'productname',
            createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor. 
                editor.jqxDropDownList({
                    source: this.getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height
                });
            },
            initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                editor.jqxDropDownList({ width: width, height: height });
                editor.val(cellvalue);
            },
            getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.val();
            }
        },
        {
            text: 'Quantity', width: 200, columntype: 'custom', datafield: 'quantity',
            createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor. 
                editor.jqxSlider({ step: 1, mode: 'fixed', tooltip: true, showTicks: false, min: 0, max: 30, width: width, height: height });
            },
            initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                let value = parseInt(cellvalue);
                if (isNaN(value)) value = 0;
                editor.jqxSlider('setValue', value);
            },
            getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.val();
            }
        }
    ];
}
