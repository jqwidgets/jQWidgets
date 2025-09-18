import * as React from 'react';
import { useRef, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const myGrid = useRef<JqxGrid>(null);

    const dataAdapter = useMemo(() => {
        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };
        return new jqx.dataAdapter(source);
    }, []);

    const columns = useMemo(() => [
        { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
        { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
        { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
        { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
    ], []);

    const clearFiltering = () => {
        myGrid.current?.clearfilters();
    };

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                filterable={true}
                selectionmode={'multiplecellsextended'}
                showfilterrow={true}
            />
            <br />
            <JqxButton theme={'material-purple'} onClick={clearFiltering} width={100} height={20}>
                Remove Filter
            </JqxButton>
        </div>
    );
}

export default App;