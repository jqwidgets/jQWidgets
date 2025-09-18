import * as React from 'react';

import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        dataType: 'array',
        localData: generatedata(200, false)
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Name', dataField: 'firstname', width: 150 },
        { text: 'Last Name', dataField: 'lastname', width: 150 },
        { text: 'Product', editable: false, dataField: 'productname', width: 250 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            pageable={true}
            altRows={true}
            pagerMode={'advanced'}
        />
    );
};

export default App;