import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const pagingInfo = useRef<HTMLDivElement>(null);
    const eventsLog = useRef<HTMLDivElement>(null);

    const source: any = {
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
    };

    const [gridProps] = useState<IGridProps>({
        columns: [
            { text: 'Ship Name', datafield: 'ShipName', width: 250 },
            { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
            { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'f2', cellsalign: 'right' },
            { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
            { text: 'Ship City', datafield: 'ShipCity', width: 100 },
            { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
        ],
        source: new jqx.dataAdapter(source)
    });

    const onPageChanged = useCallback((event: any) => {
        if (eventsLog.current) eventsLog.current.style.display = 'block';
        const loggedElements = document.getElementsByClassName('logged');
        if (loggedElements.length >= 5 && myPanel.current) {
            myPanel.current.clearcontent();
        }
        const args = event.args;
        const eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';
        if (myPanel.current) {
            myPanel.current.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        }
        if (myGrid.current && pagingInfo.current) {
            const paginginformation = myGrid.current.getpaginginformation();
            pagingInfo.current.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
        }
    }, []);

    const onPageSizeChanged = useCallback((event: any) => {
        if (eventsLog.current) eventsLog.current.style.display = 'block';
        if (myPanel.current) {
            myPanel.current.clearcontent();
        }
        const args = event.args;
        const eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';
        if (myPanel.current) {
            myPanel.current.prepend('<div style="margin-top: 5px">' + eventData + '</div>');
        }
        if (myGrid.current && pagingInfo.current) {
            const paginginformation = myGrid.current.getpaginginformation();
            pagingInfo.current.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onPagechanged={onPageChanged}
                onPagesizechanged={onPageSizeChanged}
                // @ts-ignore
                width={'100%'}
                source={gridProps.source}
                columns={gridProps.columns}
                pageable={true}
                sortable={true}
                columnsresize={true}
                autoheight={true}
                selectionmode={'multiplerowsextended'}
            />
            <div ref={eventsLog} style={{ display: 'none', marginTop: '30px' }}>
                <div style={{ float: 'left' }}>
                    Event Log:
                    <JqxPanel theme={'material-purple'} ref={myPanel} style={{ border: 'none' }} width={300} height={300} />
                </div>
                <div style={{ float: 'left' }}>
                    Paging Details:
                    <div ref={pagingInfo} />
                </div>
            </div>
        </div>
    );
};

export default App;