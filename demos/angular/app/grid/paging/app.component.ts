 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'my-app',
    templateUrl: `../app/grid/paging/app.component.htm`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('panelReference') myPanel: jqxPanelComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            // Set style on the Panel
            let panel = <HTMLElement>document.getElementsByTagName('jqxPanel')[0].firstElementChild;
            panel.style.border = 'none';
        });
    }

    onPageChanged(event: any): void
    {
        document.getElementById('eventslog').style.display = 'block';;
        let loggedElements = document.getElementsByClassName('logged');
        if (loggedElements.length >= 5)
        {
            this.myPanel.clearcontent();
        }
        let args = event.args;
        let eventData = "pagechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + "</div>";
        this.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();
        let paginginfoDom = document.getElementById('paginginfo');
        paginginfoDom.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    }

    onPageSizeChanged(event: any): void
    {
        document.getElementById('eventslog').style.display = 'block';
        this.myPanel.clearcontent();
        let args = event.args;
        let eventData = "pagesizechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + ", Old Page Size: " + args.oldpagesize + "</div>";
        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();
        let paginginfoDom = document.getElementById('paginginfo');
        paginginfoDom.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    }

    source: any =
    {
        datatype: "xml",
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:OrderID',
        url: "../../sampledata/orders.xml"
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ];    
}
