import * as React from 'react';
import { useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const { columns, source } = useMemo(() => {
        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any): any => {}
        };

        const columns: IGridProps['columns'] = [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 170 },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 170 },
            {
                aggregates: ['count',
                    {
                        'Cappuccino Items':
                            (aggregatedValue: number, currentValue: string): number => {
                                if (currentValue === 'Cappuccino') {
                                    return aggregatedValue + 1;
                                }
                                return aggregatedValue;
                            }
                    }
                ],
                datafield: 'productname', text: 'Product', width: 170
            },
            {
                aggregates: [{
                    'In Stock':
                        (aggregatedValue: number, currentValue: string): number => {
                            if (currentValue) {
                                return aggregatedValue + 1;
                            }
                            return aggregatedValue;
                        }
                },
                {
                    'Not In Stock':
                        (aggregatedValue: number, currentValue: string): number => {
                            if (!currentValue) {
                                return aggregatedValue + 1;
                            }
                            return aggregatedValue;
                        }
                }],
                columntype: 'checkbox', datafield: 'available', text: 'In Stock', width: 125
            },
            {
                aggregates: ['min', 'max'],
                aggregatesrenderer: (aggregates: any): string => {
                    let renderstring = '';
                    for (const obj of Object.keys(aggregates)) {
                        const name = obj === 'min' ? 'Min' : 'Max';
                        const value = aggregates[obj];
                        renderstring += '<div style="position: relative; margin: 4px; overflow: hidden;">' + name + ': ' + value + '</div>';
                    }
                    return renderstring;
                },
                cellsalign: 'right', cellsformat: 'n2', datafield: 'quantity', text: 'Quantity', width: 85,
            },
            { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'] }
        ];

        return {
            columns,
            source: new jqx.dataAdapter(source)
        };
    }, []);

    return (
        <JqxGrid
            theme={'material-purple'}
            width={'100%'}
            source={source}
            editable={true}
            showstatusbar={true}
            statusbarheight={50}
            showaggregates={true}
            columns={columns}
            selectionmode={'singlecell'}
        />
    );
}

export default App;