import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDataTable.on('bindingComplete', () => {
            this.refs.myDataTable.showDetails(1);
        });
    }
    render() {
        let source =
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
                url: '../sampledata/employees.xml'
            };

        let ordersSource =
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
                url: '../sampledata/orderdetails.xml',
                async: false
            };

        let ordersDataAdapter = new $.jqx.dataAdapter(ordersSource, { autoBind: true });

        let orders = ordersDataAdapter.records;

        let nestedTables = new Array();

        let count = 0;

        let initRowDetails = (id, row, element, rowinfo) => {

            let div = document.createElement('div');
            div.style.margin = 10;
            element[0].appendChild(div)
            let nestedDataTable = element[0].children[0];
            let containerID = 'nestedDataTable' + count;
            nestedDataTable.id = containerID;
            count++;
            let filterGroup = new $.jqx.filter();
            let filter_or_operator = 1;
            let filterValue = id;
            let filterCondition = 'equal';
            let filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            // fill the orders depending on the id.
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
                let nestedDataTableAdapter = new $.jqx.dataAdapter(ordersSource);
                let columns = [
                    { text: 'Ship Name', dataField: 'ShipName', width: 200 },
                    { text: 'Ship Address', dataField: 'ShipAddress', width: 200 },
                    { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsFormat: 'd', width: 200 }
                ];
             
                ReactDOM.render(
                    <JqxDataTable
                        width={820} height={180} columns={columns}
                        pageable={true} source={nestedDataTableAdapter}
                        
                    />, document.getElementById(containerID));


                // store the nested Data Tables and use the Employee ID as a key.
                nestedTables[id] = nestedDataTable;
            }
        }

        let columns =
            [
                { text: 'First Name', dataField: 'FirstName', width: 250 },
                { text: 'Last Name', dataField: 'LastName', width: 250 },
                { text: 'Title', dataField: 'Title' }
            ];

        return (
            <JqxDataTable ref='myDataTable'
                width={850} source={source} rowDetails={true}
                pageable={true} pageSize={3} columns={columns}
                initRowDetails={initRowDetails}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
