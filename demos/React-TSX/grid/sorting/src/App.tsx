import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);

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
        id: { name: 'OrderID', map: 'm\\:properties>d\\:OrderID' },
        record: 'content',
        root: 'entry',
        sortcolumn: 'ShipName',
        sortdirection: 'asc',
        url: 'orders.xml'
    }), []);

    const columns = useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
        { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const myGridOnSort = useCallback((event: any) => {
        myPanel.current?.clearcontent();
        const sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
        if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
            sortdirection = 'null';
        }
        const eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
        myPanel.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }, []);

    const removeSortBtnOnClick = useCallback(() => {
        myGrid.current?.removesort();
    }, []);

    const sortBackGroundBtn = useCallback((event: any) => {
        myGrid.current?.setOptions({ showsortcolumnbackground: event.args.checked });
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onSort={myGridOnSort}
                width={'100%'}
                height={450}
                source={dataAdapter}
                columns={columns}
                sortable={true}
                altrows={true}
                filterable={true}
                selectionmode={'multiplecellsadvanced'}
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ float: 'left', marginRight: '10px' }}>
                    <JqxButton
                        theme={'material-purple'}
                        onClick={removeSortBtnOnClick}
                        height={20}
                    >
                        Remove Sort
                    </JqxButton>
                    <div style={{ marginTop: '10px' }} />
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={sortBackGroundBtn}
                        height={25}
                        checked={true}
                    >
                        Sort Background
                    </JqxCheckBox>
                </div>
                <div style={{ marginLeft: '100px', float: 'left' }}>
                    Event Log:
                    <JqxPanel
                        theme={'material-purple'}
                        ref={myPanel}
                        style={{ border: 'none' }}
                        width={300}
                        height={80}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;