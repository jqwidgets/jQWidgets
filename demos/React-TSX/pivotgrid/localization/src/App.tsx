import * as React from 'react';
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
            columns: [{ dataField: 'productname' }],
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
            rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
            values: [
                { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2, align: 'right' } },
                { dataField: 'price', 'function': 'count', text: 'count' },
                { dataField: 'price', 'function': 'average', text: 'average' }
            ]
        }
    );

    return pivotDataSource;
}

const localization = {
    sortascendingstring: "Sortiere aufsteigend",
    sortdescendingstring: "Sortiere absteigend",
    sortremovestring: "Entferne Sortierung"
};

const App = () => {
    const [source] = React.useState(() => createPivotDataSource());

    return (
        <JqxPivotGrid
            theme={'material-purple'}
            style={{ width: 800, height: 400 }}
            source={source}
            treeStyleRows={false}
            autoResize={false}
            multipleSelectionEnabled={true}
            localization={localization}
        />
    );
};

export default App;