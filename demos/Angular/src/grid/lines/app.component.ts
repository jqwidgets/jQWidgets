import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
   
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        localdata: generatedata(200, false),
        datafields:
        [
            { name: 'id', type: 'number' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    ready = (): void => {
        this.myGrid.selectrow(2);
    }

    rowLinesOnChange(event: any): void {
        this.myGrid.showrowlines(event.args.checked);
    };

    columnLinesOnChange(event: any): void {
        this.myGrid.showcolumnlines(event.args.checked);
    };

	columnHeaderLinesOnChange(event: any): void {
        this.myGrid.showcolumnheaderlines(event.args.checked);
    };

}