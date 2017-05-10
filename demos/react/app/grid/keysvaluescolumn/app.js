import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {

        this.refs.myGrid.on('cellselect', (event) => {
            let column = this.refs.myGrid.getcolumn(event.args.datafield);
            let value = this.refs.myGrid.getcellvalue(event.args.rowindex, column.datafield);
            let displayValue = this.refs.myGrid.getcellvalue(event.args.rowindex, column.displayfield);
            let log = document.getElementById('eventLog');
            log.innerHTML = '<div>Selected Cell<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + ', Value: ' + value + ', Label: ' + displayValue + '</div>';
        });

        this.refs.myGrid.on('cellendedit', (event) => {
            let column = this.refs.myGrid.getcolumn(event.args.datafield);
            let log = document.getElementById('eventLog');

            if (column.displayfield != column.datafield) {
                log.innerHTML = '<div>Cell Edited:<br/>Index: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value.value + ', Label: ' + event.args.value.label
                    + '<br/>Old Value: ' + event.args.oldvalue.value + ', Old Label: ' + event.args.oldvalue.label + '</div>';
            }
            else {
                log.innerHTML = '<div>Cell Edited:<br/>Row: ' + event.args.rowindex + ', Column: ' + column.text + '<br/>Value: ' + event.args.value
                    + '<br/>Old Value: ' + event.args.oldvalue + '</div>';
            }
        });

    }
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
                    // value - the field's value in the data source.
                    // values - specifies the field's values.
                    // values.source - specifies the foreign source. The expected value is an array.
                    // values.value - specifies the field's name in the foreign source. 
                    // values.name - specifies the field's value in the foreign source. 
                    // When the ordersAdapter is loaded, each record will have a field called 'EmployeeName'. The 'EmployeeName' for each record comes from the employeesAdapter where the record's 'EmployeeID' from orders.xml matches to the 'EmployeeID' from employees.xml. 
                    { name: 'EmployeeName', value: 'EmployeeID', values: { source: employeesAdapter.records, value: 'EmployeeID', name: 'EmployeeName' } },
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
                url: '../sampledata/orders.xml',
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };
        let ordersAdapter = new $.jqx.dataAdapter(ordersSource);


        let columns =
            [
                { text: 'Employee Name', datafield: 'EmployeeID', displayfield: 'EmployeeName', columntype: 'dropdownlist', width: 150 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={ordersAdapter} pageable={true}
                    autoheight={true} editable={true} columns={columns}
                    selectionmode={'singlecell'}
                />
                <div id='eventLog' style={{ fontSize: 13, fontFamily: 'Verdana', marginTop: 20 }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
