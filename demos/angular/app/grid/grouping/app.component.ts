 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: '../app/grid/grouping/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            let collapseButton = <HTMLElement>document.getElementsByTagName('angularButton')[1].firstElementChild;
            let collapseAllButton = <HTMLElement>document.getElementsByTagName('angularButton')[3].firstElementChild;
            collapseButton.style.marginTop = '10px';
            collapseAllButton.style.marginTop = '10px';
        })

    }

    onExpandGroup(): void
    {
        let inputDom = <any>document.getElementById('groupnum');
        let groupnum = inputDom.value;
        if (!isNaN(groupnum))
        {
            this.myGrid.expandgroup(groupnum);
        }
    }

    onCollapseGroup(): void
    {
        let inputDom = <any>document.getElementById('groupnum');
        let groupnum = inputDom.value;
        if (!isNaN(groupnum))
        {
            this.myGrid.collapsegroup(groupnum);
        }
    }

    onExpandAllGroup(): void
    {
        this.myGrid.expandallgroups();
    }

    onCollapseAllGroup(): void
    {
        this.myGrid.collapseallgroups();
    }

    onGroupExpand(event: any): void
    {
        let args = event.args;
        let expandedgroupLog = document.getElementById('expandedgroup');
        expandedgroupLog.innerText = "Group: " + args.group + ", Level: " + args.level;
    }

    onGroupCollapse(event: any): void
    {
        let args = event.args;
        let collapsedgroupLog = document.getElementById('collapsedgroup');
        collapsedgroupLog.innerText = "Group: " + args.group + ", Level: " + args.level;
    }

    source: any =
    {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: "../../sampledata/customers.xml"
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ];
}
