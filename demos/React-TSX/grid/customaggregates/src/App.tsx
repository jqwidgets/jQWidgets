import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any, commit: any): void => {
                // synchronize with the server - send update command   
                commit(true);
            }
        };

        this.state = {
            columns: [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 150 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 150 },
                { text: 'Product', datafield: 'productname', width: 200 },
                { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right', cellsformat: 'n2' },
                {
                    aggregates: [{
                        '<b>Total</b>': (aggregatedValue: number, currentValue: number, column: any, record: any): number => {
                            const total = currentValue * parseInt(record.quantity, 10);
                            return aggregatedValue + total;
                        }
                    }],
                    cellsalign: 'right', cellsformat: 'c2', datafield: 'price', text: 'Price',
                }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                showstatusbar={true} altrows={true} showaggregates={true} statusbarheight={25} />
        );
    }
}

export default App;