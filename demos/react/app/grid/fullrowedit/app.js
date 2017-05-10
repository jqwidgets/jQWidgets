import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        let rowValues = '';
        this.refs.myGrid.on('cellbeginedit', (event) => {
            let args = event.args;
            if (args.datafield === 'firstname') {
                rowValues = '';
            }
            rowValues += args.value.toString() + '    ';
            if (args.datafield === 'price') {
                let container = document.getElementById('cellbegineditevent');
                container.innerHTML = 'Begin Row Edit: ' + (1 + args.rowindex) + ', Data: ' + rowValues;
            }
        });
        this.refs.myGrid.on('cellendedit', (event) => {
            let args = event.args;
            if (args.datafield === 'firstname') {
                rowValues = '';
            }
            rowValues += args.value.toString() + '    ';
            if (args.datafield === 'price') {
                let container = document.getElementById('cellbegineditevent');
                container.innerHTML = 'End Row Edit: ' + (1 + args.rowindex) + ', Data: ' + rowValues;
            }
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
                { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                {
                    text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                    validation: (cell, value) => {
                        if (value == '')
                            return true;
                        let year = value.getFullYear();
                        if (year >= 2017) {
                            return { result: false, message: 'Ship Date should be before 1/1/2017' };
                        }
                        return true;
                    }
                },
                {
                    text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                    validation: (cell, value) => {
                        if (value < 0 || value > 150) {
                            return { result: false, message: 'Quantity should be in the 0-150 interval' };
                        }
                        return true;
                    },
                    createeditor: (row, cellvalue, editor) => {
                        editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                    }
                },
                {
                    text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                    validation: (cell, value) => {
                        if (value < 0 || value > 15) {
                            return { result: false, message: 'Price should be in the 0-15 interval' };
                        }
                        return true;
                    },
                    createeditor: (row, cellvalue, editor) => {
                        editor.jqxNumberInput({ digits: 3 });
                    }
                }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} editable={true} columns={columns}
                    selectionmode={'singlerow'} editmode={'selectedrow'}
                />
                <div style={{ fontSize: 12, fontFamily: 'Verdana', marginTop: 30 }}>
                    <div id='cellbegineditevent' />
                    <div id='cellendeditevent' style={{ marginTop: 30 }} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
