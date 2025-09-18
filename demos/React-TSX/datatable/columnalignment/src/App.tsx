import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxDataTable, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);

    const dropDownsSource = useMemo(() => ['Left', 'Center', 'Right'], []);
    const columns = useMemo(() => [
        { text: 'Shipped Date', dataField: 'ShippedDate', width: '50%', cellsFormat: 'D' },
        { text: 'Freight', dataField: 'Freight', width: '50%', cellsFormat: 'f2' }
    ], []);

    const source = useMemo(() => {
        const src: any = {
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
        };
        return new jqx.dataAdapter(src);
    }, []);

    const columnAlignment = React.useCallback((event: any) => {
        const index = event.args.index;
        if (!myDataTable.current) return;
        switch (index) {
            case 0:
                myDataTable.current.setColumnProperty('ShippedDate', 'align', 'left');
                myDataTable.current.setColumnProperty('Freight', 'align', 'left');
                break;
            case 1:
                myDataTable.current.setColumnProperty('ShippedDate', 'align', 'center');
                myDataTable.current.setColumnProperty('Freight', 'align', 'center');
                break;
            case 2:
                myDataTable.current.setColumnProperty('ShippedDate', 'align', 'right');
                myDataTable.current.setColumnProperty('Freight', 'align', 'right');
                break;
        }
    }, []);

    const cellsAlignment = React.useCallback((event: any) => {
        const index = event.args.index;
        if (!myDataTable.current) return;
        switch (index) {
            case 0:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsAlign', 'left');
                myDataTable.current.setColumnProperty('Freight', 'cellsAlign', 'left');
                break;
            case 1:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsAlign', 'center');
                myDataTable.current.setColumnProperty('Freight', 'cellsAlign', 'center');
                break;
            case 2:
                myDataTable.current.setColumnProperty('ShippedDate', 'cellsAlign', 'right');
                myDataTable.current.setColumnProperty('Freight', 'cellsAlign', 'right');
                break;
        }
    }, []);

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
                    <h4>Column Alignment</h4>
                    <JqxDropDownList
                        theme="material-purple"
                        onChange={columnAlignment}
                        height={25}
                        autoDropDownHeight={true}
                        selectedIndex={0}
                        source={dropDownsSource}
                    />
                </div>
                <div style={{ float: 'left', width: '300px' }}>
                    <h4>Cells Alignment</h4>
                    <JqxDropDownList
                        theme="material-purple"
                        onChange={cellsAlignment}
                        height={25}
                        autoDropDownHeight={true}
                        selectedIndex={0}
                        source={dropDownsSource}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;