import * as React from 'react';
import { useMemo } from 'react';

import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const { columns, source } = useMemo(() => {
        const source: any = {
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
            updaterow: (rowid: any, rowdata: any, commit: any): void => {
                commit(true);
            }
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        const columns: IGridProps['columns'] = [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
            { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
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
                    if (value < 0 || value > 1500) {
                        return { result: false, message: 'Quantity should be in the 0-150 interval' };
                    }
                    return true;
                },
                width: 100
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
                    if (value < 0 || value > 1500) {
                        return { result: false, message: 'Price should be in the 0-15 interval' };
                    }
                    return true;
                }
            },
            {
                cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
                    const total = parseFloat(rowdata.price) * parseFloat(rowdata.quantity);
                    return '<div style="margin: 4px;" class="jqx-right-align">' + dataAdapter.formatNumber(total, 'c2') + '</div>';
                },
                datafield: 'total',
                editable: false,
                text: 'Total'
            }
        ];

        return { columns, source: dataAdapter };
    }, []);

    return (
        <JqxGrid
            theme="material-purple"
            //@ts-ignore
            width="100%"
            source={source}
            columns={columns}
            editable={true}
            selectionmode="multiplecellsadvanced"
        />
    );
};

export default App;