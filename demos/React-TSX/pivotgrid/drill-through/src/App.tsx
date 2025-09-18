import * as React from 'react';

import JqxDataTable, { IDataTableProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

export interface IState extends IPivotGridProps {
    tableSrcRecordsColumns: IDataTableProps['columns'];
}

const App = () => {
    const myPivotGrid = React.useRef<JqxPivotGrid>(null);
    const drillThroughWindow = React.useRef<JqxWindow>(null);
    const tableSrcRecords = React.useRef<JqxDataTable>(null);
    const sampleData = React.useRef<any>(null);

    const [pivotSource, setPivotSource] = React.useState<any>(() => createPivotDataSource());
    const [tableSrcRecordsColumns] = React.useState<IDataTableProps['columns']>([
        { text: 'First name', dataField: 'firstname', width: 200 },
        { text: 'Last name', dataField: 'lastname', width: 200 },
        { text: 'Product', editable: false, dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
    ]);

    React.useEffect(() => {
        if (myPivotGrid.current) {
            const pivotRow = myPivotGrid.current.getPivotRows().items![0];
            const pivotColumn = myPivotGrid.current.getPivotColumns().items![0].valueItems![0];
            drillThrough(pivotRow, pivotColumn);
        }
    }, []);

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

        sampleData.current = data;

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

    function onPivotCellDblClick(event: any): void {
        const args = event.args;
        drillThrough(args.pivotRow, args.pivotColumn);
    }

    function drillThrough(pivotRow: any, pivotColumn: any): void {
        const pivotGridInstance = myPivotGrid.current!.getInstance();
        const rows = pivotGridInstance.getPivotCells().drillThroughCell(pivotRow, pivotColumn);

        const drillThroughRows = [];
        for (const row of rows) {
            drillThroughRows.push(sampleData.current[row]);
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
        tableSrcRecords.current!.setOptions({ source: drillThroughDataAdapter });

        drillThroughWindow.current!.open();
    }

    return (
        <div>
            <JqxPivotGrid
                theme={'material-purple'}
                ref={myPivotGrid}
                style={{ width: 800, height: 400 }}
                onPivotcelldblclick={onPivotCellDblClick}
                source={pivotSource}
                treeStyleRows={true}
                autoResize={false}
                multipleSelectionEnabled={true}
            />

            <JqxWindow
                theme={'material-purple'}
                ref={drillThroughWindow}
                width={500}
                height={300}
                autoOpen={false}
                showCollapseButton={true}
                maxHeight={400}
                minHeight={200}
                maxWidth={700}
                minWidth={200}
            >
                <div>
                    Drillthrough records
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <JqxDataTable
                        theme={'material-purple'}
                        ref={tableSrcRecords}
                        width={'100%'}
                        height={'100%'}
                        pageable={true}
                        pagerButtonsCount={10}
                        columns={tableSrcRecordsColumns}
                        columnsResize={true}
                    />
                </div>
            </JqxWindow>
        </div>
    );
};

export default App;
