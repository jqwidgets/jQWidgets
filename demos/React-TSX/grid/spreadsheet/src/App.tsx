import React, { useRef, useCallback, useMemo } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const numberrenderer = useCallback((row: number, column: any, value: any): string => {
        return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
    }, []);

    const { columns, source } = useMemo(() => {
        const columns: IGridProps['columns'] = [];
        const datafields: any[] = [];

        for (let i = 0; i < 26; i++) {
            const text = String.fromCharCode(65 + i);
            if (i === 0) {
                const cssclass = 'jqx-widget-header';
                columns.push({ pinned: true, exportable: false, text: '', columntype: 'number', cellclassname: cssclass, cellsrenderer: numberrenderer });
            }
            datafields.push({ name: text });
            columns.push({ text, datafield: text, width: 60, align: 'center' });
        }

        const source = new jqx.dataAdapter({
            datafields,
            totalrecords: 100,
            unboundmode: true
        });

        return { columns, source };
    }, [numberrenderer]);

    const myBtnOnClick = useCallback(() => {
        myGrid.current!.exportdata('xls', 'jqxGrid', false);
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={source}
                columns={columns}
                columnsresize={true}
                editable={true}
                selectionmode={'multiplecellsadvanced'}
            />
            <div style={{ marginTop: '20px', float: 'left' }}>
                <JqxButton theme={'material-purple'} onClick={myBtnOnClick}>Export to Excel</JqxButton>
            </div>
        </div>
    );
};

export default App;