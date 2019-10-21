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
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'Ship Name', datafield: 'ShipName', width: 250, align: 'right', cellsalign: 'right' },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, align: 'right', cellsalign: 'right', cellsformat: 'yyyy-MM-dd' },
        { text: 'Freight', datafield: 'Freight', width: 80, align: 'right', cellsformat: 'F2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', align: 'right', width: 350, cellsalign: 'right' },
        { text: 'Ship City', datafield: 'ShipCity', width: 100, align: 'right', cellsalign: 'right' },
        { text: 'Ship Country', datafield: 'ShipCountry', align: 'right', cellsalign: 'right' }
    ];
}