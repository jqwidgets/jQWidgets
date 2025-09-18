import * as React from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const source = React.useMemo(() => ({
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(500, false)
    }), []);

    const columns = React.useMemo(() => [
        { text: 'Name', columntype: 'textbox', datafield: 'name', width: '20%' },
        { text: 'Product', datafield: 'productname', width: '35%' },
        { text: 'Ship Date', datafield: 'date', filtertype: 'date', width: '30%', cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', width: '15%', cellsalign: 'right' }
    ], []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            height="90%"
            source={dataAdapter}
            columns={columns}
            showfilterrow={true}
            filterable={true}
            selectionmode="multiplecellsadvanced"
        />
    );
};

export default App;