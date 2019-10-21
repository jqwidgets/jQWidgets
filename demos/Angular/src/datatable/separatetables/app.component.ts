import { Component, ViewChild } from '@angular/core';  import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';  @Component({     selector: 'app-root',     templateUrl: './app.component.html' })  export class AppComponent { 
    @ViewChild('masterDataTable', { static: false }) masterDataTable: jqxDataTableComponent;
    @ViewChild('detailsDataTable', { static: false }) detailsDataTable: jqxDataTableComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    ngAfterViewInit(){
        this.masterDataTable.selectRow(0);
    }

    employeesData = this.employeesDataGenerator();

    ordersData = this.ordersDataGenerator();

    detailsColumns: any[] =
    [
        { text: 'Employee Name', dataField: 'EmployeeName', width: 300 },
        { text: 'Ship Name', dataField: 'ShipName', width: 300 },
        { text: 'Ship Address', dataField: 'ShipAddress', width: 300 },
        { text: 'Ship City', dataField: 'ShipCity', width: 150 },
        { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
        { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
    ];      masterColumns: any[] =
    [
        { text: 'First Name', dataField: 'FirstName', width: 250 },
        { text: 'Last Name', dataField: 'LastName', width: 250 },
        { text: 'Title', dataField: 'Title' }
    ];      employeesDataGenerator(): any {
        let source =
            {
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' },
                    { name: 'Title', type: 'string' },
                    { name: 'Address', type: 'string' },
                    { name: 'City', type: 'string' }
                ],
                root: 'Employees',
                record: 'Employee',
                id: 'EmployeeID',
                dataType: 'xml',
                url: './../../../sampledata/employees.xml',
                async: false
            };

        let employeesAdapter = new jqx.dataAdapter(source, {
            autoBind: true,
            beforeLoadComplete: (records) => {
                // add 'EmployeeName' data field.
                for (let i = 0; i < records.length; i++) {
                    records[i]['EmployeeName'] = records[i].FirstName + ' ' + records[i].LastName;
                }
                return records;
            }
        });     

        return employeesAdapter;
    }      ordersDataGenerator(): any {         let ordersSource =
            {
                dataFields: [
                    { name: 'EmployeeID', type: 'number' },
                    { name: 'EmployeeName', value: 'EmployeeID', type: 'string', values: { source: this.employeesData.records, value: 'EmployeeID', name: 'EmployeeName' } },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                url: './../../../sampledata/orderdetails.xml',
                async: false
            };
        // create orders DataAdapter.
        let ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
        let orders = ordersDataAdapter.records;

        return orders;
    }      masterTableOnRowSelect(event: any): void {         let key = event.args.key;
        let filterGroup = new jqx.filter();
        let filter_or_operator = 1;
        let filterValue = key;
        let filterCondition = 'equal';
        // create string filter
        let filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
        // fill the orders depending on the id.
        let ordersbyid = [];
        // filter all orders by EmployeeID.
        for (let m = 0; m < this.ordersData.length; m++) {
            let result = filter.evaluate(this.ordersData[m]['EmployeeID']);
            if (result)
                ordersbyid.push(this.ordersData[m]);
        }
        let detailsSource = {
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'EmployeeName', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        // update the details DataTable.
        let detailsAdapter = new jqx.dataAdapter(detailsSource);
        this.detailsDataTable.source(detailsAdapter);     } }