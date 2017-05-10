import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.selectrowbutton.on('click', () => {
            let index = parseInt(this.refs.rowindexinput.val());
            if (!isNaN(index)) {
                this.refs.myGrid.selectrow(index);
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
            this.refs.selectrowbutton.disabled(false);
            switch (index) {
                case 0:
                    this.refs.myGrid.selectionmode('none');
                    this.refs.selectrowbutton.disabled(true);
                    break;
                case 1:
                    this.refs.myGrid.selectionmode('singlerow');
                    break;
                case 2:
                    this.refs.myGrid.selectionmode('multiplerows');
                    break;
                case 3:
                    this.refs.myGrid.selectionmode('multiplerowsextended');
                    break;
                case 4:
                    this.refs.myGrid.selectionmode('multiplerowsadvanced');
                    break;
            }
        });
        // enable or disable the hover state.
        this.refs.enablehover.on('change', (event) => {
            this.refs.myGrid.enablehover(event.args.checked);
        });
        // display selected row index.
        this.refs.myGrid.on('rowselect', (event) => {
            document.getElementById('selectrowindex').innerHTML = event.args.rowindex;
        });
        // display unselected row index.
        this.refs.myGrid.on('rowunselect', (event) => {
            document.getElementById('unselectrowindex').innerHTML = event.args.rowindex;
        });
        // select the second row.
        this.refs.myGrid.selectrow(2);
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

        let dropDownSource = ['none', 'single row', 'multiple rows', 'multiple rows extended', 'multiple rows advanced'];

        return (
            <div>
                <JqxGrid ref='myGrid' width={850} height={350} source={dataAdapter} columns={columns} />
                <div style={{ marginTop: 20 }}>
                    <div style={{ clear: 'both', fontFamily: 'Verdana', fontSize: 12 }}>
                        <div style={{ float: 'left' }}>
                            <div>
                                <JqxInput ref='rowindexinput2' style={{ float: 'left', marginRight: 5 }} width={50} height={20} value={100} />
                                <JqxButton ref='scrolltobutton' style={{ float: 'left' }} value='Scroll to Row' />
                            </div>
                            <div style={{ clear: 'both' }} />
                            <div style={{ marginTop: 10 }}>
                                <JqxInput ref='rowindexinput' style={{ float: 'left', marginRight: 5 }} width={50} height={20} value={0} />
                                <JqxButton ref='selectrowbutton' style={{ float: 'left', marginRight: 5  }} value='Select Row' />
                                <JqxButton ref='clearselectionbutton' style={{ float: 'left' }} value='Clear Selection' />
                            </div>
                            <div style={{ clear: 'both' }} />
                            <JqxCheckBox ref='enablehover' style={{ marginTop: 10 }} value={'Enable Hover'} checked={true} />
                            <div style={{ marginTop: 10 }}>
                                Selection Mode:
                                <JqxDropDownList ref='enableselection' style={{ marginTop: 5 }}
                                    width={120} height={25} selectedIndex={1} dropDownWidth={230}
                                    autoDropDownHeight={true} source={dropDownSource}
                                />
                                <div style={{ marginTop: 10, fontSize: 12, fontFamily: 'Verdana' }}>
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
                    </div>
                    <div style={{ clear: 'both', fontFamily: 'Verdana', fontSize: 12 }}>
                        <span>Selection Log:</span>
                        <div style={{ marginTop: 10 }}>
                            <span>Selected Row Index:</span>
                            <span id='selectrowindex'></span>
                            <br />
                            <span>Unselected Row Index:</span>
                            <span id='unselectrowindex'></span>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
