import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
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
            localdata: generatedata(50, false),
            updaterow: (rowid: any, rowdata: any): any => {
                // synchronize with the server - send update command   
            }
        };

        this.state = {
            columns: [
                { text: 'First Name', groupable: true, aggregates: ['count'], datafield: 'firstname', width: 100 },
                { text: 'Last Name', groupable: true, aggregates: ['count'], datafield: 'lastname', width: 100 },
                { text: 'Product', groupable: true, columntype: 'dropdownlist', datafield: 'productname', width: 200 },
                { text: 'Quantity', datafield: 'quantity', aggregates: ['sum'], width: 70, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', aggregates: ['sum'], cellsalign: 'right', width: 100, cellsformat: 'c2' },
                {
                    aggregates: ['sum'], 
                    aggregatesrenderer: (aggregates: any, column: any, element: any) => {
                        const renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + 'Total' + ': ' + aggregates.sum + '</div>';
                        return renderstring;
                    },
                    cellsalign: 'right', cellsformat: 'c2', 
                    cellsrenderer: (row, column, value, defaultRender, rowData) => {
                        if (value.toString().indexOf('Sum') >= 0) {
                            return defaultRender!.replace('Sum', 'Total');
                        }
                        return '';
                    },
                    datafield: 'total', text: 'Total'                    
                }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} groupable={true} groups={['price']}
                showaggregates={true} showgroupaggregates={true} showstatusbar={true} statusbarheight={25}
                columns={this.state.columns} selectionmode={'singlecell'} />
        );
    }
}

export default App;