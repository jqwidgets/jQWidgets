import * as React from 'react';

import './App.css';

import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';

function createPivotDataSource(): any {
    const data = [];

    const firstNames = [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];

    const lastNames = [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];

    const productNames = [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];

    const priceValues = [
        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    for (let i = 0; i < 500; i++) {
        const row: any = {};
        const productindex = Math.floor(Math.random() * productNames.length);
        const price = parseFloat(priceValues[productindex]);
        const quantity = 1 + Math.round(Math.random() * 10);

        row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.productname = productNames[productindex];
        row.price = price;
        row.quantity = quantity;
        row.total = price * quantity;

        data[i] = row;
    }

    const source = {
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array',
        localdata: data
    };

    const dataAdapter = new jqx.dataAdapter(source);
    dataAdapter.dataBind();

    const pivotDataSource = new jqx.pivot(
        dataAdapter,
        {
            columns: [
                { dataField: 'productname', className: 'columnStyle', classNameSelected: 'columnStyleSelected' }
            ],
            filters: [
                {
                    dataField: 'productname',
                    filterFunction: (value: any) => {
                        if (value === "Black Tea" || value === "Green Tea") {
                            return true;
                        }
                        return false;
                    }
                }
            ],
            pivotValuesOnRows: false,
            rows: [
                { dataField: 'firstname', className: 'rowStyle', classNameSelected: 'rowStyleSelected' },
                { dataField: 'lastname', className: 'rowStyle', classNameSelected: 'rowStyleSelected' }
            ],
            values: [
                { dataField: 'price', 'function': 'sum', text: 'Sum', formatSettings: { prefix: '$', decimalPlaces: 2 }, className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' },
                { dataField: 'price', 'function': 'count', text: 'Count', className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' },
                { dataField: 'price', 'function': 'average', text: 'Average', formatSettings: { prefix: '$', decimalPlaces: 2 }, className: 'columnStyle', classNameSelected: 'columnStyleSelected', cellsClassName: 'cellStyle', cellsClassNameSelected: 'cellStyleSelected' }
            ]
        }
    );

    return pivotDataSource;
}

const App = () => {
    const pivotGridRef = React.useRef<JqxPivotGrid>(null);
    const [source] = React.useState<any>(() => createPivotDataSource());

    return (
        <JqxPivotGrid
            theme="material-purple"
            ref={pivotGridRef}
            style={{ width: '800px', height: '400px' }}
            source={source}
            treeStyleRows={true}
            autoResize={false}
            multipleSelectionEnabled={true}
        />
    );
};

export default App;