import * as React from 'react';
import { useRef, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const cellBeginEditLog = useRef<HTMLDivElement>(null);
    const cellEndEditLog = useRef<HTMLDivElement>(null);
    const rowValuesRef = useRef<string>('');

    const source = useMemo(() => ({
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
        localdata: generatedata(200, false)
    }), []);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
        {
            align: 'right',
            cellsalign: 'right',
            cellsformat: 'd',
            columntype: 'datetimeinput',
            datafield: 'date',
            text: 'Ship Date',
            validation: (cell: any, value: any) => {
                if (value === '') {
                    return true;
                }
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
            createeditor: (row: number, cellvalue: any, editor: any) => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            },
            datafield: 'quantity',
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
            align: 'right',
            cellsalign: 'right',
            cellsformat: 'c2',
            columntype: 'numberinput',
            createeditor: (row: number, cellvalue: any, editor: any) => {
                editor.jqxNumberInput({ digits: 3 });
            },
            datafield: 'price',
            text: 'Price',
            validation: (cell: any, value: number) => {
                if (value < 0 || value > 15) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            }
        }
    ], []);

    const [gridState] = useState<{ source: any; columns: IGridProps['columns'] }>(() => ({
        source: new jqx.dataAdapter(source),
        columns
    }));

    const myGridOnCellBeginEdit = React.useCallback((event: any) => {
        const args = event.args;
        if (args.datafield === 'firstname') {
            rowValuesRef.current = '';
        }
        rowValuesRef.current += args.value?.toString() + '    ';
        if (args.datafield === 'price') {
            if (cellBeginEditLog.current) {
                cellBeginEditLog.current.innerHTML = 'Begin Row Edit: ' + (1 + args.rowindex) + ', Data: ' + rowValuesRef.current;
            }
        }
    }, []);

    const myGridOnCellEndEdit = React.useCallback((event: any) => {
        const args = event.args;
        if (args.datafield === 'firstname') {
            rowValuesRef.current = '';
        }
        rowValuesRef.current += args.value?.toString() + '    ';
        if (args.datafield === 'price') {
            if (cellEndEditLog.current) {
                cellEndEditLog.current.innerHTML = 'End Row Edit: ' + (1 + args.rowindex) + ', Data: ' + rowValuesRef.current;
            }
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                onCellbeginedit={myGridOnCellBeginEdit}
                onCellendedit={myGridOnCellEndEdit}
                // @ts-ignore
                width={'100%'}
                source={gridState.source}
                columns={gridState.columns}
                editable={true}
                editmode={'selectedrow'}
                selectionmode={'singlerow'}
            />
            <div style={{ fontSize: '12px', fontFamily: 'Verdana', marginTop: '30px' }}>
                <div ref={cellBeginEditLog} />
                <div ref={cellEndEditLog} style={{ marginTop: '30px' }} />
            </div>
        </div>
    );
}

export default App;