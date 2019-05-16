import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(10, false)
        };

        this.state = {
            columns: [
                { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
            ],
            everpresentrowactions: 'add update remove reset',
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} 
                // @ts-ignore
                width={'100%'} source={this.state.source} filterable={true} editable={true}
                showeverpresentrow={true} everpresentrowposition={'top'} columns={this.state.columns}
                selectionmode={'multiplecellsadvanced'} everpresentrowactions={this.state.everpresentrowactions}/>
        );
    }
}

export default App;