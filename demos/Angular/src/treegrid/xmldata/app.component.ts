import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;

    source: any =
    {
        dataType: "xml",
        dataFields: [
            { name: 'EmployeeID', type: 'number' },
            { name: 'ReportsTo', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'City', type: 'string' },
            { name: 'Address', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'BirthDate', type: 'date' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'EmployeeID' },
            parentDataField: { name: 'ReportsTo' }
        },
        id: 'EmployeeID',
        root: 'Employees',
        record: 'Employee',
        url: './../../../sampledata/employees.xml'
    };
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
        { text: 'LastName', dataField: 'LastName', width: 200 },
        { text: 'Title', dataField: 'Title', width: 300 },
        { text: 'Address', dataField: 'Address', width: 200 },
        { text: 'City', dataField: 'City', width: 150 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
        { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 }
    ];

    ready(): void {
        this.treeGrid.expandRow(2);
    } 
}