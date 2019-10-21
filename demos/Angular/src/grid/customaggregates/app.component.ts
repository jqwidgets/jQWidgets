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
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        updaterow: (rowid: any, rowdata: any, commit: any): void => {
            // synchronize with the server - send update command   
            commit(true);
        }
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
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 150 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 150 },
        { text: 'Product', datafield: 'productname', width: 200 },
        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right', cellsformat: 'n2' },
        {
            text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2',
            aggregates: [{
                '<b>Total</b>': (aggregatedValue: number, currentValue: number, column: any, record: any): number => {
                  let total = currentValue * parseInt(record['quantity']);
                  return aggregatedValue + total;
                }
            }]
        }
    ];
}