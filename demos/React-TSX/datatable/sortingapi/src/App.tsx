import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();
    private columnName = React.createRef<JqxDropDownList>();
    private sortOrder = React.createRef<JqxDropDownList>();

    constructor(props: {}) {
        super(props);
        this.sortBtnOnClick = this.sortBtnOnClick.bind(this);
        this.clearBtnOnClick = this.clearBtnOnClick.bind(this);

        const source: any = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(85, false)
        }

        this.state = {
            columns: [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <div>
                <JqxDataTable theme={'material-purple'} ref={this.myDataTable} style={{ float: 'left', marginLeft: '20px' }}
                    source={this.state.source} columns={this.state.columns} pageable={true}
                    columnsResize={true} pagerButtonsCount={10} />

                <div style={{ float: 'left', marginLeft: '10px' }}>
                    <table>
                        <tbody>
                            <tr>
                                <td align="right">
                                    <div><strong>Settings</strong></div>
                                </td>
                                <td align="left" />
                            </tr>
                            <tr>
                                <td align="right">Column:</td>
                                <td align="left">
                                    <JqxDropDownList theme={'material-purple'} ref={this.columnName}
                                        width={100} selectedIndex={0} autoDropDownHeight={true}
                                        source={['Name', 'Last Name', 'Product', 'Quantity', 'Unit Price', 'Total']} />
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Sort Order:</td>
                                <td align="left">
                                    <JqxDropDownList theme={'material-purple'} ref={this.sortOrder}
                                        width={100} selectedIndex={0} autoDropDownHeight={true}
                                        source={['Ascending', 'Descending']} />
                                </td>
                            </tr>
                            <tr>
                                <td align="right" />
                                <td align="left">
                                    <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.sortBtnOnClick} width={50}>Sort</JqxButton>
                                    <JqxButton theme={'material-purple'} style={{ float: 'left', marginLeft: '5px' }} onClick={this.clearBtnOnClick} width={50}>Clear</JqxButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    private sortBtnOnClick(): void {
        const columnIndex = this.columnName.current!.getOptions('selectedIndex');
        const sortOrder = this.sortOrder.current!.getOptions('selectedIndex') === 0 ? 'asc' : 'desc';
        this.myDataTable.current!.sortBy(this.state.columns![columnIndex].dataField!, sortOrder);
    }

    private clearBtnOnClick(): void {
        this.myDataTable.current!.sortBy('firstname', null);
    }
}

export default App;