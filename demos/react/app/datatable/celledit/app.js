import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    componentDidMount() {
        let log = document.getElementById('log');

        this.refs.myDataTable.on('cellBeginEdit', (event) => {
            let args = event.args;
            // row key
            let rowKey = args.key;
            // row's index.
            let rowIndex = args.index;
            // row's data.
            let rowData = args.row;
            // row's index in the data source.
            let rowBoundIndex = args.boundIndex;
            // column's data field.
            let columnDataField = args.dataField;
            // column's display field.
            let columnDisplayField = args.displayField;
            // cell's value.
            let value = args.value;
            if (columnDataField == 'ShippedDate') {
                value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
            }
            log.innerHTML = 'cellBeginEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + ' <br />' + log.innerHTML;
        });
        // Cell End Edit
        this.refs.myDataTable.on('cellEndEdit', (event) => {
            let args = event.args;
            // row key
            let rowKey = args.key;
            // row's index.
            let rowIndex = args.index;
            // row's data.
            let rowData = args.row;
            // row's index in the data source.
            let rowBoundIndex = args.boundIndex;
            // column's data field.
            let columnDataField = args.dataField;
            // column's display field.
            let columnDisplayField = args.displayField;
            // cell's value.
            let value = args.value;
            if (columnDataField == 'ShippedDate') {
                value = value.getDate() + '/' + (parseInt(value.getMonth()) + 1) + '/' + value.getFullYear();
            }
            log.innerHTML = '<br/>cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + log.innerHTML;
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
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 250 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
            ];

        let editSettings = { saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true, saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true };

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={850} source={dataAdapter} altRows={true}
                    pageable={true} editable={true} columns={columns}
                    editSettings={editSettings} pagerButtonsCount={8}
                />
                <div style={{ fontSize: 13, fontFamily: 'Verdana', width: 800, marginTop: 20 }}>
                    <h4>Event Log</h4>
                    <div style={{ maxHeight: 300, overflow: 'auto' }} id='log' />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
