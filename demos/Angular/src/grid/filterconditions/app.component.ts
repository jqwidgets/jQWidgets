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

    source: any =
    {
        localdata: generatedata(500, false),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Order Date', datafield: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' }
    ];

    addfilter = (): void => {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'contains';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        // add the filters.
        this.myGrid.addfilter('firstname', filtergroup);
        // apply the filters.
        this.myGrid.applyfilters();
    }

    updatefilterconditions = (type: string, defaultconditions: any): string[] => {
        let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
        let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
        switch (type) {
            case 'stringfilter':
                return stringcomparisonoperators;
            case 'numericfilter':
                return numericcomparisonoperators;
            case 'datefilter':
                return datecomparisonoperators;
            case 'booleanfilter':
                return booleancomparisonoperators;
        }
    };

    updatefilterpanel = (filtertypedropdown1: any, filtertypedropdown2: any, filteroperatordropdown: any, filterinputfield1: any,
        filterinputfield2: any, filterbutton: any, clearbutton: any, columnfilter: any, filtertype: any, filterconditions: any): void => {
        let index1 = 0;
        let index2 = 0;
        if (columnfilter != null) {
            let filter1 = columnfilter.getfilterat(0);
            let filter2 = columnfilter.getfilterat(1);
            if (filter1) {
                index1 = filterconditions.indexOf(filter1.comparisonoperator);
                let value1 = filter1.filtervalue;
                filterinputfield1.val(value1);
            }
            if (filter2) {
                index2 = filterconditions.indexOf(filter2.comparisonoperator);
                let value2 = filter2.filtervalue;
                filterinputfield2.val(value2);
            }
        }
        filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
        filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
    };

    ready = (): void => {
        this.addfilter();
        let localizationObject = {
            filterstringcomparisonoperators: ['contains', 'does not contain'],
            // filter numeric comparison operators.
            filternumericcomparisonoperators: ['less than', 'greater than'],
            // filter date comparison operators.
            filterdatecomparisonoperators: ['less than', 'greater than'],
            // filter bool comparison operators.
            filterbooleancomparisonoperators: ['equal', 'not equal']
        }
        this.myGrid.localizestrings(localizationObject);
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