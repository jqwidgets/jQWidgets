import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.topBtnOnChecked = this.topBtnOnChecked.bind(this);
        this.bottomBtnOnChecked = this.bottomBtnOnChecked.bind(this);

        const source: any = {
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
                {
                    columntype: 'textbox', datafield: 'name', filtertype: 'input',  
                    initeverpresentrowwidget: (datafield: string, htmlElement: any): void => {
                        const input = htmlElement.find('input');
                        input.attr('readonly', true);
                        input.attr('disabled', true);
                        htmlElement.addClass('jqx-fill-state-disabled');
                    },
                    text: 'Name', width: 215
                },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
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
                    filterable={true} showeverpresentrow={true} editable={true}
                    everpresentrowposition={'top'} selectionmode={'multiplecellsadvanced'} />
                <br />
                <JqxRadioButton theme={'material-purple'} onChecked={this.topBtnOnChecked} checked={true}>Add New Row to Top</JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={this.bottomBtnOnChecked}>Add New Row to Bottom</JqxRadioButton>
            </div>
        );
    }

    private topBtnOnChecked(): void {
        this.myGrid.current!.setOptions({ everpresentrowactions: 'add reset' });
    };

    private bottomBtnOnChecked(): void {
        this.myGrid.current!.setOptions({ everpresentrowactions: 'addBottom reset' });
    };
}

export default App;