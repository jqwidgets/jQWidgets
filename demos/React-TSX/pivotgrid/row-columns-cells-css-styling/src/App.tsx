import * as React from 'react';
 


import './App.css';

import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';


class App extends React.PureComponent<{}, IPivotGridProps> {

    private myPivotGrid = React.createRef<JqxPivotGrid>();

    constructor(props: {}) {
        super(props);

        const pivotDataSource = this.createPivotDataSource();

        this.state = {
            source: pivotDataSource
        }
    }

    public render() {
        return (
            <JqxPivotGrid theme={'material-purple'} ref={this.myPivotGrid} style={{ width: '800px', height: '400px' }}
                source={this.state.source} treeStyleRows={true} autoResize={false}
                multipleSelectionEnabled={true} />
        );
    }

    private createPivotDataSource(): any {
        // prepare sample data
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

        // create a data source and data adapter
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

        // create a pivot data source from the dataAdapter
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
}

export default App;