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
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: 'Products',
        record: 'Product',
        id: 'ProductID',
        url: './../../../sampledata/products.xml'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };

    columns: any[] =
    [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
    ];

    columngroups: any[] =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ];
}
