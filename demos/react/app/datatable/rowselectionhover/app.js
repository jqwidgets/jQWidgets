import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.selectionMode.on('change', (event) => {
            switch (event.args.index) {
                case 0:
                    // disable multiple rows selection with Shift or Ctrl.
                    this.refs.myDataTable.selectionMode('singleRow');
                    break;
                case 1:
                    // enable multiple rows selection with Shift or Ctrl.
                    this.refs.myDataTable.selectionMode('multipleRows');
                    break;
            }
        });

        this.refs.rowSelect.on('click', (event) => {
            let index = parseInt(this.refs.rowInput.val());
            this.refs.myDataTable.selectRow(index);
        });
        // clear selection.
        this.refs.clearSelection.on('click', (event) => {
            this.refs.myDataTable.clearSelection();
        });

        this.refs.myDataTable.on('rowSelect', (event) => {
            // event arguments
            let args = event.args;
            // row index
            let index = args.index;
            // row data
            let rowData = args.row;
            // row key
            let rowKey = args.key;
            this.selectionInfo();
        });
        this.refs.myDataTable.on('rowUnselect', (event) => {
            // event arguments
            let args = event.args;
            // row index
            let index = args.index;
            // row data
            let rowData = args.row;
            // row key
            let rowKey = args.key;
            this.selectionInfo();
        });
    }
    selectionInfo() {
        // gets selected row indexes. The method returns an Array of indexes.
        let selection = this.refs.myDataTable.getSelection();
        let selectedRows = '<br/>Selected Row Indexes:<br/>';
        if (selection && selection.length > 0) {
            let rows = this.refs.myDataTable.getRows();
            for (let i = 0; i < selection.length; i++) {
                let rowData = selection[i];
                selectedRows += rows.indexOf(rowData);
                if (i < selection.length - 1) {
                    selectedRows += ', ';
                }
                if (i > 1 && i % 8 === 0) {
                    selectedRows += '<br/>';
                }
            }
        }
        document.getElementById('selectedRows').innerHTML = selectedRows;
    }
    render() {

        let columns =
            [
                { text: 'First Name', dataField: 'First Name', width: 150 },
                { text: 'Last Name', dataField: 'Last Name', width: 150 },
                { text: 'Product', dataField: 'Product', width: 180 },
                { text: 'Unit Price', dataField: 'Price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { text: 'Quantity', dataField: 'Quantity', width: 80, align: 'right', cellsAlign: 'right' }
            ];

        return (
            <div>
                <JqxDataTable ref='myDataTable'
                    width={650} columns={columns} altRows={true}
                >
                    <table border='1'>
                        <thead>
                            <tr>
                                <th align='left'>First Name</th>
                                <th align='left'>Last Name</th>
                                <th align='left'>Product</th>
                                <th align='right'>Price</th>
                                <th align='right'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ian</td>
                                <td>Devling</td>
                                <td>Espresso Truffle</td>
                                <td>$1.75</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Nancy</td>
                                <td>Wilson</td>
                                <td>Cappuccino</td>
                                <td>$5.00</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Cheryl</td>
                                <td>Nodier</td>
                                <td>Caffe Americano</td>
                                <td>$2.50</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Martin</td>
                                <td>Saavedra</td>
                                <td>Caramel Latte</td>
                                <td>$3.80</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>Guylene</td>
                                <td>Bjorn</td>
                                <td>Green Tea</td>
                                <td>$1.50</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Andrew</td>
                                <td>Burke</td>
                                <td>Caffe Espresso</td>
                                <td>$3.00</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Regina</td>
                                <td>Murphy</td>
                                <td>White Chocolate Mocha</td>
                                <td>$3.60</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Michael</td>
                                <td>Murphy</td>
                                <td>Caramel Latte</td>
                                <td>$3.80</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Petra</td>
                                <td>Bein</td>
                                <td>Caffe Americano</td>
                                <td>$2.50</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Nancy</td>
                                <td>Nodier</td>
                                <td>Caffe Latte</td>
                                <td>$4.50</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Peter</td>
                                <td>Devling</td>
                                <td>Green Tea</td>
                                <td>$1.50</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Beate</td>
                                <td>Saylor</td>
                                <td>Espresso con Panna</td>
                                <td>$3.25</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Shelley</td>
                                <td>Nodier</td>
                                <td>Peppermint Mocha Twist</td>
                                <td>$4.00</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Nancy</td>
                                <td>Murphy</td>
                                <td>Peppermint Mocha Twist</td>
                                <td>$4.00</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Lars</td>
                                <td>Wilson</td>
                                <td>Caffe Espresso</td>
                                <td>$3.00</td>
                                <td>11</td>
                            </tr>
                        </tbody>
                    </table>
                </JqxDataTable>
                <div style={{ float: 'left', marginTop: 10 }}>
                    <div><strong>Settings</strong></div>
                    Select Row:
                    <JqxInput ref='rowInput' value='0'
                        width={60} height={30}
                    />
                    <br />
                    <br />
                    <JqxButton ref='rowSelect' style={{ float: 'left' }}
                        width={105} height={30} value='Select' 
                    />
                    <JqxButton ref='clearSelection' style={{ float: 'left', marginLeft: 5 }} 
                        width={105} height={30} value='Clear Selection'
                    />
                    <div id='selectedRows'></div>
                    <br />
                    <div>Selection Mode:</div>
                    <JqxDropDownList ref='selectionMode'
                        height={30} source={['Single Row', 'Multiple Rows']}
                        selectedIndex={1} autoDropDownHeight={true}
                    />
                </div>
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
