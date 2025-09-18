import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const cellBeginEditLog = useRef<HTMLDivElement>(null);
    const cellEndEditLog = useRef<HTMLDivElement>(null);

    const cellbeginedit = useCallback((row: number, datafield: string, columntype: any, value: any): boolean => {
        if (row === 0 || row === 2 || row === 5) return false;
        return true;
    }, []);

    const cellsrenderer = useCallback((row: number, column: any, value: any, defaultHtml: string): string => {
        if (row === 0 || row === 2 || row === 5) {
            return defaultHtml.substring(0, 61) + "; color: #999" + defaultHtml.substring(61);
        }
        return defaultHtml;
    }, []);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80, cellbeginedit, cellsrenderer },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80, cellbeginedit, cellsrenderer },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 190, cellbeginedit, cellsrenderer },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellbeginedit },
        {
            cellbeginedit,
            cellsalign: 'right',
            cellsformat: 'd',
            cellsrenderer,
            columntype: 'datetimeinput',
            datafield: 'date',
            text: 'Ship Date',
            validation: (cell: any, value: any) => {
                const year = value.getFullYear();
                if (year >= 2015) {
                    return { result: false, message: 'Ship Date should be before 1/1/2015' };
                }
                return true;
            },
            width: 110,
        },
        {
            cellbeginedit,
            cellsalign: 'right',
            cellsrenderer,
            columntype: 'numberinput',
            datafield: 'quantity',
            initeditor: (row: number, cellvalue: any, editor: any) => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            },
            text: 'Quantity',
            validation: (cell: any, value: number) => {
                if (value < 0 || value > 150) {
                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                }
                return true;
            },
            width: 70
        },
        {
            cellbeginedit,
            cellsalign: 'right',
            cellsformat: 'c2',
            cellsrenderer,
            columntype: 'numberinput',
            datafield: 'price',
            initeditor: (row: number, cellvalue: any, editor: any) => {
                editor.jqxNumberInput({ digits: 3 });
            },
            text: 'Price',
            validation: (cell: any, value: number) => {
                if (value < 0 || value > 15) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            }
        }
    ], [cellbeginedit, cellsrenderer]);

    const source = useMemo(() => {
        return {
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
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any, commit: any) => {
                commit(true);
            }
        };
    }, []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const onCellBeginEdit = useCallback((event: any) => {
        const args = event.args;
        if (cellBeginEditLog.current) {
            cellBeginEditLog.current.innerHTML =
                'Event Type: cellbeginedit, Column: ' + args.datafield +
                ', Row: ' + (1 + args.rowindex) +
                ', Value: ' + args.value;
        }
    }, []);

    const onCellEndEdit = useCallback((event: any) => {
        const args = event.args;
        if (cellEndEditLog.current) {
            cellEndEditLog.current.innerHTML =
                'Event Type: cellendedit, Column: ' + args.datafield +
                ', Row: ' + (1 + args.rowindex) +
                ', Value: ' + args.value;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                onCellbeginedit={onCellBeginEdit}
                onCellendedit={onCellEndEdit}
                width="100%"
                // @ts-ignore
                source={dataAdapter}
                columns={columns}
                editable={true}
                selectionmode="singlecell"
            />
            <div style={{ marginTop: '30px' }}>
                <div ref={cellBeginEditLog} />
                <div ref={cellEndEditLog} style={{ marginTop: '10px' }} />
            </div>
        </div>
    );
}

export default App;