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
        url: './../../../sampledata/orders.xml',
        sortcolumn: 'ShipName',
        sortdirection: 'asc'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    counter: number = 1;
    tooltiprenderer = (element: any): void => {
        let id = `toolTipContainer${this.counter}`;
        element[0].id = id;
        let content = element[0].innerHTML;
        setTimeout(_ => jqwidgets.createInstance(`#${id}`, 'jqxTooltip', { position: 'mouse', content: content }))     
        this.counter++;
    }

    columns: any[] =
    [
        { text: 'Ship Name', datafield: 'ShipName', width: 250, rendered: this.tooltiprenderer },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd', rendered: this.tooltiprenderer },
        { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right', rendered: this.tooltiprenderer },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350, rendered: this.tooltiprenderer },
        { text: 'Ship City', datafield: 'ShipCity', width: 100, rendered: this.tooltiprenderer },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101, rendered: this.tooltiprenderer }
    ];
}