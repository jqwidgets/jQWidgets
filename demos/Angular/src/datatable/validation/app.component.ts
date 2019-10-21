import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        dataFields: [
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
        url: './../../../sampledata/orderdetails.xml'
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
        { text: 'Order ID', editable: false, dataField: 'OrderID', width: 100 },
        {
            text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 100,
            validation: (cell: any, value: number): any => {
                if (value > 1000 || value < 0) return { message: 'Freight should be in the 0-1000 interval', result: false };
                return true;
            }
        },
        {
            text: 'Ship Country', dataField: 'ShipCountry', width: 150,
            validation: (cell: any, value: string): any => {
                if (value.length < 5) return { message: 'Ship Country should be minimum 5 characters', result: false };
                return true;
            }
        },
        {
            text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy',
            validation: (cell: any, value: any): any => {
                let date = new Date(value);
                if (date.getFullYear() > 2014 || date.getFullYear() < 1990) {
                    return { message: 'Shipped Date should be in the 1990 - 2014 interval', result: false };
                }
                return true;
            }
        }
    ];
}