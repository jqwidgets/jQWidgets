import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent }  from 'jqwidgets-ng/jqxgrid';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    data: any = generatedata(500, false);

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
        datatype: 'array'
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
        { text: 'First Name', datafield: 'firstname', width: 160 },
        { text: 'Last Name', datafield: 'lastname', width: 160 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    addfilter = (): void => {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        this.myGrid.addfilter('firstname', filtergroup, true);
        this.myGrid.applyfilters();
    }

    ready = (): void => {
        this.addfilter();
    };

    //prevents calling to panel(which isn't yet loaded)
    count: number = 0;
    onFilter(): void {
        if (this.count > 1) {
            this.myPanel.clearcontent();
            let filterinfo = this.myGrid.getfilterinformation();
            let eventData = 'Triggered "filter" event';
            for (let i = 0; i < filterinfo.length; i += 1) {
                let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
                this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        this.count++;
    }

    clearFiltering(): void {
        this.myGrid.clearfilters();
    }

    onFilterBackground(event: any): void {
        let isChecked = event.args.checked;
        this.myGrid.showfiltercolumnbackground(isChecked);
    }

    onFilterIcon(event: any): void {
        let isChecked = event.args.checked;
        this.myGrid.autoshowfiltericon(!isChecked);
    }
}
