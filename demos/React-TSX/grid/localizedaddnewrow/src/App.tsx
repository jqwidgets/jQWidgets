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

    const columns = useMemo(() => [
        {
            columntype: 'textbox',
            datafield: 'name',
            filtertype: 'input',
            text: 'Name',
            validateeverpresentrowwidgetvalue: (displayField: string, value: string, rowData: any): any => {
                if (value.length < 5) {
                    return { message: 'Entered value should be more than 5 characters', result: false };
                }
                return true;
            },
            width: 215
        },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ], []);

    const localization = useMemo(() => ({
        addrowstring: 'Apply',
        deleterowstring: 'Delete',
        everpresentrowplaceholder: 'Type: ',
        resetrowstring: 'Clear',
        updaterowstring: 'Update'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            filterable={true}
            showeverpresentrow={true}
            editable={true}
            everpresentrowposition={'top'}
            localization={localization}
            selectionmode={'multiplecellsadvanced'}
        />
    );
}

export default App;