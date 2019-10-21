import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

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
        id: { name: 'OrderID', map: 'm\\:properties>d\\:OrderID' },
        url: './../../../sampledata/orders.xml',
        sortcolumn: 'ShipName',
        sortdirection: 'asc'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
        { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ];

    myGridOnSort(event: any): void {
        this.myPanel.clearcontent();
        let sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
        if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
            sortdirection = 'null';
        }
        let eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };

    removeSortBtnOnClick(): void {
        this.myGrid.removesort();
    };

    sortBackGroundBtn(event: any): void {
        this.myGrid.showsortcolumnbackground(event.args.checked);
    };
}