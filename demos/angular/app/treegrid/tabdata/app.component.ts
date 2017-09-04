import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from '../../../jqwidgets-ts/angular_jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent;
    // prepare the data
    source: any =
    {
        dataType: "tab",
        dataFields: [
            { name: "Id", type: "number" },
            { name: "Name", type: "string" },
            { name: "ParentID", type: "number" },
            { name: "Population", type: "number" }
        ],
        hierarchy:
        {
            keyDataField: { name: 'Id' },
            parentDataField: { name: 'ParentID' }
        },
        id: 'Id',
        url: '../sampledata/locations.tsv'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Location Name', dataField: "Name", align: 'center', width: '50%' },
        { text: 'Population', dataField: "Population", align: 'center', width: '50%' }
    ];

    ready(): void {
        this.treeGrid.expandRow(34);
    };
}