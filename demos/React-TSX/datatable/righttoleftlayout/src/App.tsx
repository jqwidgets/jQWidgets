import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const source = useMemo(() => {
        return {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(200, false),
        };
    }, []);

    const columns = useMemo(() => [
        { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
        { text: 'Last Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
        { text: 'Product', editable: false, dataField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
        { text: 'Unit Price', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
        { text: 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsFormat: 'c2' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            altRows={true}
            pageable={true}
            sortable={true}
            rtl={true}
        />
    );
}

export default App;