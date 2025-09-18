import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxDataTable, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);

    const dateSource = useMemo(() => [
        'Short Date',
        'Long Date',
        'Long date, Short Time',
        'Long date, Long Time',
        'Month/Year',
        'Month/Day',
        'Custom'
    ], []);

    const numberSource = useMemo(() => [
        'n', 'f', 'f2', 'f3', 'c', 'c2', 'c3', 'p', 'p2', 'p3'
    ], []);

    const source = useMemo(() => {
        return new jqx.dataAdapter({
            dataFields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
            ],
            dataType: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        });
    }, []);

    const columns = useMemo(() => [
        { text: 'Shipped Date', dataField: 'ShippedDate', width: '50%', cellsFormat: 'D' },
        { text: 'Freight', dataField: 'Freight', width: '50%', cellsFormat: 'f2', cellsAlign: 'right' }
    ], []);

    const dateFormats = (event: any) => {
        const index = event.args.index;
        if (!myDataTable.current) return;
        switch (index) {
            case 0:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'd');
                break;
            case 1:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'D');
                break;
            case 2:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'f');
                break;
            case 3:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'F');
                break;
            case 4:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'Y');
                break;
            case 5:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'M');
                break;
            case 6:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                break;
        }
    };

    const cellsAlignment = (event: any) => {
        const index = event.args.index;
        if (!myDataTable.current) return;
        switch (index) {
            case 0:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'n');
                break;
            case 1:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'f');
                break;
            case 2:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'f2');
                break;
            case 3:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'f3');
                break;
            case 4:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'c');
                break;
            case 5:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'c2');
                break;
            case 6:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'c3');
                break;
            case 7:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'p');
                break;
            case 8:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'p2');
                break;
            case 9:
                myDataTable.current.setColumnProperty('Freight', 'cellsFormat', 'p3');
                break;
        }
    };

    return (
        <div>
            <JqxDataTable
                theme="material-purple"
                ref={myDataTable}
                width="100%"
                source={source}
                columns={columns}
                sortable={true}
                pageable={true}
                columnsResize={true}
            />
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', width: '600px', marginTop: '10px' }}>
                <div style={{ float: 'left', width: '300px' }}>
                    <h4>Shipped Date</h4>
                    <JqxDropDownList
                        theme="material-purple"
                        onChange={dateFormats}
                        height={25}
                        autoDropDownHeight={true}
                        selectedIndex={1}
                        source={dateSource}
                    />
                </div>
                <div style={{ float: 'left', width: '300px' }}>
                    <h4>Freight</h4>
                    <JqxDropDownList
                        theme="material-purple"
                        onChange={cellsAlignment}
                        height={25}
                        autoDropDownHeight={true}
                        selectedIndex={2}
                        source={numberSource}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;