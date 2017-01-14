 
import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from '../../../../../jqwidgets-ts/angular_jqxtreegrid';

@Component({
    selector: 'my-app',
    template: `<jqxTreeGrid #treeGridReference
                   [width]='850' [height]='"auto"' [source]='dataAdapter' [pageable]='true' [columns]='columns' [ready]='ready'>
               </jqxTreeGrid>`
})

export class AppComponent
{
    @ViewChild('treeGridReference') treeGrid: jqxTreeGridComponent;

    source: any =
    {
        dataType: "csv",
        dataFields: [
            { name: 'EmployeeKey', type: 'number' },
            { name: 'ParentEmployeeKey', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'BirthDate', type: 'date' },
            { name: 'Phone', type: 'string' },
            { name: 'Gender', type: 'string' },
            { name: 'DepartmentName', type: 'string' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'EmployeeKey' },
            parentDataField: { name: 'ParentEmployeeKey' }
        },
        id: 'EmployeeKey',
        url: '../../demos/sampledata/employeesadv.csv'
    }

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
        { text: 'LastName', dataField: 'LastName', width: 200 },
        { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
        { text: 'Title', dataField: 'Title', width: 300 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
        { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
        { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
    ];   

    ready: any = () =>
    {
        this.treeGrid.expandRow(32);
    };
}
