import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);

        const source: any = {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'range', map: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500)
        };

        this.state = {
            columns: [
                { text: 'Name', columntype: 'textbox', filtercondition: 'STARTS_WITH', datafield: 'name', width: '30%' },
                { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
                { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    showfilterrow={true} filterable={true} selectionmode={'multiplecellsadvanced'} />

                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} onClick={this.btnOnClick} width={100}>Remove Filter</JqxButton>
                </div>
            </div>
        );
    }

    private btnOnClick() {
        this.myGrid.current!.clearfilters();
    };
}

export default App;