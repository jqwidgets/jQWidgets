import { Component, ViewChild } from '@angular/core';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;

    source: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml'
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
        { text: 'Shipped Date', datafield: 'ShippedDate', width: '50%', cellsFormat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2', cellsalign: 'right' }
    ];

    dateSource: string[] = ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'];

    numberSource: string[] = ['n', 'f', 'f2', 'f3', 'c', 'c2', 'c3', 'p', 'p2', 'p3'];

    dateFormats(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'd');
                break;
            case 1:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'D');
                break;
            case 2:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'f');
                break;
            case 3:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'F');
                break;
            case 4:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'Y');
                break;
            case 5:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'M');
                break;
            case 6:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                break;
        }
    }

    numberFormats(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'n');
                break;
            case 1:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f');
                break;
            case 2:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f2');
                break;
            case 3:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f3');
                break;
            case 4:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c');
                break;
            case 5:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c2');
                break;
            case 6:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c3');
                break;
            case 7:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p');
                break;
            case 8:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p2');
                break;
            case 9:
                this.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p3');
                break;
        }
    }
}
