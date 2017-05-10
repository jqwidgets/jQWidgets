import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('cellbeginedit', (event) => {
            let args = event.args;
            let container = document.getElementById('cellbegineditevent');
            container.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
        });

        this.refs.myGrid.on('cellendedit', (event) => {
            let args = event.args;
            let container = document.getElementById('cellendeditevent');
            container.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'date', type: 'date' }
                ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let cellbeginedit = (row, datafield, columntype, value) => {
            if (row == 0 || row == 2 || row == 5) return false;
        }
        let cellsrenderer = (row, column, value, defaultHtml) => {
            if (row == 0 || row == 2 || row == 5) {
                let element = defaultHtml.substring(0, 61) + "; color: #999" + defaultHtml.substring(61);
                return element;
            }
            return defaultHtml;
        }

        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80, cellbeginedit: cellbeginedit, cellsrenderer: cellsrenderer },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80, cellbeginedit: cellbeginedit, cellsrenderer: cellsrenderer },
                { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 190, cellbeginedit: cellbeginedit, cellsrenderer: cellsrenderer },
                { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellbeginedit: cellbeginedit },
                {
                    text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd', cellbeginedit: cellbeginedit,
                    validation: (cell, value) => {
                        let year = value.getFullYear();
                        if (year >= 2015) {
                            return { result: false, message: 'Ship Date should be before 1/1/2015' };
                        }
                        return true;
                    }, cellsrenderer: cellsrenderer
                },
                {
                    text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
                    validation: (cell, value) => {
                        if (value < 0 || value > 150) {
                            return { result: false, message: 'Quantity should be in the 0-150 interval' };
                        }
                        return true;
                    },
                    initeditor: (row, cellvalue, editor) => {
                        editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                    }, cellbeginedit: cellbeginedit, cellsrenderer: cellsrenderer
                },
                {
                    text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                    validation: (cell, value) => {
                        if (value < 0 || value > 15) {
                            return { result: false, message: 'Price should be in the 0-15 interval' };
                        }
                        return true;
                    },
                    initeditor: (row, cellvalue, editor) => {
                        editor.jqxNumberInput({ digits: 3 });
                    }, cellbeginedit: cellbeginedit, cellsrenderer: cellsrenderer
                }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} editable={true}
                    columns={columns} selectionmode={'singlecell'}
                />
                <div style={{ marginTop: 30 }}>
                    <div id='cellbegineditevent' />
                    <div style={{ marginTop: 10 }} id='cellendeditevent' />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
