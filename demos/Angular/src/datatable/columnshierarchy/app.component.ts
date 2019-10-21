import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

    source: any =
    {
        datatype: 'xml',
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
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 200 },
        { text: 'Name', columngroup: 'ProductDetails', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 200 },
        { text: 'Quantity', columngroup: 'ProductDetails', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 80 },
        { text: 'Freight', columngroup: 'OrderDetails', dataField: 'Freight', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 100 },
        { text: 'Order Date', columngroup: 'OrderDetails', cellsAlign: 'center', align: 'center', cellsFormat: 'd', dataField: 'OrderDate', width: 100 },
        { text: 'Order Address', columngroup: 'OrderDetails', cellsAlign: 'center', align: 'center', dataField: 'OrderAddress', width: 100 },
        { text: 'Price', columngroup: 'ProductDetails', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 70 },
        { text: 'Address', columngroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 120 },
        { text: 'City', columngroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'City', width: 80 }
    ];

    columnGroups: any[] =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' },
        { text: 'Order Details', parentGroup: 'ProductDetails', align: 'center', name: 'OrderDetails' },
        { text: 'Location', align: 'center', name: 'Location' }
    ];
}
