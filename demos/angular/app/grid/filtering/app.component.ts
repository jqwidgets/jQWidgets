 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: `../app/grid/filtering/app.component.htm`    
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('panelReference') eventLogPanel: jqxPanelComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            // Set style on the Panel
            let panel = <HTMLElement>document.getElementsByTagName('jqxPanel')[0].firstElementChild;
            panel.style.border = 'none';
        });
    }

    onFilter(): void
    {
        this.eventLogPanel.clearcontent();
        let filterinfo = this.myGrid.getfilterinformation();
        let eventData = "Triggered 'filter' event";
        for (let i = 0; i < filterinfo.length; i += 1)
        {
            let eventData = "Filter Column: " + filterinfo[i].filtercolumntext;
            this.eventLogPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    }

    clearFiltering(): void
    {
        this.myGrid.clearfilters();
    }

    onFilterBackground(event: any): void
    {
        let isChecked = event.args.checked;
        this.myGrid.showfiltercolumnbackground(isChecked);
    }

    onFilterIcon(event: any): void
    {
        let isChecked = event.args.checked;
        this.myGrid.autoshowfiltericon(!isChecked);
    }

    data: any = generatedata(500);

    source: any =
    {
        localdata: this.data,
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: "array"
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    addfilter: any = (): void =>
    {
        let filtergroup = new $.jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        this.myGrid.addfilter('firstname', filtergroup);
        this.myGrid.applyfilters();
    }

    ready: any = (): void =>
    {
        this.addfilter();
    };

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 160 },
        { text: 'Last Name', datafield: 'lastname', width: 160 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ]
  
}
