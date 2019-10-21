import { Component, ViewChild } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;

    source: any =
    {
        localData: generatedata(100, false),
        dataType: 'array',
        dataFields:
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
        { text: 'First Name', dataField: 'firstname', width: 190 },
        { text: 'Last Name', dataField: 'lastname', width: 190 },
        { text: 'Product', dataField: 'productname', width: 177 },
        { text: 'Available', dataField: 'available', width: 67, cellsAlign: 'center', align: 'center' },
        { text: 'Ship Date', dataField: 'date', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
        { text: 'Quantity', dataField: 'quantity', width: 70, align: 'right', cellsAlign: 'right' },
        { text: 'Price', dataField: 'price', cellsAlign: 'right', width:100, align: 'right', cellsFormat: 'c2' }
    ];

    excelExport(): void {
        this.myDataTable.exportData('xls');
    };

    xmlExport(): void {
        this.myDataTable.exportData('xml');
    };

    csvExport(): void {
        this.myDataTable.exportData('csv');
    };

    tsvExport(): void {
        this.myDataTable.exportData('tsv');
    };

    htmlExport(): void {
        this.myDataTable.exportData('html');
    };

    jsonExport(): void {
        this.myDataTable.exportData('json');
    };

    pdfExport(): void {
        this.myDataTable.exportData('pdf');
    };
}
