import * as React from 'react';
import { useMemo, useRef } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const firstNames = [
    'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
];

const lastNames = [
    'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
];

const productNames = [
    'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
];

const priceValues = [
    '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
];

function generateData(startindex: number, endindex: number) {
    const data: any = {};
    for (let i = startindex; i < endindex; i++) {
        const row: any = {};
        const productindex = Math.floor(Math.random() * productNames.length);
        const price = parseFloat(priceValues[productindex]);
        const quantity = 1 + Math.round(Math.random() * 10);
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

const columns = [
    { text: 'Id', datafield: 'id', width: 100 },
    { text: 'First Name', datafield: 'firstname', width: 120 },
    { text: 'Last Name', datafield: 'lastname', width: 120 },
    { text: 'Product', datafield: 'productname', width: 180 },
    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
];

const App = () => {
    const source = useMemo(() => ({
        datatype: 'array',
        localdata: {},
        totalrecords: 1000000
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const rendergridrows = useRef((params: any) => {
        return generateData(params.startindex, params.endindex);
    }).current;

    return (
        <JqxGrid
            theme="material-purple"
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            virtualmode={true}
            rendergridrows={rendergridrows}
        />
    );
};

export default App;