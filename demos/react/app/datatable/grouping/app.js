import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'xml',
                dataFields: [
                    { name: 'SupplierName', type: 'string' },
                    { name: 'Quantity', type: 'number' },
                    { name: 'OrderDate', type: 'date' },
                    { name: 'OrderAddress', type: 'string' },
                    { name: 'Freight', type: 'number' },
                    { name: 'Price', type: 'number' },
                    { name: 'City', type: 'string' },
                    { name: 'ProductName', type: 'string' },
                    { name: 'Address', type: 'string' }
                ],
                url: '../sampledata/orderdetailsextended.xml',
                root: 'DATA',
                record: 'ROW'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Supplier Name', hidden: true, cellsAlign: 'left', align: 'left', dataField: 'SupplierName', width: 280 },
                { text: 'Product Name', cellsAlign: 'left', align: 'left', dataField: 'ProductName', width: 250 },
                { text: 'Quantity', dataField: 'Quantity', cellsformat: 'd', cellsAlign: 'right', align: 'right', width: 80 },
                { text: 'Price', dataField: 'Price', cellsformat: 'c2', align: 'right', cellsAlign: 'right', width: 70 },
                { text: 'Address', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 250 },
                { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
            ];

        let groupsRenderer = (value, rowData, level) => {
            return 'Supplier Name: ' + value;
        };

        return (
            <JqxDataTable
                width={850} source={dataAdapter} altRows={true}
                pageable={true} sortable={true} columns={columns}
                groups={['SupplierName']} groupsRenderer={groupsRenderer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
