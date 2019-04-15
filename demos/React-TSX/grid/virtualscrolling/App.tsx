import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private firstNames: string[] = [
        'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
    ];

    private lastNames: string[] = [
        'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
    ];

    private productNames: string[] = [
        'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
    ];

    private priceValues: string[] = [
        '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
    ];

    constructor(props: {}) {
        super(props);
        this.generateData = this.generateData.bind(this);

        const source: any = {
            datatype: 'array',
            localdata: {},
            totalrecords: 1000000
        };

        this.state = {
            columns: [
                { text: 'Id', datafield: 'id', width: 100 },
                { text: 'First Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            rendergridrows: (params: any): any[] => {
                const data = this.generateData(params.startindex, params.endindex);
                return data;
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                 virtualmode={true} rendergridrows={this.state.rendergridrows} />
        );
    }

    private generateData(startindex: number, endindex: number): any {
        const data: any = {};
        for (let i = startindex; i < endindex; i++) {
            const row: any = {};
            const productindex = Math.floor(Math.random() * this.productNames.length);
            const price = parseFloat(this.priceValues[productindex]);
            const quantity = 1 + Math.round(Math.random() * 10);
            /* tslint:disable:no-string-literal */
            row['id'] = i;
            row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
            row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
            row['productname'] = this.productNames[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            data[i] = row;
        }
        return data;
    }
}

export default App;