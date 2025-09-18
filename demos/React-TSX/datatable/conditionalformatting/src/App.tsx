import * as React from 'react';
import './App.css';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source: any = React.useMemo(() => ({
        dataFields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        dataType: 'xml',
        id: 'ProductID',
        record: 'Product',
        root: 'Products',
        url: 'products.xml'
    }), []);

    const cellClass = React.useCallback((row: any, dataField: any, cellText: any, rowData: any): string => {
        const cellValue = rowData[dataField];
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
        return '';
    }, []);

    const columns = React.useMemo(() => [
        { text: 'Product Name', dataField: 'ProductName', width: 200 },
        { text: 'Quantity per Unit', dataField: 'QuantityPerUnit', cellClassName: cellClass, cellsAlign: 'right', align: 'right', width: 200 },
        { text: 'Unit Price', dataField: 'UnitPrice', align: 'right', cellClassName: cellClass, cellsAlign: 'right', cellsFormat: 'c2', width: 200 },
        { text: 'Units In Stock', dataField: 'UnitsInStock', cellsAlign: 'right', width: 250, align: 'right', cellClassName: cellClass }
    ], [cellClass]);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            altRows={true}
            pageable={true}
            sortable={true}
            enableHover={false}
            selectionMode="none"
        />
    );
};

export default App;