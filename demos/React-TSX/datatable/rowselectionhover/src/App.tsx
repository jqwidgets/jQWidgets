import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

export interface IState extends IDataTableProps {
    selectedIndex: IDropDownListProps['selectedIndex'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();
    private myInput = React.createRef<JqxInput>();
    private selectedRows = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.dropDownOnChange = this.dropDownOnChange.bind(this);
        this.rowSelectBtnOnClick = this.rowSelectBtnOnClick.bind(this);
        this.clearSelectionBtnOnClick = this.clearSelectionBtnOnClick.bind(this);
        this.selectionInfo = this.selectionInfo.bind(this);

        const source = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(15, false),
        };

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', dataField: 'productname', width: 180 },
                { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { text: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right' }
            ],
            selectedIndex: 1,
            selectionMode: 'multipleRows',
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                    onRowSelect={this.selectionInfo} onRowUnselect={this.selectionInfo}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source}
                    columns={this.state.columns} altRows={true} selectionMode={this.state.selectionMode}/>

                <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                    <div><strong>Settings</strong></div>
                    Select Row:

                    <JqxInput theme={'material-purple'} ref={this.myInput}
                        width={60} height={30} value={0} />

                    <br />
                    <br />

                    <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.rowSelectBtnOnClick}
                        width={80} height={18}>
                        Select
                    </JqxButton>

                    <JqxButton theme={'material-purple'} style={{ float: 'left', marginLeft: '5px' }} onClick={this.clearSelectionBtnOnClick}
                        width={135} height={18}>
                        Clear Selection
                    </JqxButton>

                    <div style={{ clear: 'both' }} />
                    <div ref={this.selectedRows} style={{ marginTop: '10px' }} />
                    <br />

                    <div>Selection Mode:</div>

                    <JqxDropDownList theme={'material-purple'} onChange={this.dropDownOnChange}
                        height={30} source={['Single Row', 'Multiple Rows']}
                        selectedIndex={this.state.selectedIndex} autoDropDownHeight={true} />
                </div>
            </div>
        );
    }

    private dropDownOnChange(event: any): void {
        const index = event.args.index
        let newSelectionMode: IDataTableProps['selectionMode'];

        switch (index) {
            case 0:
                // disable multiple rows selection with Shift or Ctrl.
                newSelectionMode = 'singleRow';
                break;
            case 1:
                // enable multiple rows selection with Shift or Ctrl.
                newSelectionMode = 'multipleRows';
                break;
        }

        this.setState({
            selectedIndex: index,
            selectionMode: newSelectionMode
        });
    };

    private rowSelectBtnOnClick(): void {
        const index = parseInt(this.myInput.current!.getOptions('value'), 10);
        this.myDataTable.current!.selectRow(index);
    };

    private clearSelectionBtnOnClick(): void {
        this.myDataTable.current!.clearSelection();
    };

    private selectionInfo() {
        // gets selected row indexes. The method returns an Array of indexes.
        const selection = this.myDataTable.current!.getSelection();
        let selectedRows = '<br/>Selected Row Indexes:<br/>';
        if (selection && selection.length > 0) {
            const rows = this.myDataTable.current!.getRows();
            for (let i = 0; i < selection.length; i++) {
                const rowData = selection[i];
                selectedRows += rows.indexOf(rowData);
                if (i < selection.length - 1) {
                    selectedRows += ', ';
                }
                if (i > 1 && i % 8 === 0) {
                    selectedRows += '<br/>';
                }
            }
        }
        this.selectedRows.current!.innerHTML = selectedRows;
    }
}

export default App;