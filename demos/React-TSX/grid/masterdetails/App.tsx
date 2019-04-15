import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

export interface IState extends IGridProps {
    columns2: IGridProps['columns'];
}

class App extends React.PureComponent<{}, IState> {

    private ordersGrid = React.createRef<JqxGrid>();

    private dataFields2: any[] = [
        { name: 'CustomerID' },
        { name: 'OrderID' },
        { name: 'OrderDate', type: 'date' },
        { name: 'ShippedDate', type: 'date' },
        { name: 'ShipName' },
        { name: 'ShipCountry' }
    ];

    private source2: any = {
        datafields: this.dataFields2,
        localdata: [
            { 'OrderID': 10248, 'CustomerID': 'AAA', 'OrderDate': '1996-07-04 00:00:00', 'ShippedDate': '1996-07-16 00:00:00', 'ShipName': 'Vins et alcools Chevalier' },
            { 'OrderID': 10249, 'CustomerID': 'AAA', 'OrderDate': '1996-07-05 00:00:00', 'ShippedDate': '1996-07-17 00:00:00', 'ShipName': 'Toms Spezialitten' },
            { 'OrderID': 10250, 'CustomerID': 'AAA', 'OrderDate': '1996-07-06 00:00:00', 'ShippedDate': '1996-07-18 00:00:00', 'ShipName': 'Hanari Carnes' },
            { 'OrderID': 10251, 'CustomerID': 'BBB', 'OrderDate': '1996-07-07 00:00:00', 'ShippedDate': '1996-07-19 00:00:00', 'ShipName': 'Lady Of Seas' },
            { 'OrderID': 10252, 'CustomerID': 'BBB', 'OrderDate': '1996-07-08 00:00:00', 'ShippedDate': '1996-07-20 00:00:00', 'ShipName': 'Queen Victoria' },
            { 'OrderID': 10253, 'CustomerID': 'BBB', 'OrderDate': '1996-07-09 00:00:00', 'ShippedDate': '1996-07-21 00:00:00', 'ShipName': 'Poseidon' },
            { 'OrderID': 10254, 'CustomerID': 'CCC', 'OrderDate': '1996-07-10 00:00:00', 'ShippedDate': '1996-07-22 00:00:00', 'ShipName': 'Wreckno' },
            { 'OrderID': 10255, 'CustomerID': 'CCC', 'OrderDate': '1996-07-11 00:00:00', 'ShippedDate': '1996-07-23 00:00:00', 'ShipName': 'Flash' },
            { 'OrderID': 10256, 'CustomerID': 'CCC', 'OrderDate': '1996-07-12 00:00:00', 'ShippedDate': '1996-07-24 00:00:00', 'ShipName': 'Titan' }
        ]
    }

    private dataAdapter2: any = new jqx.dataAdapter(this.source2, { autoBind: true });

    constructor(props: {}) {
        super(props);
        this.customersGridOnRowSelect = this.customersGridOnRowSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'CustomerID' },
                { name: 'CompanyName' },
                { name: 'ContactName' },
                { name: 'ContactTitle' },
                { name: 'Address' },
                { name: 'City' },
                { name: 'Country' }
            ],
            localdata: [
                { 'CustomerID': 'AAA', 'CompanyName': 'Alfreds Futterkiste', 'ContactName': 'Maria Anders', 'ContactTitle': 'Sales Representative', 'City': 'Berlin', 'Country': 'Germany' },
                { 'CustomerID': 'BBB', 'CompanyName': 'Trujillo Emparedados', 'ContactName': 'Gerry Trujillo', 'ContactTitle': 'Owner', 'City': 'Paris', 'Country': 'France' },
                { 'CustomerID': 'CCC', 'CompanyName': 'Moreno Taquera', 'ContactName': 'Antonio Moreno', 'ContactTitle': 'Manager', 'City': 'Mxico D.F.', 'Country': 'Mexico' }
            ]
        };

        this.state = {
            columns: [
                { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                { text: 'City', datafield: 'City', width: 120 },
                { text: 'Country', datafield: 'Country' }
            ],
            columns2: [
                { text: 'OrderID', datafield: 'OrderID', width: 100 },
                { text: 'OrderDate', datafield: 'OrderDate', cellsformat: 'd', width: 150 },
                { text: 'Shipped Date', datafield: 'ShippedDate', cellsformat: 'd', width: 150 },
                { text: 'Ship Name', datafield: 'ShipName' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <h3>Customers</h3>

                <JqxGrid theme={'material-purple'} onRowselect={this.customersGridOnRowSelect}
                    // @ts-ignore
                    width={'100%'} height={250} source={this.state.source}
                    keyboardnavigation={false} columns={this.state.columns} />

                <h3>Orders by Customer</h3>

                <JqxGrid theme={'material-purple'} ref={this.ordersGrid}
                    // @ts-ignore
                    width={'100%'} height={250}
                    keyboardnavigation={false} columns={this.state.columns2} />
            </div>
        );
    }

    private customersGridOnRowSelect(event: any): void {
        const customerID = event.args.row.CustomerID;
        const records = [];
        const dataAdapter = this.dataAdapter2;

        for (const record of dataAdapter.records) {
            if (record.CustomerID === customerID) {
                records[records.length] = record;
            }
        }
        const dataSource = {
            datafields: this.dataFields2,
            localdata: records
        }

        const adapter = new jqx.dataAdapter(dataSource);

        this.ordersGrid.current!.setOptions({ source: adapter });
    };
}

export default App;