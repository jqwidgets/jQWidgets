import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

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
    @ViewChild('pagingInfoLog', { static: false }) pagingInfoLog: ElementRef;

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
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml',
        pagenum: 3,
        pagesize: 20,
        pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {
            // callback called when a page or page size is changed.
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ];

    myGridOnPageChanged(event: any): void {
        if (document.getElementsByClassName('logged').length >= 5) {
            this.myPanel.clearcontent();
        }

        let args = event.args;
        let eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';

        this.myPanel.prepend('<div class="logged" style="margin-top: 5px">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();
        this.pagingInfoLog.nativeElement.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' +
            paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    };

    myGridOnPageSizeChanged(event: any): void {
        this.myPanel.clearcontent();

        let args = event.args;
        let eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';

        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();;
        this.pagingInfoLog.nativeElement.innerHTML = '<div style="margin-top: 5px">Page:' + paginginformation.pagenum + ', Page Size: ' +
            paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    };
}