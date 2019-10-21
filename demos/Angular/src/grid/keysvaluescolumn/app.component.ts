import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('eventLog', { static: false }) eventLog: ElementRef;

    employeesSource: any =
    {
        datatype: 'xml',
        datafields: [
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' }
        ],
        root: 'Employees',
        record: 'Employee',
        id: 'EmployeeID',
        url: './../../../sampledata/employees.xml',
        async: false
    };

    employeesAdapter: any = new jqx.dataAdapter(this.employeesSource, {
        autoBind: true,
        beforeLoadComplete: (records: any[]): any[] => {
            let data = new Array();
            // update the loaded records. Dynamically add EmployeeName and EmployeeID fields. 
            for (let i = 0; i < records.length; i++) {
                let employee = records[i];
                employee.EmployeeName = employee.FirstName + ' ' + employee.LastName;
                employee.EmployeeID = employee.uid;
                data.push(employee);
            }
            return data;
        }
    });

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    ordersSource: any =
    {
        datatype: 'xml',
        datafields: [
            // name - determines the field's name.
            // value - the field's value in the data source.
            // values - specifies the field's values.
            // values.source - specifies the foreign source. The expected value is an array.
            // values.value - specifies the field's name in the foreign source. 
            // values.name - specifies the field's value in the foreign source. 
            // When the ordersAdapter is loaded, each record will have a field called 'EmployeeName'. The 'EmployeeName' for each record comes from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml. 
            { name: 'EmployeeName', value: 'EmployeeID', values: { source: this.employeesAdapter.records, value: 'EmployeeID', name: 'EmployeeName' } },
            { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID' },
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:OrderID',
        url: './../../../sampledata/orders.xml',
        pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {
            // callback called when a page or page size is changed.
        }
    };

    ordersAdapter: any = new jqx.dataAdapter(this.ordersSource);

    columns: any[] =
    [
        { text: 'Employee Name', datafield: 'EmployeeID', displayfield: 'EmployeeName', columntype: 'dropdownlist', width: 150 },
        { text: 'Ship City', datafield: 'ShipCity', width: 150 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
        { text: 'Ship Name', datafield: 'ShipName' }
    ];

    myGridOnCellSelect(event: any): void {
        let column = this.myGrid.getcolumn(event.args.datafield);
        let value = this.myGrid.getcellvalue(event.args.rowindex, column.datafield);
        let displayValue = this.myGrid.getcellvalue(event.args.rowindex, column.displayfield);
        this.eventLog.nativeElement.innerHTML = '<div>Selected Cell<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + ', Value: ' + value + ', Label: ' + displayValue + '</div>';
    };

    myGridOnCellEndEdit(event: any): void {
        let column = this.myGrid.getcolumn(event.args.datafield);
        let eventLog = this.eventLog.nativeElement;

        if (column.displayfield != column.datafield) {
            eventLog.innerHTML = '<div>Cell Edited:<br/>Index: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value.value + ', Label: ' + event.args.value.label
                + '<br/>Old Value: ' + event.args.oldvalue.value + ', Old Label: ' + event.args.oldvalue.label + '</div>';
        }
        else {
            eventLog.innerHTML = '<div>Cell Edited:<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value
                + '<br/>Old Value: ' + event.args.oldvalue + '</div>';
        }
    };
}