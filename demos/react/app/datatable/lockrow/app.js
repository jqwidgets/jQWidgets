import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDataTable.on('bindingComplete', () => {
            this.refs.myDataTable.beginUpdate();
            this.refs.myDataTable.lockRow(1);
            this.refs.myDataTable.lockRow(3);
            this.refs.myDataTable.lockRow(5);
            this.refs.myDataTable.endUpdate();
        });
    }
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
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 250 },
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
            ];

        return (
            <JqxDataTable ref='myDataTable'
                width={850} source={dataAdapter} altRows={true}
                pageable={true} sortable={true} editable={true}
                columns={columns} pagerButtonsCount={8}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
