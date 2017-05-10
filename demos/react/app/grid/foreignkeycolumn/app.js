import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let employeesSource =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'FirstName', type: 'string' },
                    { name: 'LastName', type: 'string' }
                ],
                root: 'Employees',
                record: 'Employee',
                id: 'EmployeeID',
                url: '../sampledata/employees.xml',
                async: false
            };
        let employeesAdapter = new $.jqx.dataAdapter(employeesSource, {
            autoBind: true,
            beforeLoadComplete: (records) => {
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
        // prepare the data
        let ordersSource =
            {
                datatype: 'xml',
                datafields: [
                    // name - determines the field's name.
                    // values - specifies the field's values.
                    // values.source - specifies the foreign source. The expected value is an array.
                    // values.name - specifies the field's name in the foreign source. 
                    // When the ordersAdapter is loaded, each record will have a field called 'EmployeeID'. The 'EmployeeID' for each record will come from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml. 
                    { name: 'EmployeeID', map: 'm\\:properties>d\\:EmployeeID', values: { source: employeesAdapter.records, name: 'EmployeeName' } },
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
                url: '../sampledata/orders.xml',
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };
        let ordersAdapter = new $.jqx.dataAdapter(ordersSource);

        let columns =
            [
                { text: 'Employee Name', datafield: 'EmployeeID', width: 150 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ];

        return (
            <JqxGrid
                width={850} source={ordersAdapter} pageable={true}
                autoheight={true} columns={columns}
                selectionmode={'multiplecellsadvanced'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
