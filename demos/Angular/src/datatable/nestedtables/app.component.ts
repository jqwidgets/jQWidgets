import { Component, ViewChild } from '@angular/core';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;

    count: number = 0;
    nestedTables = [];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        dataFields: [
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
        url: './../../../sampledata/employees.xml'
    };

    ordersSource: any =
    {
        dataFields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: 'Orders',
        record: 'Order',
        dataType: 'xml',
        url: './../../../sampledata/orderdetails.xml'
    };

    ordersDataAdapter: any = new jqx.dataAdapter(this.ordersSource, { autoBind: true });

    columns: any[] =
    [
        { text: 'First Name', dataField: 'FirstName', width: 250 },
        { text: 'Last Name', dataField: 'LastName', width: 250 },
        { text: 'Title', dataField: 'Title' }
    ];

    initRowDetails = (id: any, row: number, element: any, rowinfo: any): void => {
        let container = document.createElement('div');
        container.style.margin = '10px';
        element[0].appendChild(container);

        let nestedDataTable = element[0].children[0];
        let containerID = `nestedDataTable${this.count}`;
        nestedDataTable.id = containerID;

        let filterGroup = new jqx.filter();
        let filter_or_operator = 1;
        let filterValue = id;
        let filterCondition = 'equal';
        let filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
        // fill the orders depending on the id.
        let orders: any[] = this.ordersDataAdapter.records;
        let ordersbyid = [];
        for (let m = 0; m < orders.length; m++) {
            let result = filter.evaluate(orders[m]['EmployeeID']);
            if (result)
                ordersbyid.push(orders[m]);
        }
        let ordersSource = {
            dataFields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        if (nestedDataTable != null) {
            let nestedDataTableAdapter = new jqx.dataAdapter(ordersSource);
            let columns = [
                { text: 'Ship Name', dataField: 'ShipName', width: 200 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 200 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
            ];

            let options =
                {
                    width: 820, height: 180, columns: columns,
                    pageable: true, source: nestedDataTableAdapter
                };

            jqwidgets.createInstance(`#${containerID}`, 'jqxDataTable', options);

            // store the nested Data Tables and use the Employee ID as a key.
            this.nestedTables[id] = nestedDataTable;
            this.count++;
        }
    }

    ready = (): void => {
        this.myDataTable.showDetails(1);
    }
}

