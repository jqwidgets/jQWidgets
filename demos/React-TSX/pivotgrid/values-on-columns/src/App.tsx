import * as React from 'react';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';

function createPivotDataSource(): any {
    const data = [];
    const firstNames = [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars"
    ];
    const lastNames = [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson"
    ];
    const productNames = [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte"
    ];
    const priceValues = [
        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];

    for (let i = 0; i < 100; i++) {
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
            columns: [{ dataField: 'productname' }],
            pivotValuesOnRows: false,
            rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
            values: [
                { dataField: 'price', 'function': 'sum', text: 'sum', width: NamedNodeMap, formatSettings: { prefix: '$', decimalPlaces: 2 } },
                { dataField: 'price', 'function': 'count', text: 'count' },
                { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
            ]
        }
    );

    return pivotDataSource;
}

function App() {
    const myPivotGrid = React.useRef<JqxPivotGrid>(null);
    const [source] = React.useState<any>(() => createPivotDataSource());

    return (
        <JqxPivotGrid
            theme="material-purple"
            ref={myPivotGrid}
            style={{ width: '800px', height: '400px' }}
            source={source}
            treeStyleRows={false}
            autoResize={false}
            multipleSelectionEnabled={true}
        />
    );
}

export default App;