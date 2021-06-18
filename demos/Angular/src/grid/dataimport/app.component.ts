import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
    	datatype: 'xlsx',
		url: './../../../sampledata/data.xlsx',
		datafields: [
			{ name: 'id', type: 'number' },
			{ name: 'firstName', type: 'string' },
			{ name: 'lastName', type: 'string' },
			{ name: 'productName', type: 'string' },
			{ name: 'quantity', type: 'number' },
			{ name: 'price', type: 'number' },
			{ name: 'total', type: 'string' }
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
        { text: 'id', dataField: 'id'},
		{ text: 'First Name', dataField: 'firstName'},
		{ text: 'Last Name', dataField: 'lastName' },
		{ text: 'Product', dataField: 'productName' },
		{ text: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
		{ text: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		{ text: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ];
}