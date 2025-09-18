import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const source = useMemo(() => ({
        dataFields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        dataType: 'array',
        localData: generatedata(200, false),
        updateRow(rowid: number, rowdata: any, commit: any) {
            commit(true);
        }
    }), []);

    const columns = useMemo(() => [
        { text: 'First Name', columnType: 'textbox', dataField: 'firstname', width: 90 },
        { text: 'Last Name', dataField: 'lastname', columnType: 'textbox', width: 90 },
        { text: 'Product', dataField: 'productname', width: 170 },
        { text: 'Quantity', dataField: 'quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n2' },
        {
            aggregates: [
                {
                    'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => {
                        const total = currentValue * parseInt(record.quantity, 10);
                        return aggregatedValue + total;
                    }
                }
            ],
            aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
                let renderString = '<div style="margin: 4px; float: right; height: 100%;">';
                renderString += '<strong>Total: </strong>' + aggregates.Total + '</div>';
                return renderString;
            },
            align: 'right',
            cellsAlign: 'right',
            cellsFormat: 'c2',
            dataField: 'price',
            text: 'Price'
        }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme={'material-purple'}
            // @ts-ignore
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            altRows={true}
            pageable={true}
            showAggregates={true}
            pagerButtonsCount={10}
            aggregatesHeight={25}
        />
    );
}

export default App;