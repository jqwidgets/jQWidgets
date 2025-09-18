import * as React from 'react';
import { useMemo, useRef } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const firstNames = useRef([
        'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
    ]);
    const lastNames = useRef([
        'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
    ]);
    const productNames = useRef([
        'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
    ]);
    const priceValues = useRef([
        '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
    ]);

    const generateData = React.useCallback((startindex: number, endindex: number) => {
        const data: any = {};
        for (let i = startindex; i < endindex; i++) {
            const row: any = {};
            const productindex = Math.floor(Math.random() * productNames.current.length);
            const price = parseFloat(priceValues.current[productindex]);
            const quantity = 1 + Math.round(Math.random() * 10);
            row['id'] = i;
            row['firstname'] = firstNames.current[Math.floor(Math.random() * firstNames.current.length)];
            row['lastname'] = lastNames.current[Math.floor(Math.random() * lastNames.current.length)];
            row['productname'] = productNames.current[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            data[i] = row;
        }
        return data;
    }, []);

    const totalcolumnrenderer = React.useCallback((row: number, column: any, cellvalue: any): string => {
        const newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
        return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
    }, []);

    const columns = useMemo((): IGridProps['columns'] => [
        { text: 'Id', datafield: 'id', width: 50 },
        { text: 'First Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsrenderer: totalcolumnrenderer, cellsalign: 'right' }
    ], [totalcolumnrenderer]);

    const rendergridrows = React.useCallback((params: any): any[] => {
        return generateData(params.startindex, params.endindex);
    }, [generateData]);

    const source = useMemo(() => {
        return new jqx.dataAdapter({
            datatype: 'array',
            localdata: {},
            totalrecords: 1000000
        });
    }, []);

    return (
        <JqxGrid theme={'material-purple'}
            width={'100%'}
            source={source}
            columns={columns}
            autoheight={true}
            virtualmode={true}
            pageable={true}
            rendergridrows={rendergridrows}
        />
    );
};

export default App;