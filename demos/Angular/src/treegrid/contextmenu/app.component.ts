import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;
    @ViewChild('myMenu', { static: false }) myMenu: jqxMenuComponent;

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

    columns =
    [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
        { text: 'LastName', dataField: 'LastName', width: 200 },
        { text: 'Department Name', dataField: 'DepartmentName', width: 200 },
        { text: 'Title', dataField: 'Title', width: 300 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
        { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
        { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
    ];

    ready = (): void => {
        this.myTreeGrid.expandRow(32);
        document.addEventListener('contextmenu', event => event.preventDefault());
    };

    myTreeGridOnContextmenu(): boolean {
        return false;
    };

    myTreeGridOnRowClick(event: any): boolean {
        let args = event.args;
        if (args.originalEvent.button == 2) {
            let scrollTop = window.scrollX;
            let scrollLeft = window.scrollY;
            this.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
            return false;
        }
    };

    myMenuOnItemClick(event: any): void {
        let args = event.args;
        let selection = this.myTreeGrid.getSelection();
        let rowid = selection[0].uid;
        if (args.innerHTML == 'Edit Selected Row') {
            this.myTreeGrid.beginRowEdit(rowid);
        } else {
            this.myTreeGrid.deleteRow(rowid);
        }
    };
}