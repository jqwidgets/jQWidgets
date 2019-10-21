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
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        updaterow: (rowid: any, rowdata: any): any => {
            // synchronize with the server - send update command   
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
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 170 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 170 },
        {
            text: 'Product', datafield: 'productname', width: 170,
            aggregates: ['count',
                {
                    'Cappuccino Items':
                    (aggregatedValue: number, currentValue: string): number => {
                        if (currentValue == 'Cappuccino') {
                            return aggregatedValue + 1;
                        }
                        return aggregatedValue;
                    }
                }
            ]
        },
        {
            text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125,
            aggregates: [{
                'In Stock':
                (aggregatedValue: number, currentValue: string): number => {
                    if (currentValue) {
                        return aggregatedValue + 1;
                    }
                    return aggregatedValue;
                }
            },
            {
                'Not In Stock':
                (aggregatedValue: number, currentValue: string): number => {
                    if (!currentValue) {
                        return aggregatedValue + 1;
                    }
                    return aggregatedValue;
                }
            }
            ]
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2', aggregates: ['min', 'max'],
            aggregatesrenderer: (aggregates: any): string => {
                let renderstring = '';
                for (let obj in aggregates) {
                    let name = obj == 'min' ? 'Min' : 'Max';
                    let value = aggregates[obj];
                    renderstring += '<div style="position: relative; margin: 4px; overflow: hidden;">' + name + ': ' + value + '</div>';
                }
                return renderstring;
            }
        },
        { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'] }
    ];
}
