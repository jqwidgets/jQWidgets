import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    render() {

        let data = {};
        let firstNames =
            [
                'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
            ];
        let lastNames =
            [
                'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
            ];
        let productNames =
            [
                'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
            ];
        let priceValues =
            [
                '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
            ];
        let generaterow = (i) => {
            let row = {};
            let productindex = Math.floor(Math.random() * productNames.length);
            let price = parseFloat(priceValues[productindex]);
            let quantity = 1 + Math.round(Math.random() * 10);
            row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
            row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
            row['productname'] = productNames[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            return row;
        }
        for (let i = 0; i < 10; i++) {
            let row = generaterow(i);
            data[i] = row;
        }

        let source =
            {
                localdata: data,
                datatype: 'local',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                addrow: (rowid, rowdata, position, commit) => {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                },
                deleterow: (rowid, commit) => {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    commit(true);
                },
                updaterow: (rowid, newdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let rendertoolbar = (toolbar) => {
            let container = document.createElement('div');
            container.style.margin = '5px';

            let buttonContainer1 = document.createElement('div');
            let buttonContainer2 = document.createElement('div');
            let buttonContainer3 = document.createElement('div');
            let buttonContainer4 = document.createElement('div');

            buttonContainer2.style.marginLeft = '5px';
            buttonContainer3.style.marginLeft = '5px';
            buttonContainer4.style.marginLeft = '5px';

            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer2);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer4);
            toolbar[0].appendChild(container);

            let addRowButton = ReactDOM.render(<JqxButton value='Add New Row' style={{ float: 'left' }}/>, buttonContainer1);
            let addMultipleRowsButton = ReactDOM.render(<JqxButton value='Add Multiple New Rows' style={{ float: 'left', marginLeft: 5 }} />, buttonContainer2);
            let deleteRowButton = ReactDOM.render(<JqxButton value='Delete Selected Row' style={{ float: 'left', marginLeft: 5 }} />, buttonContainer3);
            let updateRowButton = ReactDOM.render(<JqxButton value='Update Selected Row' style={{ float: 'left', marginLeft: 5 }} />, buttonContainer4);

            addRowButton.on('click', () => {
                let datarow = generaterow();
                this.refs.myGrid.addrow(null, datarow);
            });

            addMultipleRowsButton.on('click', () => {
                this.refs.myGrid.beginupdate();
                for (let i = 0; i < 10; i++) {
                    let datarow = generaterow();
                    this.refs.myGrid.addrow(null, datarow);
                }
                this.refs.myGrid.endupdate();
            });

            deleteRowButton.on('click', () => {
                let selectedrowindex = this.refs.myGrid.getselectedrowindex();
                let rowscount = this.refs.myGrid.getdatainformation().rowscount;
                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                    let id = this.refs.myGrid.getrowid(selectedrowindex);
                    this.refs.myGrid.deleterow(id);
                }
            });

            updateRowButton.on('click', () => {
                let datarow = generaterow();
                let selectedrowindex = this.refs.myGrid.getselectedrowindex();
                let rowscount = this.refs.myGrid.getdatainformation().rowscount;
                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                    let id = this.refs.myGrid.getrowid(selectedrowindex);
                    this.refs.myGrid.updaterow(id, datarow);
                    this.refs.myGrid.ensurerowvisible(selectedrowindex);
                }
            });
        };

        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <JqxGrid ref='myGrid'
                width={850} height={350} source={dataAdapter} showtoolbar={true}
                rendertoolbar={rendertoolbar} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
