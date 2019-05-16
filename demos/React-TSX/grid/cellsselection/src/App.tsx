import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

export interface IState extends IGridProps {
    dropDownSource1: IDropDownListProps['source'];
    dropDownSource2: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myGrid = React.createRef<JqxGrid>();
    private myDropDownList = React.createRef<JqxDropDownList>();
    private myInput1 = React.createRef<JqxInput>();
    private myInput2 = React.createRef<JqxInput>();
    private selectedCell = React.createRef<HTMLSpanElement>();
    private unselectedCell = React.createRef<HTMLSpanElement>();

    constructor(props: {}) {
        super(props);
        this.scrollToBtnOnClick = this.scrollToBtnOnClick.bind(this);
        this.clearBtnOnClick = this.clearBtnOnClick.bind(this);
        this.selectBtnOnClick = this.selectBtnOnClick.bind(this);
        this.myDropDownListOnSelect = this.myDropDownListOnSelect.bind(this);
        this.myCheckBoxOnChange = this.myCheckBoxOnChange.bind(this);
        this.myGridOnCellSelect = this.myGridOnCellSelect.bind(this);
        this.myGridOnCellUnselect = this.myGridOnCellUnselect.bind(this);

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
            localdata: generatedata(200, false),
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            dropDownSource1: ['none', 'single cell', 'multiple cells', 'multiple cells extended', 'multiple cells advanced'],
            dropDownSource2: ['First Name', 'Last Name', 'Product Name', 'Quantity', 'Unit Price', 'Total'],
            enablehover: true,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    onCellselect={this.myGridOnCellSelect} onCellunselect={this.myGridOnCellUnselect}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    selectionmode={'singlecell'} enablehover={this.state.enablehover} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left' }}>
                        <div>
                            <JqxInput theme={'material-purple'} ref={this.myInput1} style={{ float: 'left', marginRight: '5px' }}
                                width={50} height={20} value={100} />

                            <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.scrollToBtnOnClick}>Scroll to Row</JqxButton>
                        </div>
                        <div style={{ clear: 'both' }} />
                        <div style={{ marginTop: '10px' }} />
                        <JqxCheckBox theme={'material-purple'} checked={true} onChange={this.myCheckBoxOnChange}> Enable Hover</JqxCheckBox>
                        <div style={{ marginTop: '10px' }}>
                            <span>Selection Mode</span>

                            <JqxDropDownList theme={'material-purple'} style={{ marginTop: '5px' }} onSelect={this.myDropDownListOnSelect}
                                width={120} height={25} selectedIndex={1} dropDownWidth={200}
                                autoDropDownHeight={true} source={this.state.dropDownSource1} />
                        </div>
                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td align={'right'}>Row</td>
                                        <td>
                                            <JqxInput theme={'material-purple'} ref={this.myInput2} style={{ float: 'left' }} width={50} value={0} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align={'right'}>Column:</td>
                                        <td>
                                            <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList}
                                                width={120} height={25} selectedIndex={1}
                                                autoDropDownHeight={true} source={this.state.dropDownSource2} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align={'right'}>
                                            <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={this.clearBtnOnClick}>Clear Selection</JqxButton>
                                        </td>
                                        <td>
                                            <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.selectBtnOnClick}>Select Cell</JqxButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <span>Selection Log:</span>
                        <div style={{ marginTop: '10px' }}>
                            <span>Selected Cell:</span>
                            <span ref={this.selectedCell} />
                            <br />
                            <span>Unselected Cell:</span>
                            <span ref={this.unselectedCell} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private scrollToBtnOnClick(): void {
        const index = parseInt(this.myInput1.current!.getOptions('value'), 10);
        if (!isNaN(index)) {
            this.myGrid.current!.ensurerowvisible(index);
        }
    };

    private clearBtnOnClick(): void {
        this.myGrid.current!.clearselection();
    };

    private selectBtnOnClick(): void {
        const index = parseInt(this.myInput2.current!.getOptions('value'), 10);
        const columnindex = this.myDropDownList.current!.getSelectedIndex();
        const columndatafield = this.myGrid.current!.getcolumnat(columnindex).datafield;
        if (!isNaN(index)) {
            this.myGrid.current!.selectcell(index, columndatafield);
        }
    };

    // enable or disable the selection.
    private myDropDownListOnSelect(event: any): void {
        const index = event.args.index;
        let newSelectionMode: IGridProps['selectionmode'];
        switch (index) {
            case 0:
                newSelectionMode = 'none';
                break;
            case 1:
                newSelectionMode = 'singlecell';
                break;
            case 2:
                newSelectionMode = 'multiplecells';
                break;
            case 3:
                newSelectionMode = 'multiplecellsextended';
                break;
            case 4:
                newSelectionMode = 'multiplecellsadvanced';
                break;
        }
        this.myGrid.current!.setOptions({ selectionmode: newSelectionMode });
    };

    // enable or disable the hover state.
    private myCheckBoxOnChange(event: any): void {
        this.myGrid.current!.setOptions({ enablehover: event.args.checked });
    };

    // display selected row index.
    private myGridOnCellSelect(event: any): void {
        const columnheader = this.myGrid.current!.getcolumn(event.args.datafield).text;
        this.selectedCell.current!.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };

    // display unselected row index.
    private myGridOnCellUnselect(event: any): void {
        const columnheader = this.myGrid.current!.getcolumn(event.args.datafield).text;
        this.unselectedCell.current!.innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
    };
}

export default App;