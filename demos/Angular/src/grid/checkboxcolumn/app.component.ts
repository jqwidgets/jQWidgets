import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        localdata: generatedata(200, true),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
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
        { text: 'First Name', editable: false, datafield: 'firstname', width: 120 },
        { text: 'Last Name', editable: false, datafield: 'lastname', width: 120 },
        { text: 'Product', editable: false, datafield: 'productname', width: 180 },
        { text: 'Available', datafield: 'available', threestatecheckbox: true, columntype: 'checkbox', width: 70 },
        { text: 'Quantity', editable: false, datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', editable: false, datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', editable: false, datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];
}