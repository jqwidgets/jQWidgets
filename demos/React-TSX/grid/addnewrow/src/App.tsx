import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myRadioButton = React.createRef<JqxRadioButton>();

    constructor(props: {}) {
        super(props);
        this.btnTopOnChecked = this.btnTopOnChecked.bind(this);
        this.btnBottomOnChecked = this.btnBottomOnChecked.bind(this);
       
        this.state = {
            columns: [
                { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
            ],
            everpresentrowactions: 'add reset'
        }
    }

    public componentDidMount() {
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
            localdata: generatedata(20, false)
        };

        const dataAdapter = new jqx.dataAdapter(source);

        this.myGrid.current!.setOptions({ source: dataAdapter });
        this.myRadioButton.current!.setOptions({ checked: true });
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} filterable={true} editable={true} showeverpresentrow={true} 
                    everpresentrowposition={'top'} everpresentrowactions={this.state.everpresentrowactions} 
                    columns={this.state.columns} selectionmode={'multiplecellsadvanced'} />
                <br />
                <JqxRadioButton theme={'material-purple'} ref={this.myRadioButton} onChecked={this.btnTopOnChecked}>Add New Row to Top</JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={this.btnBottomOnChecked}>Add New Row to Bottom</JqxRadioButton>
            </div>
        );
    }

    private btnTopOnChecked(): void {
        this.setState({
            everpresentrowactions: 'add reset'
        });
    }

    private btnBottomOnChecked(): void {
        this.setState({
            everpresentrowactions: 'addBottom reset'
        });
    }
}

export default App;