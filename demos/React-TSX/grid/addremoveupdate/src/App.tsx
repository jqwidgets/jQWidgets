import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const source = useMemo(() => ({
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(10, false)
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ], []);

    const everpresentrowactions = 'add update remove reset';

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            filterable={true}
            editable={true}
            showeverpresentrow={true}
            everpresentrowposition="top"
            columns={columns}
            selectionmode="multiplecellsadvanced"
            everpresentrowactions={everpresentrowactions}
        />
    );
}

export default App;