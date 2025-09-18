import * as React from 'react';
import { useRef, useMemo, useState, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const ordersGrid = useRef<JqxGrid>(null);

    const dataFields2 = useMemo(
        () => [
            { name: 'CustomerID' },
            { name: 'OrderID' },
            { name: 'OrderDate', type: 'date' },
            { name: 'ShippedDate', type: 'date' },
            { name: 'ShipName' },
            { name: 'ShipCountry' }
        ],
        []
    );

    const source2 = useMemo(
        () => ({
            datafields: dataFields2,
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
        }),
        [dataFields2]
    );

    const dataAdapter2 = useMemo(() => new jqx.dataAdapter(source2, { autoBind: true }), [source2]);

    const customerColumns = useMemo<IGridProps['columns']>(() => [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'Contact Name', datafield: 'ContactName', width: 150 },
        { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Country', datafield: 'Country' }
    ], []);

    const orderColumns = useMemo<IGridProps['columns']>(() => [
        { text: 'OrderID', datafield: 'OrderID', width: 100 },
        { text: 'OrderDate', datafield: 'OrderDate', cellsformat: 'd', width: 150 },
        { text: 'Shipped Date', datafield: 'ShippedDate', cellsformat: 'd', width: 150 },
        { text: 'Ship Name', datafield: 'ShipName' }
    ], []);

    const customerSource = useMemo(
        () =>
            new jqx.dataAdapter({
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
            }),
        []
    );

    const [orderGridSource, setOrderGridSource] = useState<any>(new jqx.dataAdapter({ datafields: dataFields2, localdata: [] }));

    const customersGridOnRowSelect = useCallback((event: any) => {
        const customerID = event.args.row.CustomerID;
        const records = [];
        for (const record of dataAdapter2.records) {
            if (record.CustomerID === customerID) {
                records.push(record);
            }
        }
        const dataSource = {
            datafields: dataFields2,
            localdata: records
        };
        const adapter = new jqx.dataAdapter(dataSource);
        if (ordersGrid.current) {
            ordersGrid.current.setOptions({ source: adapter });
        }
        setOrderGridSource(adapter);
    }, [dataFields2, dataAdapter2]);

    return (
        <div>
            <h3>Customers</h3>
            <JqxGrid
                theme="material-purple"
                onRowselect={customersGridOnRowSelect}
                width="100%"
                height={250}
                source={customerSource}
                keyboardnavigation={false}
                columns={customerColumns}
            />
            <h3>Orders by Customer</h3>
            <JqxGrid
                theme="material-purple"
                ref={ordersGrid}
                width="100%"
                height={250}
                keyboardnavigation={false}
                columns={orderColumns}
                source={orderGridSource}
            />
        </div>
    );
};

export default App;