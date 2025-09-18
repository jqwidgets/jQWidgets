import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const source = useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(200, false),
        updaterow: (_rowid: any, _rowdata: any, commit: any) => {
            commit(true);
        }
    }), []);

    const columns = useMemo(() => [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 150 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 150 },
        { text: 'Product', datafield: 'productname', width: 200 },
        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right', cellsformat: 'n2' },
        {
            aggregates: [{
                '<b>Total</b>': (aggregatedValue: number, currentValue: number, _column: any, record: any): number => {
                    const total = currentValue * parseInt(record.quantity, 10);
                    return aggregatedValue + total;
                }
            }],
            cellsalign: 'right', cellsformat: 'c2', datafield: 'price', text: 'Price',
        }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            showstatusbar={true}
            altrows={true}
            showaggregates={true}
            statusbarheight={25}
        />
    );
}

export default App;