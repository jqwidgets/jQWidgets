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
        dataType: 'xml',
        dataFields: [
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

    cellClass = (row: any, dataField: any, cellText: any, rowData: any): string => {
        let cellValue = rowData[dataField];
        switch (dataField) {
            case 'QuantityPerUnit':
                if (cellValue < 11) {
                    return 'min';
                }
                if (cellValue < 14) {
                    return 'minavg';
                }
                if (cellValue < 50) {
                    return 'avg';
                }
                return 'max';
            case 'UnitPrice':
                if (cellValue < 20) {
                    return 'min';
                }
                if (cellValue < 30) {
                    return 'minavg';
                }
                if (cellValue < 50) {
                    return 'avg';
                }
                return 'max';
            case 'UnitsInStock':
                if (cellValue < 20) {
                    return 'min';
                }
                if (cellValue < 30) {
                    return 'minavg';
                }
                if (cellValue < 50) {
                    return 'avg';
                }
                return 'max';
        }
    }

    columns: any[] =
    [
        { text: 'Product Name', dataField: 'ProductName', width: 200 },
        { text: 'Quantity per Unit', dataField: 'QuantityPerUnit', cellClassName: this.cellClass, cellsAlign: 'right', align: 'right', width: 200 },
        { text: 'Unit Price', dataField: 'UnitPrice', align: 'right', cellClassName: this.cellClass, cellsAlign: 'right', cellsformat: 'c2', width: 200 },
        { text: 'Units In Stock', dataField: 'UnitsInStock', cellsAlign: 'right', width: 250, align: 'right', cellClassName: this.cellClass }
    ];

}
