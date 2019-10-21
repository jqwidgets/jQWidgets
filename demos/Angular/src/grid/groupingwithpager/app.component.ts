import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;
    @ViewChild('expandedGroupLog', { static: false }) expandedGroupLog: ElementRef;
    @ViewChild('collapsedGroupLog', { static: false }) collapsedGroupLog: ElementRef;

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
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:CustomerID',
        url: './../../../sampledata/customers.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ];

    ExpandBtnOnClick(): void {
        let groupnum = this.myInput.val();
        if (!isNaN(groupnum)) {
            this.myGrid.expandgroup(groupnum);
        }
    };

    CollapseBtnOnClick(): void {
        let groupnum = this.myInput.val();
        if (!isNaN(groupnum)) {
            this.myGrid.collapsegroup(groupnum);
        }
    };

    ExpandAllBtnOnClick(): void {
        this.myGrid.expandallgroups();
    };

    CollapseAllBtnOnClick(): void {
        this.myGrid.collapseallgroups();
    };

    myGridOnGroupExpand(event: any): void {
        let args = event.args;
        this.expandedGroupLog.nativeElement.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    };

    myGridOnGroupCollapse(event: any): void {
        let args = event.args;
        this.collapsedGroupLog.nativeElement.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
    };
}