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

    columns: any[] =
    [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        {
            text: 'Quantity', datafield: 'quantity', width: 100, align: 'right', cellsalign: 'right', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 1500) {
                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            }
        },
        {
            text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 1500) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ digits: 3 });
            }
        },
        {
            text: 'Total', editable: false, datafield: 'total',
            cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
                let total = parseFloat(rowdata.price) * parseFloat(rowdata.quantity);
                return '<div style="margin: 4px;" class="jqx-right-align">' + this.dataAdapter.formatNumber(total, 'c2') + '</div>';
            }
        }
    ];
}