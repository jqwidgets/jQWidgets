import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const data = useMemo(() => {
        const source = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata()
        };
        return new jqx.dataAdapter(source);
    }, []);

    const columns = useMemo(() => [
        { text: 'Name', dataField: 'firstname', width: 200 },
        { text: 'Last Name', dataField: 'lastname', width: 200 },
        { text: 'Product', editable: false, dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
    ], []);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={data}
            columns={columns}
            pageable={true}
            columnsResize={true}
            pagerButtonsCount={10}
        />
    );
}

export default App;