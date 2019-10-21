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
        localdata: generatedata(10, false),
        datatype: 'array',
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

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'First Name', dataField: 'firstname', width: 150 },
        { text: 'Last Name', dataField: 'lastname', width: 150 },
        { text: 'Product', dataField: 'productname', width: 200 },
        { text: 'Ship Date', dataField: 'date', width: 150, align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
        { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right' },
        { text: 'Price', dataField: 'price', width: 100, cellsalign: 'right', align: 'right', cellsFormat: 'c2' }
    ];

    printBtnOnClick(): void {
        let gridContent = this.myDataTable.exportData('html');
        let newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<title>jQWidgets DataTable</title>' +
                '</head>' +
                '<body>' + gridContent + '</body></html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    };
}
