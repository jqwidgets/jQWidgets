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
        dataFields:
        [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: 'Orders',
        record: 'Order',
        dataType: 'xml',
        id: 'OrderID',
        url: './../../../sampledata/orderdetails.xml',
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
        { text: 'Order ID', editable: false, dataField: 'OrderID', width: 250 },
        { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 250 },
        { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
        { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
    ];

    tableOnBindingComplete(): void {
        this.myDataTable.beginUpdate();
        this.myDataTable.lockRow(1);
        this.myDataTable.lockRow(3);
        this.myDataTable.lockRow(5);
        this.myDataTable.endUpdate();
    }
}

