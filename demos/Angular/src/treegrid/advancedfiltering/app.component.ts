import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
    source: any =
    {
        dataType: 'csv',
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
        url: './../../../sampledata/employeesadv.csv'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    ready(): void {
        this.treeGrid.expandRow(32);
        this.treeGrid.expandRow(112);
    };

    columns: any[] = [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 180 },
        { text: 'LastName', dataField: 'LastName', width: 180 },
        { text: 'Department Name', dataField: 'DepartmentName', width: 180 },
        { text: 'Title', dataField: 'Title', width: 300 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 150 },
        { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 150 },
        { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 150 }
    ];
}