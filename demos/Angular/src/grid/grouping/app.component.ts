import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('groupNum', { static: false }) groupNum: ElementRef;
    @ViewChild('expandedGroup', { static: false }) expandedGroup: ElementRef;
    @ViewChild('collapsedGroup', { static: false }) collapsedGroup: ElementRef;

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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ];

    onExpandGroup(): void {
        let groupNum = this.groupNum.nativeElement.value;
        if (!isNaN(groupNum)) {
            this.myGrid.expandgroup(groupNum);
        }
    }

    onCollapseGroup(): void {
        let groupNum = this.groupNum.nativeElement.value;
        if (!isNaN(groupNum)) {
            this.myGrid.collapsegroup(groupNum);
        }
    }

    onExpandAllGroup(): void {
        this.myGrid.expandallgroups();
    }

    onCollapseAllGroup(): void {
        this.myGrid.collapseallgroups();
    }

    onGroupExpand(event: any): void {
        let args = event.args;
        this.expandedGroup.nativeElement.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    }

    onGroupCollapse(event: any): void {
        let args = event.args;
        this.collapsedGroup.nativeElement.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    }
}
