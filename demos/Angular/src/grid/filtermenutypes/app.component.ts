import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        localdata: generatedata(500, false),
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

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', filtertype: 'list', width: 160 },
        { text: 'Last Name', datafield: 'lastname', filtertype: 'list', width: 160 },
        { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    addfilter = (): void => {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Andrew';
        let filtercondition = 'equal';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

        filtergroup.addfilter(filter_or_operator, filter1);
        // add the filters.
        this.myGrid.addfilter('firstname', filtergroup);
        // apply the filters.
        this.myGrid.applyfilters();
    }

    ready = (): void => {
        this.addfilter();
    }

    flag: boolean = false;
    // Prevent initial logging
    myGridOnFilter(event: any): void {
        if (this.flag) {
            this.myPanel.clearcontent();
            let filterinfo = this.myGrid.getfilterinformation();
            let eventData = 'Triggered "filter" event';
            for (let i = 0; i < filterinfo.length; i++) {
                let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
                this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        this.flag = true;
    };

    clearFilteringBtnOnClick(): void {
        this.myGrid.clearfilters();
    };

    filterBackgroundOnChange(event: any): void {
        this.myGrid.showfiltercolumnbackground(event.args.checked);
    };

    filterIconsOnChange(event: any): void {
        this.myGrid.autoshowfiltericon(!event.args.checked);
    };
}