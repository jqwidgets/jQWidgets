import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'xml',
        datafields: [
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
        { text: 'Supplier Name', cellsalign: 'center', align: 'center', datafield: 'SupplierName', width: 110 },
        { text: 'Name', columngroup: 'ProductDetails', cellsalign: 'center', align: 'center', datafield: 'ProductName', width: 120 },
        { text: 'Quantity', columngroup: 'ProductDetails', datafield: 'Quantity', cellsformat: 'd', cellsalign: 'center', align: 'center', width: 80 },
        { text: 'Freight', columngroup: 'OrderDetails', datafield: 'Freight', cellsformat: 'd', cellsalign: 'center', align: 'center', width: 100 },
        { text: 'Order Date', columngroup: 'OrderDetails', cellsalign: 'center', align: 'center', cellsformat: 'd', datafield: 'OrderDate', width: 100 },
        { text: 'Order Address', columngroup: 'OrderDetails', cellsalign: 'center', align: 'center', datafield: 'OrderAddress', width: 100 },
        { text: 'Price', columngroup: 'ProductDetails', datafield: 'Price', cellsformat: 'c2', align: 'center', cellsalign: 'center', width: 70 },
        { text: 'Address', columngroup: 'Location', cellsalign: 'center', align: 'center', datafield: 'Address', width: 120 },
        { text: 'City', columngroup: 'Location', cellsalign: 'center', align: 'center', datafield: 'City', width: 80 }
    ];

    columngroups: any[] =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' },
        { text: 'Order Details', parentgroup: 'ProductDetails', align: 'center', name: 'OrderDetails' },
        { text: 'Location', align: 'center', name: 'Location' }
    ];
}