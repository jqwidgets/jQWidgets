import * as React from 'react';
import { useRef, useMemo, useCallback, useState } from 'react';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        datatype: 'xml',
        id: 'm\\:properties>d\\:OrderID',
        record: 'content',
        root: 'entry',
        url: 'orders.xml'
    }), []);

    const columns = useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ], []);

    const [dataAdapter] = useState(() => new jqx.dataAdapter(source));

    const myListOnSelect = useCallback((event: any) => {
        if (event.args.index === 0) {
            myGrid.current?.setOptions({ pagermode: 'default' });
        } else {
            myGrid.current?.setOptions({ pagermode: 'simple' });
        }
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                width="100%"
                source={dataAdapter}
                columns={columns}
                pageable
                sortable
                columnsresize
                autoheight
                pagermode="simple"
                selectionmode="multiplerowsextended"
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ float: 'left' }}>
                    Pager Settings:
                    <JqxDropDownList
                        theme="material-purple"
                        onSelect={myListOnSelect}
                        width={150}
                        height={25}
                        selectedIndex={1}
                        autoDropDownHeight
                        source={['Default', 'Simple']}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;