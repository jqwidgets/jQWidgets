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
        { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2' }
    ];

    dropDownsSource: string[] = ['Left', 'Center', 'Right'];

    columnAlignment(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.setColumnProperty('ShippedDate', 'align', 'left');
                this.myDataTable.setColumnProperty('Freight', 'align', 'left');
                break;
            case 1:
                this.myDataTable.setColumnProperty('ShippedDate', 'align', 'center');
                this.myDataTable.setColumnProperty('Freight', 'align', 'center');
                break;
            case 2:
                this.myDataTable.setColumnProperty('ShippedDate', 'align', 'right');
                this.myDataTable.setColumnProperty('Freight', 'align', 'right');
                break;
        }
    }

    cellsAlignment(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'left');
                this.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'left');
                break;
            case 1:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'center');
                this.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'center');
                break;
            case 2:
                this.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'right');
                this.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'right');
                break;
        }
    }
}
