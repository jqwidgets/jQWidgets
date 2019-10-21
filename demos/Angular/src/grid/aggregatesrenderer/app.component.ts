import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    theme: any;

    source: any =
    {
        localdata: generatedata(200, false),
        datatype: 'array',
        updaterow: (rowid: any, rowdata: any, commit: any): any => {
            // synchronize with the server - send update command   
            commit(true);
        },
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
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
        {
            text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 190,
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                return renderstring;
            }
        },
        {
            text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 190,
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                return renderstring;
            }
        },
        {
            text: 'Product', datafield: 'productname', width: 170,
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                return renderstring;
            }
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2', aggregates: ['min', 'max'],
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; ">';
                for (let obj in aggregates) {
                    let name = obj == 'min' ? 'Min' : 'Max';
                    let color = obj == 'max' ? 'green' : 'red';
                    let value = aggregates[obj];
                    renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden">' + name + ': ' + value + '</div>';
                }
                renderstring += '</div>';
                return renderstring;
            }
        },
        {
            text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'],
            aggregatesrenderer: (aggregates: any, column: any, element: any, summaryData: any): string => {
                let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%;">';
                for (let obj in aggregates) {
                    let name = obj == 'sum' ? 'Sum' : 'Avg';
                    let color = 'green';
                    let value = aggregates[obj];

                    if (obj == 'sum' && summaryData['sum'] < 650) {
                        color = 'red';
                    }
                    if (obj == 'avg' && summaryData['avg'] < 4) {
                        color = 'red';
                    }

                    renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden;">' + name + ': ' + value + '</div>';
                }
                renderstring += '</div>';
                return renderstring;
            }
        }
    ];
}
