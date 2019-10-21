import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        dataType: 'xml',
        dataFields: [
            { name: 'SupplierName', type: 'string' },
            { name: 'Quantity', type: 'number' },
            { name: 'OrderDate', type: 'date' },
            { name: 'OrderAddress', type: 'string' },
            { name: 'Freight', type: 'number' },
            { name: 'Price', type: 'number' },
            { name: 'City', type: 'string' },
            { name: 'ProductName', type: 'string' },
            { name: 'Address', type: 'string' }
        ],
        url: './../../../sampledata/orderdetailsextended.xml',
        root: 'DATA',
        record: 'ROW'
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
        { text: 'Supplier Name', hidden: true, cellsAlign: 'left', align: 'left', dataField: 'SupplierName', width: 280 },
        { text: 'Product Name', cellsAlign: 'left', align: 'left', dataField: 'ProductName', width: 250 },
        { text: 'Quantity', dataField: 'Quantity', cellsformat: 'd', cellsAlign: 'right', align: 'right', width: 80 },
        { text: 'Price', dataField: 'Price', cellsformat: 'c2', align: 'right', cellsAlign: 'right', width: 70 },
        { text: 'Address', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 250 },
        { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ];

    groupsRenderer = (value: string | number, rowData: any, level: any): string => {
        return 'Supplier Name: ' + value;
    };
}

