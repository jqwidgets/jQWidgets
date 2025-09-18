import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const eventLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'name' },
            { name: 'type' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat' },
            { name: 'protein' }
        ],
        datatype: 'json',
        id: 'id',
        url: 'beverages.txt'
    }), []);

    const columns = useMemo(() => [
        { text: 'Name', datafield: 'name', width: 200 },
        { text: 'Beverage Type', datafield: 'type', width: 200 },
        { text: 'Calories', datafield: 'calories', width: 100 },
        { text: 'Total Fat', datafield: 'totalfat' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const handleColumnReordered = useCallback((event: any) => {
        const column = event.args.columntext;
        const newindex = event.args.newindex;
        const oldindex = event.args.oldindex;
        if (eventLog.current) {
            eventLog.current.innerHTML = `Column: ${column}, New Index: ${newindex}, Old Index: ${oldindex}`;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                onColumnreordered={handleColumnReordered}
                // @ts-ignore
                width="100%"
                source={dataAdapter}
                columns={columns}
                columnsresize={true}
                columnsreorder={true}
            />
            <div ref={eventLog} style={{ marginTop: '30px' }} />
        </div>
    );
};

export default App;