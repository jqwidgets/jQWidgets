import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.selectcellbutton.on('click', () => {
            let index = parseInt(this.refs.rowindexinput.val());
            let columnindex = this.refs.columnchooser.getSelectedIndex();
            let columndatafield = this.refs.myGrid.getcolumnat(columnindex).datafield;
            if (!isNaN(index)) {
                this.refs.myGrid.selectcell(index, columndatafield);
            }
        });
        // clears the selection.
        this.refs.clearselectionbutton.on('click', () => {
            this.refs.myGrid.clearselection();
        });
        // scroll to a row.
        this.refs.scrolltobutton.on('click', () => {
            let index = parseInt(this.refs.rowindexinput2.val());
            if (!isNaN(index)) {
                this.refs.myGrid.ensurerowvisible(index);
            }
        });
        // enable or disable the selection.
        this.refs.enableselection.on('select', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myGrid.selectionmode('none');
                    break;
                case 1:
                    this.refs.myGrid.selectionmode('singlecell');
                    break;
                case 2:
                    this.refs.myGrid.selectionmode('multiplecells');
                    break;
                case 3:
                    this.refs.myGrid.selectionmode('multiplecellsextended');
                    break;
                case 4:
                    this.refs.myGrid.selectionmode('multiplecellsadvanced');
                    break;
            }
        });
        // enable or disable the hover state.
        this.refs.enablehover.on('change', (event) => {
            this.refs.myGrid.enablehover(event.args.checked);
        });
        // display selected row index.
        this.refs.myGrid.on('cellselect', (event) => {
            let columnheader = this.refs.myGrid.getcolumn(event.args.datafield).text;
            document.getElementById('selectedcell').innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
        });
        // display unselected row index.
        this.refs.myGrid.on('cellunselect', (event) => {
            let columnheader = this.refs.myGrid.getcolumn(event.args.datafield).text;
            document.getElementById('unselectedcell').innerHTML = 'Row: ' + event.args.rowindex + ', Column: ' + columnheader;
        });
        // select the second row.
        this.refs.myGrid.selectcell(2, 'lastname');
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        let dropDownSource1 = ['none', 'single cell', 'multiple cells', 'multiple cells extended', 'multiple cells advanced'];

        let dropDownSource2 = ['First Name', 'Last Name', 'Product Name', 'Quantity', 'Unit Price', 'Total'];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter}
                    columns={columns} selectionmode={'singlecell'}
                />
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <div>
                            <JqxInput ref='rowindexinput2' style={{ float: 'left', marginRight: 5 }} width={50} height={20} value={100} />
                            <JqxButton ref='scrolltobutton' style={{ float: 'left' }} value='Scroll to Row' />
                        </div>
                        <div style={{ clear: 'both' }} />
                        <JqxCheckBox ref='enablehover' style={{ marginTop: 10 }} value={'Enable Hover'} checked={true} />
                        <div style={{ marginTop: 10 }}>
                            <span>Selection Mode</span>
                            <JqxDropDownList ref='enableselection' style={{ marginTop: 5 }}
                                width={120} height={25} selectedIndex={1} dropDownWidth={200}
                                autoDropDownHeight={true} source={dropDownSource1}
                            />
                        </div>
                    </div>
                    <div style={{ float: 'left', marginLeft: 20 }}>
                        <div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td align='right'>Row</td>
                                            <td>
                                                <JqxInput ref='rowindexinput' style={{ float: 'left' }} width={50} value={0} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align='right'>Column:</td>
                                            <td>
                                                <JqxDropDownList ref='columnchooser'
                                                    width={120} height={25} selectedIndex={1}
                                                    autoDropDownHeight={true} source={dropDownSource2}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align='right'>
                                                <JqxButton ref='clearselectionbutton' style={{ float: 'left', marginRight: 5  }} value='Clear Selection' />
                                            </td>
                                            <td>
                                                <JqxButton ref='selectcellbutton' style={{ float: 'left' }} value='Select Cell' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left', marginLeft: 20 }}>
                        <span>Selection Log:</span>
                        <div style={{ marginTop: 10 }}>
                            <span>Selected Cell:</span>
                            <span id='selectedcell'></span>
                            <br />
                            <span>Unselected Cell:</span>
                            <span id='unselectedcell'></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
