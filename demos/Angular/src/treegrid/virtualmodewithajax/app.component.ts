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
        dataType: 'json',
        dataFields: [
            { name: 'EmployeeID', type: 'number' },
            { name: 'ReportsTo', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'Country', type: 'string' },
            { name: 'City', type: 'string' },
            { name: 'Address', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'BirthDate', type: 'date' }
        ],
        timeout: 10000,
        hierarchy:
        {
            keyDataField: { name: 'EmployeeID' },
            parentDataField: { name: 'ReportsTo' }
        },
        id: 'EmployeeID',
        root: 'value',
        url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Employees?$format=json&$callback=?'
    };
    
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    virtualModeCreateRecords = (expandedRecord, done): void => {
        let dataAdapter = new jqx.dataAdapter(this.source,
            {
                formatData: (data) => {
                    if (expandedRecord == null) {
                        data.$filter = '(ReportsTo eq null)'
                    }
                    else {
                        data.$filter = '(ReportsTo eq ' + expandedRecord.EmployeeID + ')'
                    }
                    return data;
                },
                loadComplete: () => {
                    done(dataAdapter.records);
                },
                loadError: (xhr, status, error) => {
                    done(false);
                    throw new Error('http://services.odata.org: ' + error.toString());
                }
            }
        );
        dataAdapter.dataBind();
    };

    virtualModeRecordCreating = (record): void => {
        // record is creating.
    };

    columns: any[] = [
        { text: 'FirstName', columnGroup: 'Name', dataField: 'FirstName', width: 150 },
        { text: 'LastName', columnGroup: 'Name', dataField: 'LastName', width: 150 },
        { text: 'Title', dataField: 'Title', width: 200 },
        { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd' }
    ];
}