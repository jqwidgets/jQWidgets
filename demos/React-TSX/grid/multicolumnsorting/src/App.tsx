import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false)
        };

        this.state = {
            columns: [
                { text: 'Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        this.myGrid.current!.sortby('firstname', 'ascending');
        this.myGrid.current!.sortby('lastname', 'ascending');
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'} ref={this.myGrid}
                // @ts-ignore
                width={'100%'} source={this.state.source} sortable={true} 
                columnsresize={true} columns={this.state.columns} sortmode={'many'} />
        );
    }
}

export default App;