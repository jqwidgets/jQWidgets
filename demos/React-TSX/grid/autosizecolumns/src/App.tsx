import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const myGrid = useRef<JqxGrid>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
        ],
        datatype: 'xml',
        id: 'm\\:properties>d\\:OrderID',
        record: 'content',
        root: 'entry',
        url: 'orders.xml'
    }), []);

    const columns = useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 50 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 30, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 30, cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 50 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const btnOnClick = React.useCallback(() => {
        myGrid.current?.autoresizecolumns();
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                width="100%"
                source={dataAdapter}
                columns={columns}
            />
            <div style={{ marginTop: '30px' }}>
                <JqxButton theme="material-purple" onClick={btnOnClick} width={140}>
                    Auto Resize Columns
                </JqxButton>
            </div>
        </div>
    );
}

export default App;