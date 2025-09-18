import * as React from 'react';
import { useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

function App() {
    const source = useMemo(() => ({
        dataFields: [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        dataType: 'xml',
        id: 'OrderID',
        record: 'Order',
        root: 'Orders',
        url: 'orderdetails.xml'
    }), []);

    const columns = useMemo(
        () => [
            { text: 'Order ID', editable: false, dataField: 'OrderID', width: 100 },
            {
                align: 'right',
                cellsAlign: 'right',
                cellsFormat: 'f2',
                dataField: 'Freight',
                text: 'Freight',
                validation: (cell: any, value: number): any => {
                    if (value > 1000 || value < 0) {
                        return { message: 'Freight should be in the 0-1000 interval', result: false };
                    }
                    return true;
                },
                width: 100
            },
            {
                dataField: 'ShipCountry',
                text: 'Ship Country',
                validation: (cell: any, value: string): any => {
                    if (value.length < 5) {
                        return { message: 'Ship Country should be minimum 5 characters', result: false };
                    }
                    return true;
                },
                width: 150
            },
            {
                align: 'right',
                cellsAlign: 'right',
                cellsFormat: 'dd/MM/yyyy',
                dataField: 'ShippedDate',
                text: 'Shipped Date',
                validation: (cell: any, value: any): any => {
                    const date = new Date(value);
                    if (date.getFullYear() > 2014 || date.getFullYear() < 1990) {
                        return { message: 'Shipped Date should be in the 1990 - 2014 interval', result: false };
                    }
                    return true;
                }
            }
        ],
        []
    );

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <JqxDataTable
            theme="material-purple"
            width="100%"
            source={dataAdapter}
            columns={columns}
            altRows={true}
            pageable={true}
            sortable={true}
            editable={true}
            pagerButtonsCount={8}
        />
    );
}

export default App;