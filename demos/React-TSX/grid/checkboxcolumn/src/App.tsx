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
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, true)
        };

        this.state = {
            columns: [
                { text: 'First Name', editable: false, datafield: 'firstname', width: 120 },
                { text: 'Last Name', editable: false, datafield: 'lastname', width: 120 },
                { text: 'Product', editable: false, datafield: 'productname', width: 180 },
                { text: 'Available', datafield: 'available', threestatecheckbox: true, columntype: 'checkbox', width: 70 },
                { text: 'Quantity', editable: false, datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', editable: false, datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', editable: false, datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns} editable={true} />
        );
    }
}

export default App;