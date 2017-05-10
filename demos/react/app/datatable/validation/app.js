import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataFields: [
                    { name: 'OrderID', type: 'int' },
                    { name: 'Freight', type: 'float' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                dataType: 'xml',
                id: 'OrderID',
                url: '../sampledata/orderdetails.xml',
                addRow: (rowID, rowData, position, commit) => {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                },
                updateRow: (rowID, rowData, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                deleteRow: (rowID, commit) => {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 100 },
                {
                    text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 100,
                    validation: (cell, value) => {
                        if (value > 1000 || value < 0) return { message: 'Freight should be in the 0-1000 interval', result: false };
                        return true;
                    }
                },
                {
                    text: 'Ship Country', dataField: 'ShipCountry', width: 150,
                    validation: (cell, value) => {
                        if (value.length < 5) return { message: 'Ship Country should be minimum 5 characters', result: false };
                        return true;
                    }
                },
                {
                    text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy',
                    validation: (cell, value) => {
                        let date = new Date(value);
                        if (date.getFullYear() > 2014 || date.getFullYear() < 1990) {
                            return { message: 'Shipped Date should be in the 1990 - 2014 interval', result: false };
                        }
                        return true;
                    }
                }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} altRows={true}
                pageable={true} sortable={true} columns={columns}
                pagerButtonsCount={8} editable={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
