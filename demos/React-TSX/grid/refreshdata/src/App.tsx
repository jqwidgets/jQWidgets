import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    private source: any = {
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(500, false)
    };

    constructor(props: {}) {
        super(props);
        this.refreshBtnOnClick = this.refreshBtnOnClick.bind(this);
        this.clearBtnOnClick = this.clearBtnOnClick.bind(this);

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 130 },
                { text: 'Last Name', datafield: 'lastname', width: 130 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(this.source)
        }
    }

    public render() {
        const style = { display: 'inline-block' }
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} height={300} source={this.state.source} columns={this.state.columns}  />

                <div style={{ marginTop: '10px' }}>
                    <JqxButton theme={'material-purple'} style={style} onClick={this.refreshBtnOnClick} width={100}>Refresh Data</JqxButton>
                    <JqxButton theme={'material-purple'} style={style} onClick={this.clearBtnOnClick} width={50}>Clear</JqxButton>
                </div>
            </div>
        );
    }

    private refreshBtnOnClick(): void {
        this.source.localdata = generatedata(500, false);
        // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
        this.myGrid.current!.updatebounddata('cells');
    }

    private clearBtnOnClick(): void {
        this.myGrid.current!.clear();
    }
}

export default App;