import { Component, ViewChild } from '@angular/core';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable', { static: false }) myDataTable; jqxDataTableComponent;

    source: any =
    {
        dataType: 'xml',
        dataFields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml'
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
        { text: 'Ship Name', dataField: 'ShipName', width: 350, align: 'left', cellsAlign: 'left' },
        { text: 'Freight', dataField: 'Freight', width: 180, align: 'right', cellsFormat: 'F2', cellsAlign: 'right' },
        { text: 'Ship Address', dataField: 'ShipAddress', align: 'left', width: 350, cellsAlign: 'left' },
        { text: 'Ship City', dataField: 'ShipCity', width: 100, align: 'left', cellsAlign: 'left' },
        { text: 'Ship Country', dataField: 'ShipCountry', align: 'left', cellsAlign: 'left' }
    ];

    tableOnBindingComplete(): void {
        this.myDataTable.focus();
        this.myDataTable.selectRow(0);
    }
}

