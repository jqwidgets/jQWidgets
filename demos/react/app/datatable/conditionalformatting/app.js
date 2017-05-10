import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'xml',
                dataFields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: '../sampledata/products.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let cellClass = (row, dataField, cellText, rowData) => {
            let cellValue = rowData[dataField];
            switch (dataField) {
                case 'QuantityPerUnit':
                    if (cellValue < 11) {
                        return 'min';
                    }
                    if (cellValue < 14) {
                        return 'minavg';
                    }
                    if (cellValue < 50) {
                        return 'avg';
                    }
                    return 'max';
                case 'UnitPrice':
                    if (cellValue < 20) {
                        return 'min';
                    }
                    if (cellValue < 30) {
                        return 'minavg';
                    }
                    if (cellValue < 50) {
                        return 'avg';
                    }
                    return 'max';
                case 'UnitsInStock':
                    if (cellValue < 20) {
                        return 'min';
                    }
                    if (cellValue < 30) {
                        return 'minavg';
                    }
                    if (cellValue < 50) {
                        return 'avg';
                    }
                    return 'max';
            }
        }

        let columns =
            [
                { text: 'Product Name', dataField: 'ProductName', width: 200 },
                { text: 'Quantity per Unit', dataField: 'QuantityPerUnit', cellClassName: cellClass, cellsAlign: 'right', align: 'right', width: 200 },
                { text: 'Unit Price', dataField: 'UnitPrice', align: 'right', cellClassName: cellClass, cellsAlign: 'right', cellsformat: 'c2', width: 200 },
                { text: 'Units In Stock', dataField: 'UnitsInStock', cellsAlign: 'right', width: 250, align: 'right', cellClassName: cellClass }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} altRows={true}
                pageable={true} sortable={true} enableHover={false}
                columns={columns} selectionMode={'none'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));