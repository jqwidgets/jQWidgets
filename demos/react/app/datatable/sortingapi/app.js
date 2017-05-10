import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {

        this.refs.sortButton.on('click', () => { 
            var columnIndex = this.refs.columnName.selectedIndex();
            var sortOrder = this.refs.sortOrder.selectedIndex() == 0 ? 'asc' : 'desc';
            this.refs.myDataTable.sortBy(this.columns()[columnIndex].dataField, sortOrder);
        });
        this.refs.clearButton.on('click', () => { 
            this.refs.myDataTablesortBy(null);
        });
    }
    columns() {
        let columns =
            [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
            ];
        return columns;
    }
    render() {
        let source =
            {
                localdata: generatedata(85),
                datatype: "array",
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                sortcolumn: 'firstname',
                sortdirection: 'asc'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
            ];

        return (
            <div>
                <JqxDataTable ref='myDataTable' style={{ float: 'left' }}
                    width={650} source={dataAdapter} altRows={true}
                    pageable={true} sortable={true} columns={this.columns()}
                />
                <div style={{ float: 'left', marginLeft: 10 }}>
                    <table>
                        <tbody>
                            <tr>
                                <td align="right">
                                    <div><strong>Settings</strong></div>
                                </td>
                                <td align="left"></td>
                            </tr>
                            <tr>
                                <td align="right">Column:</td>
                                <td align="left">
                                    <JqxDropDownList ref="columnName"
                                        width={100} selectedIndex={0} autoDropDownHeight={true}
                                        source={['Name', 'Last Name', 'Product', 'Quantity', 'Unit Price', 'Total']}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Sort Order:</td>
                                <td align="left">
                                    <JqxDropDownList ref="sortOrder"
                                        width={100} selectedIndex={0} autoDropDownHeight={true}
                                        source={['Ascending', 'Descending']}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align="right"></td>
                                <td align="left">
                                    <JqxButton ref="sortButton" value='Sort' style={{ float: 'left' }} width={50} />
                                    <JqxButton ref="clearButton" value='CLear' style={{ float: 'left', marginLeft: 5 }} width={50} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
