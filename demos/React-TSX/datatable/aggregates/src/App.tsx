import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source = React.useMemo(() => ({
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

    const columns = React.useMemo(() => [
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 300 },
        { text: 'Product', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 300 },
        { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd2', aggregates: ['avg', 'min', 'max'], cellsAlign: 'center', align: 'center', width: 120 },
        { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', aggregates: ['sum', 'min', 'max'] }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            altRows={true}
            pageable={true}
            editable={true}
            columnsResize={true}
            showAggregates={true}
            autoRowHeight={true}
            aggregatesHeight={70}
        />
    );
};

export default App;