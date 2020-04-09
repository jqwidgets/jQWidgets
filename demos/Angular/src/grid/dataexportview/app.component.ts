import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(100, false),
        datatype: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
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
        { text: 'First Name', datafield: 'firstname', width: 130 },
        { text: 'Last Name', datafield: 'lastname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 200 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
        { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
        { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
    ];

    excelBtnOnClick() {
        this.myGrid.exportview('xlsx', 'jqxGrid');
    };

 
    htmlBtnOnClick() {
        this.myGrid.exportview('html', 'jqxGrid');
    };


    pdfBtnOnClick() {
        this.myGrid.exportview('pdf', 'jqxGrid');
    };
}