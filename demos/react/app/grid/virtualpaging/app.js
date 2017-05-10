import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let data = new Array();
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
        // generate sample data.
        let generatedata = (startindex, endindex) => {
            let data = {};
            for (let i = startindex; i < endindex; i++) {
                let row = {};
                let productindex = Math.floor(Math.random() * productNames.length);
                let price = parseFloat(priceValues[productindex]);
                let quantity = 1 + Math.round(Math.random() * 10);
                row['id'] = i;
                row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
                row['productname'] = productNames[productindex];
                row['price'] = price;
                row['quantity'] = quantity;
                row['total'] = price * quantity;
                data[i] = row;
            }
            return data;
        }
        let source =
            {
                datatype: 'array',
                localdata: {},
                totalrecords: 1000000
            };
        // load virtual data.
        let rendergridrows = (params) => {
            let data = generatedata(params.startindex, params.endindex);
            return data;
        }
        let totalcolumnrenderer = (row, column, cellvalue) => {
            let newCellValue = $.jqx.dataFormat.formatnumber(cellvalue, 'c2');
            return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
        }
        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Id', datafield: 'id', width: 50 },
                { text: 'First Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsrenderer: totalcolumnrenderer, cellsalign: 'right' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} autoheight={true}
                    virtualmode={true} pageable={true} columns={columns}
                    rendergridrows={rendergridrows}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
