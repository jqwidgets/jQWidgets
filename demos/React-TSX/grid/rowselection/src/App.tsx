import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

export interface IState extends IGridProps {
    dropDownSource: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myGrid = React.createRef<JqxGrid>();
    private mySelectRowBtn = React.createRef<JqxButton>();
    private myInput1 = React.createRef<JqxInput>();
    private myInput2 = React.createRef<JqxInput>();
    private selectedRowIndex = React.createRef<HTMLSpanElement>();
    private unselectedRowIndex = React.createRef<HTMLSpanElement>();

    constructor(props: {}) {
        super(props);
        this.scrollToBtnOnClick = this.scrollToBtnOnClick.bind(this);
        this.selectRowBtnOnClick = this.selectRowBtnOnClick.bind(this);
        this.clearSelectionBtnOnClick = this.clearSelectionBtnOnClick.bind(this);
        this.enableSelectionOnSelect = this.enableSelectionOnSelect.bind(this);
        this.enableHoverOnChange = this.enableHoverOnChange.bind(this);
        this.myGridOnRowSelect = this.myGridOnRowSelect.bind(this);
        this.myGridOnRowUnselect = this.myGridOnRowUnselect.bind(this);

        const source: any = {
            datafields: [
                { name: 'id', type: 'number' },
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
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            dropDownSource: ['none', 'single row', 'multiple rows', 'multiple rows extended'],
            ready: () => {
                this.myGrid.current!.selectrow(2);
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid} onRowselect={this.myGridOnRowSelect} onRowunselect={this.myGridOnRowUnselect}
                    // @ts-ignore
                    width={'100%'} height={350} source={this.state.source} columns={this.state.columns} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left' }}>
                        <div>
                            <JqxInput theme={'material-purple'} ref={this.myInput1}
                            width={50} height={20} value={100} />

                            <JqxButton theme={'material-purple'} style={{ display: 'inline-block', marginLeft: '5px' }} onClick={this.scrollToBtnOnClick} width={100}>Scroll to Row</JqxButton>
                        </div>
                        <div style={{ clear: 'both' }} />
                        <div style={{ marginTop: '10px' }}>
                            <JqxInput theme={'material-purple'} ref={this.myInput2} width={50} value={0} />
                            <JqxButton theme={'material-purple'} ref={this.mySelectRowBtn} style={{ display: 'inline-block', marginLeft: '5px' }} onClick={this.selectRowBtnOnClick}>Select Row</JqxButton>
                            <JqxButton theme={'material-purple'} style={{ display: 'inline-block', marginLeft: '5px' }} onClick={this.clearSelectionBtnOnClick}>Clear Selection</JqxButton>
                        </div>
                        <div style={{ clear: 'both' }} />
                        <div style={{ marginTop: '10px' }}>
                            <JqxCheckBox theme={'material-purple'} checked={true} onChange={this.enableHoverOnChange}>Enable Hover</JqxCheckBox>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <span>Selection Mode:</span>

                            <JqxDropDownList theme={'material-purple'} style={{ marginTop: '5px' }} onSelect={this.enableSelectionOnSelect}
                                width={120} height={25} selectedIndex={1} dropDownWidth={200}
                                autoDropDownHeight={true} source={this.state.dropDownSource} />

                            <div style={{ marginTop: '10px', fontSize: '12px', fontFamily: 'Verdana' }}>
                                Selection Modes:
                                <ul>
                                    <li>'none' - disables the selection. Selection is possible only through the API.</li>
                                    <li>'singlerow' - full row selection. Each click changes the selected row.</li>
                                    <li>'multiplerows' - each click selects a new row. Click on a selected row unselects it.</li>
                                    <li>'multiplerowsextended' - users can select multiple rows with drag and drop or<br /> by clicking on rows while holding Ctrl or Shift.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ clear: 'both', fontSize: '12px', fontFamily: 'Verdana' }}>
                        <span>Selection Log:</span>
                        <div style={{ marginTop: '10px' }}>
                            <span>Selected Row Index:</span>
                            <span ref={this.selectedRowIndex} />
                            <br />
                            <span>Unselected Row Index:</span>
                            <span ref={this.unselectedRowIndex} />
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

    private selectRowBtnOnClick(): void {
        const index = parseInt(this.myInput2.current!.getOptions('value'), 10);
        if (!isNaN(index)) {
            this.myGrid.current!.selectrow(index);
        }
    };

    private clearSelectionBtnOnClick(): void {
        this.myGrid.current!.clearselection();
    };

    private enableSelectionOnSelect(event: any): void {
        const index = event.args.index;
        this.mySelectRowBtn.current!.setOptions({ disabled: false });
        let newSelectionMode: IGridProps['selectionmode'];
        switch (index) {
            case 0:
                newSelectionMode = 'none';
                this.mySelectRowBtn.current!.setOptions({ disabled: true });
                break;
            case 1:
                newSelectionMode = 'singlerow';
                break;
            case 2:
                newSelectionMode = 'multiplerows';
                break;
            case 3:
                newSelectionMode = 'multiplerowsextended';
                break;
        }
        this.myGrid.current!.setOptions({ selectionmode: newSelectionMode });
    };

    private enableHoverOnChange(event: any): void {
        this.myGrid.current!.setOptions({ enablehover: event.args.checked });
    };

    private myGridOnRowSelect(event: any): void {
        this.selectedRowIndex.current!.innerHTML = event.args.rowindex;
    };

    private myGridOnRowUnselect(event: any): void {
        this.unselectedRowIndex.current!.innerHTML = event.args.rowindex;
    };
}

export default App;