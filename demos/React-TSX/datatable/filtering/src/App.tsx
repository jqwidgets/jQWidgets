import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source: any = React.useMemo(() => ({
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
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 250 },
        { text: 'Name', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 250 },
        { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 120 },
        { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 120 },
        { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            pageable={true}
            altRows={true}
            filterable={true}
        />
    );
};

export default App;