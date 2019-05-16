import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';

class App extends React.PureComponent<{}, IPivotGridProps> {

    private myPivotGrid = React.createRef<JqxPivotGrid>();
    private myButton = React.createRef<JqxButton>();

    constructor(props: {}) {
        super(props);
        this.onChangeRowsDisplayStyle = this.onChangeRowsDisplayStyle.bind(this);

        const pivotDataSource = this.createPivotDataSource();

        this.state = {
            source: pivotDataSource
        }
    }

    public render() {
        return (
            <div>
                <JqxPivotGrid theme={'material-purple'} ref={this.myPivotGrid} style={{ width: '800px', height: '400px' }}
                    source={this.state.source} treeStyleRows={false} autoResize={false}
                    multipleSelectionEnabled={true} />
                <br />
                <JqxButton theme={'material-purple'} ref={this.myButton}
                    onClick={this.onChangeRowsDisplayStyle}
                    width={200} height={20}>
                    &nbsp;Change to Tree style display&nbsp;
                </JqxButton>
            </div>
        );
    }

    private createPivotDataSource(): any {
        // prepare sample data
        const data = [];

        const firstNames = [
            "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars"
        ];

        const lastNames = [
            "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson"
        ];

        const productNames = [
            "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
        ];

        const priceValues = [
            "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
        ];

        for (let i = 0; i < 200; i++) {
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

    private onChangeRowsDisplayStyle(): void {
        const isTreeStyleRows = !this.myPivotGrid.current!.getOptions('treeStyleRows');

        if (isTreeStyleRows) {
            this.myButton.current!.val('Change to OLAP style display');
        }
        else {
            this.myButton.current!.val('Change to Tree style display');
        }

        this.myPivotGrid.current!.setOptions({ treeStyleRows: isTreeStyleRows }); 
    }
}

export default App;