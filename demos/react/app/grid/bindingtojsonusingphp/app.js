import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'firstname' },
                    { name: 'lastname' },
                    { name: 'productname' },
                    { name: 'quantity', type: 'int' },
                    { name: 'price', type: 'float' },
                    { name: 'total', type: 'float' }
                ],
                id: 'id',
                url: '../sampledata/data.php',
                root: 'data'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} columnsresize={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


//  data.php

//  <?php
//       $firstNames = array("Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene");
//       $lastNames = array("Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier");
//       $productNames = array("Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espressocon Panna", "Peppermint Mocha Twist", "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha");
//       $priceValues = array("2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0", "2.25", "1.5", "3.0", "3.3", "4.5", "3.6");
//       $data = array();
//       $i = 0;
//       while ($i < count($productNames)) {
//          $row = array();
//            $productindex = $i;
//          $price = $priceValues[$productindex];
//          $quantity = rand(1, 10);
//          $row["firstname"] = $firstNames[$i];
//          $row["lastname"] = $lastNames[$i];
//          $row["productname"] = $productNames[$productindex];
//          $row["price"] = $price;
//          $row["quantity"] = $quantity;
//          $row["total"] = $price * $quantity;
//          $data[$i] = $row;
//          $i++;
//      }

//      header("Content-type: application/json");
//      echo "{\"data\":" .json_encode($data). "}";
//  ?>

