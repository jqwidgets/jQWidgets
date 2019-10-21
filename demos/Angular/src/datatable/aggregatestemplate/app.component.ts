import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localData: generatedata(200, false),
        dataType: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        updateRow: function (rowid, rowdata, commit) {
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
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 90 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Quantity', datafield: 'quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n2' },
        {
            text: 'Price', datafield: 'price', cellsAlign: 'right', align: 'right', cellsFormat: 'c2',
            aggregates:
            [{
                'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => {
                    let total = currentValue * parseInt(record['quantity']);
                    return aggregatedValue + total;
                }
            }],
            aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
                let renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                renderString += '<strong>Total: </strong>' + aggregates.Total + '</div>';
                return renderString;
            }
        }
    ];
}
