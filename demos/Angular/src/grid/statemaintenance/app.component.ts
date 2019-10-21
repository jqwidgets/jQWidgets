import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    state: any = null;

    source: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml',
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
        { text: 'Ship Name', filtercondition: 'starts_with', datafield: 'ShipName', width: 250 },
        { text: 'Ship City', datafield: 'ShipCity', width: 200 },
        { text: 'Ship Country', datafield: 'ShipCountry' }
    ];

    saveStatebtn(): void {
        this.state = this.myGrid.savestate();
    };

    loadStateBtn(): void {
        if (this.state) {
            this.myGrid.loadstate(this.state);
        }
        else {
            this.myGrid.loadstate({});
        }
    };
}