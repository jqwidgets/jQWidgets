import * as React from 'react';
 


import JqxDataTable, { IDataTableProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

export interface IState extends IPivotGridProps {
    tableSrcRecordsColumns: IDataTableProps['columns'];
}

class App extends React.PureComponent<{}, IState> {

    private myPivotGrid = React.createRef<JqxPivotGrid>();
    private drillThroughWindow = React.createRef<JqxWindow>();
    private tableSrcRecords = React.createRef<JqxDataTable>();
    private sampleData: any = null;

    constructor(props: {}) {
        super(props);
        this.createPivotDataSource = this.createPivotDataSource.bind(this);
        this.drillThrough = this.drillThrough.bind(this);
        this.onPivotCellDblClick = this.onPivotCellDblClick.bind(this);

        const pivotDataSource = this.createPivotDataSource();

        this.state = {
            source: pivotDataSource,
            tableSrcRecordsColumns: [
                { text: 'First name', dataField: 'firstname', width: 200 },
                { text: 'Last name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
            ]
        }
    }

    public componentDidMount() {
        const pivotRow = this.myPivotGrid.current!.getPivotRows().items![0];
        const pivotColumn = this.myPivotGrid.current!.getPivotColumns().items![0].valueItems![0];

        this.drillThrough(pivotRow, pivotColumn);
    }

    public render() {
        return (
            <div>
                <JqxPivotGrid theme={'material-purple'} ref={this.myPivotGrid} style={{ width: 800, height: 400 }}
                    onPivotcelldblclick={this.onPivotCellDblClick}
                    source={this.state.source} treeStyleRows={true} autoResize={false}
                    multipleSelectionEnabled={true} />

                <JqxWindow theme={'material-purple'} ref={this.drillThroughWindow}
                    width={500} height={300} autoOpen={false} showCollapseButton={true}
                    maxHeight={400} minHeight={200} maxWidth={700} minWidth={200} >
                    <div>
                        Drillthrough records
	                </div>
                    <div style={{ overflow: 'hidden' }}>
                        <JqxDataTable theme={'material-purple'} ref={this.tableSrcRecords}
                            width={'100%'} height={'100%'} pageable={true} pagerButtonsCount={10}
                            columns={this.state.tableSrcRecordsColumns} columnsResize={true} />
                    </div>
                </JqxWindow>
            </div>
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

        this.sampleData = data;

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
                pivotValuesOnRows: false,
                rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
                totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
                values: [
                    { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
                    { dataField: 'price', 'function': 'count', text: 'count' },
                    { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                ]
            }
        );

        return pivotDataSource;
    }

    private onPivotCellDblClick(event: any): void {
        const args = event.args;
        this.drillThrough(args.pivotRow, args.pivotColumn);
    }

    private drillThrough(pivotRow: any, pivotColumn: any): void {
        const pivotGridInstance = this.myPivotGrid.current!.getInstance();
        const rows = pivotGridInstance.getPivotCells().drillThroughCell(pivotRow, pivotColumn);

        const drillThroughRows = [];
        for (const row of rows) {
            drillThroughRows.push(this.sampleData[row]);
        }

        const drillThroughSrc = {
            dataFields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: drillThroughRows
        };

        const drillThroughDataAdapter = new jqx.dataAdapter(drillThroughSrc);
        this.tableSrcRecords.current!.setOptions({ source: drillThroughDataAdapter });

        this.drillThroughWindow.current!.open();
    } 
}

export default App;