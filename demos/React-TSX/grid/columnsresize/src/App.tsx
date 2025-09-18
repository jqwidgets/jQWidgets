import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const eventLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(10, false)
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 100 },
        { text: 'Last Name', datafield: 'lastname', width: 100 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', minwidth: 100, resizable: false, width: 'auto', cellsalign: 'right', cellsformat: 'c2' }
    ], []);

    const myGridOnColumnResized = useCallback((event: any) => {
        const column = event.args.columntext;
        const newwidth = event.args.newwidth;
        const oldwidth = event.args.oldwidth;
        if (eventLog.current) {
            eventLog.current.innerHTML = `Column: ${column}, New Width: ${newwidth}, Old Width ${oldwidth}`;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                onColumnresized={myGridOnColumnResized}
                // @ts-ignore
                width="100%"
                source={dataAdapter}
                columns={columns}
                columnsresize={true}
            />
            <div ref={eventLog} style={{ marginTop: '30px' }} />
        </div>
    );
};

export default App;