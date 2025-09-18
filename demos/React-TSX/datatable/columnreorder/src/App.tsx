import * as React from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const columns = React.useMemo(() => [
        { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 200 },
        { text: 'Name', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 200 },
        { text: 'Quantity', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 80 },
        { text: 'Price', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 70 },
        { text: 'Address', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 120 },
        { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ], []);

    const source = React.useMemo(() => {
        const src: any = {
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
        };
        return new jqx.dataAdapter(src);
    }, []);

    return (
        <JqxDataTable
            theme="material-purple"
            // @ts-ignore
            width="100%"
            height={400}
            source={source}
            columns={columns}
            altRows={true}
            pageable={true}
            columnsReorder={true}
        />
    );
}

export default App;