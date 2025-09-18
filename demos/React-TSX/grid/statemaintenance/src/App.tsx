import * as React from 'react';
import { useRef, useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const gridStateRef = useRef<any>(null);

    const source: any = {
        datafields: [
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        datatype: 'xml',
        id: 'm\\:properties>d\\:OrderID',
        record: 'content',
        root: 'entry',
        url: 'orders.xml'
    };

    const [columns] = useState([
        { text: 'Ship Name', filtercondition: 'STARTS_WITH', datafield: 'ShipName', width: 250 },
        { text: 'Ship City', datafield: 'ShipCity', width: 200 },
        { text: 'Ship Country', datafield: 'ShipCountry' }
    ]);
    const [dataAdapter] = useState(new jqx.dataAdapter(source));

    const saveStatebtn = () => {
        gridStateRef.current = myGrid.current!.savestate();
    };

    const loadStateBtn = () => {
        if (gridStateRef.current) {
            myGrid.current!.loadstate(gridStateRef.current);
        } else {
            myGrid.current!.loadstate({});
        }
    };

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                pageable={true}
                sortable={true}
                altrows={true}
                filterable={true}
                columnsreorder={true}
                autoloadstate={true}
                autosavestate={true}
                autoheight={true}
                editable={true}
                columnsresize={true}
                showfilterrow={true}
                selectionmode={'multiplerowsextended'}
            />
            <div style={{ marginTop: '30px', float: 'left' }}>
                <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={saveStatebtn}>Save State</JqxButton>
                <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={loadStateBtn}>Load State</JqxButton>
            </div>
        </div>
    );
};

export default App;