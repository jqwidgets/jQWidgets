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
        { text: 'Supplier Name', hidden: true, cellsAlign: 'left', align: 'left', dataField: 'SupplierName', width: 280 },
        { text: 'Product Name', cellsAlign: 'left', align: 'left', dataField: 'ProductName', width: 250 },
        { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'right', align: 'right', width: 80 },
        { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'right', cellsAlign: 'right', width: 70 },
        { text: 'Address', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 250 },
        { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ], []);

    const groups = React.useMemo(() => ['SupplierName'], []);

    const groupsRenderer = React.useCallback((value: string, rowData: any, level: any): string => {
        return 'Supplier Name: ' + value;
    }, []);

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
            groups={groups}
            groupsRenderer={groupsRenderer}
        />
    );
};

export default App;