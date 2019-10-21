import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: generatedata(200, false),
        datatype: 'array',
        updaterow: (rowid: any, rowdata: any, commit: any): void => {
            // synchronize with the server - send update command
            // call commit with parameter true if the synchronization with the server is successful 
            // and with parameter false if the synchronization failder.
            commit(true);
        },
        datafields:
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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    getEditorDataAdapter = (datafield: string): any => {
        let dataAdapter = new jqx.dataAdapter(this.source, { uniqueDataFields: [datafield] });
        return dataAdapter;
    }

    input: any;
    columns: any[] =
    [
        {
            text: 'First Name', columntype: 'template', datafield: 'firstname', width: 80,
            createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor.
                let container = document.createElement('input');
                container.className = 'firstName';
                editor[0].appendChild(container);

                let options = {
                    width: width, height: height,
                    displayMember: 'firstname',
                    source: this.getEditorDataAdapter('firstname')
                };

                this.input = jqwidgets.createInstance('.firstName', 'jqxInput', options);
            },
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed. 
                if (pressedkey) {
                    this.input.val(pressedkey);
                    this.input.selectLast();
                }
                else {
                    this.input.val(cellvalue);
                    this.input.selectAll();
                }
            },
            geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                // return the editor's value
                return this.input.val();
            }
        },
        {
            text: 'Last Name', datafield: 'lastname', columntype: 'template', width: 80, createeditor: (row, cellvalue, editor, cellText, width, height) => {
                // construct the editor.
                let container = document.createElement('input');
                editor[0].appendChild(container);
                container.className = 'lastName';
                editor[0].appendChild(container);

                let options = {
                    width: width, height: height,
                    displayMember: 'lastname',
                    source: this.getEditorDataAdapter('lastname')
                };

                this.input = jqwidgets.createInstance('.lastName', 'jqxInput', options);
            },
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                if (pressedkey) {
                    this.input.val(pressedkey);
                    this.input.selectLast();
                }
                else {
                    this.input.val(cellvalue);
                    this.input.selectAll();
                }
            },
            geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return this.input.val();
            }
        },
        {
            text: 'Products', columntype: 'template', datafield: 'productname',
            createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor. 
                editor.jqxDropDownList({
                    checkboxes: true, source: this.getEditorDataAdapter('productname'), displayMember: 'productname', valueMember: 'productname', width: width, height: height,
                    selectionRenderer: () => {
                        return '<span style="top: 4px; position: relative;">Please Choose:</span>';
                    }
                });
            },
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                let items = editor.jqxDropDownList('getItems');
                editor.jqxDropDownList('uncheckAll');
                let values = cellvalue.split(/,\s*/);
                for (let j = 0; j < values.length; j++) {
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].label === values[j]) {
                            editor.jqxDropDownList('checkIndex', i);
                        }
                    }
                }
            },
            geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.val();
            }
        },
        {
            text: 'Quantity', width: 200, columntype: 'custom', datafield: 'quantity',
            createeditor: (row: number, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                // construct the editor. 
                editor.css('margin-top', '2px');
                editor.jqxSlider({ step: 1, mode: 'fixed', showTicks: false, min: 0, max: 30, width: width, height: height });
            },
            initeditor: (row: number, cellvalue: any, editor: any, celltext: any, pressedkey: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.
                let value = parseInt(cellvalue);
                if (isNaN(value)) value = 0;
                editor.jqxSlider('setValue', value);
            },
            geteditorvalue: (row: number, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.val();
            }
        }
    ];
}