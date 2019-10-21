import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
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

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    cellClass = (row: number, columnfield: any, value: number): string => {
        if (value < 20) {
            return 'red';
        }
        else if (value >= 20 && value < 50) {
            return 'yellow';
        }
        else return 'green';
    }

    columns: any[] =
    [
        { text: 'Product Name', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 120 },
        { text: 'Unit Price', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 100 },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellclassname: this.cellClass, width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
    ];
}