import * as React from 'react';
import { useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const source = useMemo(() => ({
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
        dataType: 'xml',
        record: 'ROW',
        root: 'DATA',
        url: 'orderdetailsextended.xml'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columnGroups = useMemo(() => [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' },
        { text: 'Order Details', parentGroup: 'ProductDetails', align: 'center', name: 'OrderDetails' },
        { text: 'Location', align: 'center', name: 'Location' }
    ], []);

    const columns = useMemo(() => [
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 200 },
        { text: 'Name', columnGroup: 'ProductDetails', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 200 },
        { text: 'Quantity', columnGroup: 'ProductDetails', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 80 },
        { text: 'Freight', columnGroup: 'OrderDetails', dataField: 'Freight', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 100 },
        { text: 'Order Date', columnGroup: 'OrderDetails', cellsAlign: 'center', align: 'center', cellsFormat: 'd', dataField: 'OrderDate', width: 100 },
        { text: 'Order Address', columnGroup: 'OrderDetails', cellsAlign: 'center', align: 'center', dataField: 'OrderAddress', width: 100 },
        { text: 'Price', columnGroup: 'ProductDetails', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 70 },
        { text: 'Address', columnGroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 120 },
        { text: 'City', columnGroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'City', width: 80 }
    ], []);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            height={400}
            source={dataAdapter}
            columns={columns}
            altRows
            pageable
            columnsResize
            columnGroups={columnGroups}
        />
    );
}

export default App;