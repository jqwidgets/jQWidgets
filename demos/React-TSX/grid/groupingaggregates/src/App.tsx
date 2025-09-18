import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const source = useMemo(() => {
        return {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(50, false)
        };
    }, []);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'First Name', groupable: true, aggregates: ['count'], datafield: 'firstname', width: 100 },
        { text: 'Last Name', groupable: true, aggregates: ['count'], datafield: 'lastname', width: 100 },
        { text: 'Product', groupable: true, columntype: 'dropdownlist', datafield: 'productname', width: 200 },
        { text: 'Quantity', datafield: 'quantity', aggregates: ['sum'], width: 70, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', aggregates: ['sum'], cellsalign: 'right', width: 100, cellsformat: 'c2' },
        {
            aggregates: ['sum'],
            aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                const renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + 'Total' + ': ' + aggregates.sum + '</div>';
                return renderstring;
            },
            cellsalign: 'right',
            cellsformat: 'c2',
            cellsrenderer: (row: number, column: any, value: any, defaultRender: string, rowData: any): string => {
                if (value.toString().indexOf('Sum') >= 0) {
                    return defaultRender.replace('Sum', 'Total');
                }
                return '';
            },
            datafield: 'total',
            text: 'Total'
        }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            columns={columns}
            groupable={true}
            groups={['price']}
            showgroupaggregates={true}
            showstatusbar={true}
            showaggregates={true}
            statusbarheight={25}
            selectionmode={'singlecell'}
        />
    );
}

export default App;