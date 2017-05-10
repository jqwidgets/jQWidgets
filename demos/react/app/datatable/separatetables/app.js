import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.masterDataTable.on('bindingComplete', () => {
            this.refs.masterDataTable.selectRow(0);
        });

        this.refs.masterDataTable.on('rowSelect', (event) => {

            let ordersSource =
                {
                    dataFields: [
                        { name: 'EmployeeID', type: 'number' },
                        { name: 'EmployeeName', value: 'EmployeeID', type: 'string', values: { source: this.employeesAdapter().records, value: 'EmployeeID', name: 'EmployeeName' } },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    root: 'Orders',
                    record: 'Order',
                    dataType: 'xml',
                    url: '../sampledata/orderdetails.xml',
                    async: false
                };
            // create orders DataAdapter.
            let ordersDataAdapter = new $.jqx.dataAdapter(ordersSource, { autoBind: true });
            let orders = ordersDataAdapter.records;
            // event.args
            // row key - event.args.key
            // row index - event.args.index
            // row data - event.args.row
            // key === Employee ID
            let key = event.args.key;
            let filterGroup = new $.jqx.filter();
            let filter_or_operator = 1;
            let filterValue = key;
            let filterCondition = 'equal';
            // create string filter
            let filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            // fill the orders depending on the id.
            let ordersbyid = [];
            // filter all orders by EmployeeID.
            for (let m = 0; m < orders.length; m++) {
                let result = filter.evaluate(orders[m]['EmployeeID']);
                if (result)
                    ordersbyid.push(orders[m]);
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
            let detailsAdapter = new $.jqx.dataAdapter(detailsSource);
            this.refs.detailsDataTable.source(detailsAdapter);
        });
    } 
    employeesAdapter() {
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
                url: '../sampledata/employees.xml',
                async: false
            };

        let employeesAdapter = new $.jqx.dataAdapter(source, {
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
    }
    render() {
        

        let detailsColumns =
            [
                { text: 'Employee Name', dataField: 'EmployeeName', width: 300 },
                { text: 'Ship Name', dataField: 'ShipName', width: 300 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 300 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
            ];

        let masterColumns =
            [
                { text: 'First Name', dataField: 'FirstName', width: 250 },
                { text: 'Last Name', dataField: 'LastName', width: 250 },
                { text: 'Title', dataField: 'Title' }
            ];

        return (
            <div>
                <h3>Employees</h3>
                <JqxDataTable ref='masterDataTable'
                    width={850} source={this.employeesAdapter()} pageSize={5}
                    pageable={true} sortable={true} columns={masterColumns}
                />

                <h3>Orders by Employee</h3>
                <JqxDataTable ref='detailsDataTable'
                    width={850} pageable={true} pagesize={5} columns={detailsColumns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
