import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private columns: IGridProps['columns'] = [
        { text: 'First Name', datafield: 'firstname', width: 200, cellsalign: 'center', align: 'center' },
        { text: 'Last Name', datafield: 'lastname', width: 200, cellsalign: 'center', align: 'center' },
        { text: 'Product', datafield: 'productname', width: 180, cellsalign: 'center', align: 'center' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'center', align: 'center' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'center', align: 'center', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'center', align: 'center', cellsformat: 'c2' }
    ];

    constructor(props: {}) {
        super(props);
        this.setAlignment = this.setAlignment.bind(this);
        this.leftBtnOnChecked = this.leftBtnOnChecked.bind(this);
        this.centerBtnOnChecked = this.centerBtnOnChecked.bind(this);
        this.rightBtnOnChecked = this.rightBtnOnChecked.bind(this);

        const source: any = {
            datafields: [
                { name: 'id', type: 'number' },
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false)
        };

        this.state = {
            columns: this.columns,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source}
                    columns={this.state.columns} selectionmode={'multiplecellsadvanced'} />

                <div>
                    <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} style={{ float: 'left' }} onChecked={this.leftBtnOnChecked}>Left</JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} style={{ float: 'left' }} onChecked={this.centerBtnOnChecked} checked={true}>Center</JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} style={{ float: 'left' }} onChecked={this.rightBtnOnChecked}> Right</JqxRadioButton>
                </div>
            </div>
        );
    }

    private setAlignment(align: string): void {
        this.myGrid.current!.beginupdate();
        for (const column of this.columns!) {
            this.myGrid.current!.setcolumnproperty(column.datafield!, 'align', align);
            this.myGrid.current!.setcolumnproperty(column.datafield!, 'cellsalign', align);
        }
        this.myGrid.current!.endupdate();
    };

    private leftBtnOnChecked(): void {
        this.setAlignment('left');
    };

    private centerBtnOnChecked(): void {
        this.setAlignment('center');
    };

    private rightBtnOnChecked(): void {
        this.setAlignment('right');
    };
}

export default App;