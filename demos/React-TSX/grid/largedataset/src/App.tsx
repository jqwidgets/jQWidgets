import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = useMemo(() => ({
        datafields: [
            { name: 'id', type: 'number' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(30000, false)
    }), []);

    const columns: IGridProps['columns'] = useMemo(() => [
        { text: 'Id', datafield: 'id', width: 50 },
        { text: 'First Name', datafield: 'firstname', width: 130 },
        { text: 'Last Name', datafield: 'lastname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 80, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid 
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
        />
    );
};

export default App;