import * as React from 'react';

import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const beginEdit = useRef<HTMLDivElement>(null);
    const endEdit = useRef<HTMLDivElement>(null);

    const source = useMemo(
        () => ({
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        }),
        []
    );

    const columns = useMemo<IGridProps['columns']>(
        () => [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
            { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
            {
                align: 'right',
                cellsalign: 'right',
                cellsformat: 'd',
                columntype: 'datetimeinput',
                datafield: 'date',
                text: 'Ship Date',
                validation: (cell: any, value: any): any => {
                    if (value === '') return true;
                    const year = value.getFullYear();
                    if (year >= 2017) {
                        return { result: false, message: 'Ship Date should be before 1/1/2017' };
                    }
                    return true;
                },
                width: 110
            },
            {
                align: 'right',
                cellsalign: 'right',
                columntype: 'numberinput',
                createeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                },
                datafield: 'quantity',
                text: 'Quantity',
                validation: (cell: any, value: number): any => {
                    if (value < 0 || value > 150) {
                        return { result: false, message: 'Quantity should be in the 0-150 interval' };
                    }
                    return true;
                },
                width: 70
            },
            {
                align: 'right',
                cellsalign: 'right',
                cellsformat: 'c2',
                columntype: 'numberinput',
                createeditor: (row: number, cellvalue: any, editor: any): void => {
                    editor.jqxNumberInput({ digits: 3 });
                },
                datafield: 'price',
                text: 'Price',
                validation: (cell: any, value: number): any => {
                    if (value < 0 || value > 15) {
                        return { result: false, message: 'Price should be in the 0-15 interval' };
                    }
                    return true;
                }
            }
        ],
        []
    );

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const cellBeginEditEvent = useCallback((event: any) => {
        const args = event.args;
        if (beginEdit.current) {
            beginEdit.current.innerHTML =
                'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
        }
    }, []);

    const cellEndEditEvent = useCallback((event: any) => {
        const args = event.args;
        if (endEdit.current) {
            endEdit.current.innerHTML =
                'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                // @ts-ignore
                width="100%"
                source={dataAdapter}
                columns={columns}
                editable={true}
                enabletooltips={true}
                selectionmode="multiplecellsadvanced"
                onCellbeginedit={cellBeginEditEvent}
                onCellendedit={cellEndEditEvent}
            />

            <div style={{ fontSize: '12px', fontFamily: 'Verdana', marginTop: '30px' }}>
                <div ref={beginEdit} />
                <div ref={endEdit} style={{ marginTop: '10px' }} />
            </div>
        </div>
    );
};

export default App;