import React, { useRef, useMemo, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const source = useMemo(() => ({
        async: false,
        datafields: [
            { name: 'FirstName' },
            { name: 'LastName' },
            { name: 'Title' },
            { name: 'Address' },
            { name: 'City' }
        ],
        datatype: 'xml',
        id: 'EmployeeID',
        record: 'Employee',
        root: 'Employees',
        url: 'employees.xml'
    }), []);

    const ordersDetailsSource = useMemo(() => ({
        async: false,
        datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        datatype: 'xml',
        record: 'Order',
        root: 'Orders',
        url: 'orderdetails.xml'
    }), []);

    const ordersDataAdapter = useMemo(
        () => new jqx.dataAdapter(ordersDetailsSource, { autoBind: true }),
        [ordersDetailsSource]
    );

    const photoRenderer = useCallback((row: number, column: any, value: string, defaultHTML: string, columnData: any, rowData: any): string => {
        const name = rowData.FirstName;
        const imgurl = 'https://www.jqwidgets.com/react/images/' + name.toLowerCase() + '.png';
        const img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
        return img;
    }, []);

    const renderer = useCallback((row: number, column: any, value: string): string => {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }, []);

    const nestedGrids: any[] = [];

    const initrowdetails = useCallback((index: number, parentElement: any, gridElement: any, record: any): void => {
        const id = record.uid.toString();
        const nestedGridContainer = parentElement.children[0];
        nestedGrids[index] = nestedGridContainer;
        const filtergroup = new jqx.filter();
        const filtervalue = id;
        const filtercondition = 'equal';
        const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        const orders = ordersDataAdapter.records;
        const ordersbyid = [];
        for (const order of orders) {
            const result = filter.evaluate(order.EmployeeID);
            if (result) {
                ordersbyid.push(order);
            }
        }
        const ordersSource = {
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        };
        const nestedGridAdapter = new jqx.dataAdapter(ordersSource);

        if (nestedGridContainer != null) {
            const columns: IGridProps['columns'] = [
                { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
            ];
            ReactDOM.render(
                <JqxGrid theme={'material-purple'} width={780} height={200} source={nestedGridAdapter} columns={columns} />,
                document.getElementById(nestedGridContainer.id)
            );
        }
    }, [ordersDataAdapter]);

    const ready = useCallback(() => {
        setTimeout(() => {
            myGrid.current && myGrid.current.showrowdetails(1);
        });
    }, []);

    const columns = useMemo<IGridProps['columns']>(() => [
        { text: 'Photo', width: 50, cellsrenderer: photoRenderer },
        { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: renderer },
        { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: renderer },
        { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: renderer },
        { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: renderer },
        { text: 'City', datafield: 'City', width: 170, cellsrenderer: renderer }
    ], [photoRenderer, renderer]);

    const rowdetailstemplate = useMemo(() => ({
        rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>',
        rowdetailsheight: 220,
        rowdetailshidden: true
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxGrid
            theme="material-purple"
            ref={myGrid}
            // @ts-ignore
            width="100%"
            height={365}
            source={dataAdapter}
            columns={columns}
            rowdetails={true}
            rowsheight={35}
            initrowdetails={initrowdetails}
            ready={ready}
            rowdetailstemplate={rowdetailstemplate}
        />
    );
};

export default App;