import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: generatedata(50, false),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'First Name', groupable: true, aggregates: ['count'], datafield: 'firstname', width: 100 },
        { text: 'Last Name', groupable: true, aggregates: ['count'], datafield: 'lastname', width: 100 },
        { text: 'Product', groupable: true, columntype: 'dropdownlist', datafield: 'productname', width: 200 },
        { text: 'Quantity', datafield: 'quantity', aggregates: ['sum'], width: 70, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', aggregates: ['sum'], cellsalign: 'right', width: 100, cellsformat: 'c2' },
        {
            text: 'Total', datafield: 'total', aggregates: ['sum'], cellsalign: 'right', cellsformat: 'c2',
            cellsrenderer: (row: number, column: any, value: any, defaultRender: string, rowData: any): string => {
                if (value.toString().indexOf('Sum') >= 0) {
                    return defaultRender.replace('Sum', 'Total');
                }
            },
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                var renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + 'Total' + ': ' + aggregates.sum + '</div>';
                return renderstring;
            }
        }
    ];
}