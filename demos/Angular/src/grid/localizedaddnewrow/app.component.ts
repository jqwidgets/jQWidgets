import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: generatedata(10, false),
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array'
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        {
            text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
            validateEverPresentRowWidgetValue: (displayField:string, value: string, rowData: any): any => {
                if (value.length < 5) {
                    return { message: 'Entered value should be more than 5 characters', result: false };
                }
                return true;
            }
        },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ];

    localization: any =
    {
        addrowstring: 'Apply',
        udpaterowstring: 'Update',
        deleterowstring: 'Delete',
        resetrowstring: 'Clear',
        everpresentrowplaceholder: 'Type: '
    };
}