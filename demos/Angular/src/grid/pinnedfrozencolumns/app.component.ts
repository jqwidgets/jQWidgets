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
            { name: 'ProductName' },
            { name: 'QuantityPerUnit' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'UnitsOnOrder', type: 'float' },
            { name: 'ReorderLevel', type: 'float' },
            { name: 'CategoryID', type: 'int' }
        ],
        root: 'Products',
        record: 'Product',
        id: 'ProductID',
        url: './../../../sampledata/products.xml'
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Product Name', datafield: 'ProductName', width: 250, pinned: true },
        { text: 'Category', datafield: 'CategoryID', width: 120, cellsalign: 'right' },
        { text: 'Quantity Per Unit', datafield: 'QuantityPerUnit', width: 200, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'UnitPrice', width: 120, cellsformat: 'c2', cellsalign: 'right' },
        { text: 'Units On Order', datafield: 'UnitsOnOrder', width: 120, cellsalign: 'right' },
        { text: 'Reorder Level', datafield: 'ReorderLevel', width: 120, cellsalign: 'right' }
    ];
}