import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            datafields: [
                { name: 'firstname' },
                { name: 'lastname' },
                { name: 'productname' },
                { name: 'quantity', type: 'int' },
                { name: 'price', type: 'float' },
                { name: 'total', type: 'float' }
            ],
            datatype: 'json',
            id: 'id',
            root: 'data',
            url: 'data.php'
        };

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 200 },
                { text: 'Last Name', datafield: 'lastname', width: 200 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns} columnsresize={true} />
        );
    }
}

export default App;

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