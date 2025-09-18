import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const pagingInfoLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => ({
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' },
        ],
        datatype: 'xml',
        id: 'm\\:properties>d\\:OrderID',
        pagenum: 3,
        pager: (pagenum: any, pagesize: any, oldpagenum: any): void => {},
        pagesize: 20,
        record: 'content',
        root: 'entry',
        url: 'orders.xml',
    }), []);

    const columns = useMemo(() => [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'f2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const myGridOnPageChanged = useCallback((event: any) => {
        if (document.getElementsByClassName('logged').length >= 5) {
            myPanel.current?.clearcontent();
        }
        const args = event.args;
        const eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';
        myPanel.current?.prepend('<div class="logged" style="margin-top: 5px">' + eventData + '</div>');
        const paginginformation = myGrid.current?.getpaginginformation();
        if (paginginformation && pagingInfoLog.current) {
            pagingInfoLog.current.innerHTML = '<div style="margin-top: 5px;">Page:' +
                paginginformation.pagenum + ', Page Size: ' +
                paginginformation.pagesize + ', Pages Count: ' +
                paginginformation.pagescount + '</div>';
        }
    }, []);

    const myGridOnPageSizeChanged = useCallback((event: any) => {
        myPanel.current?.clearcontent();
        const args = event.args;
        const eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';
        myPanel.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        const paginginformation = myGrid.current?.getpaginginformation();
        if (paginginformation && pagingInfoLog.current) {
            pagingInfoLog.current.innerHTML = '<div style="margin-top: 5px">Page:' +
                paginginformation.pagenum + ', Page Size: ' +
                paginginformation.pagesize + ', Pages Count: ' +
                paginginformation.pagescount + '</div>';
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onPagechanged={myGridOnPageChanged}
                onPagesizechanged={myGridOnPageSizeChanged}
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                sortable={true}
                pageable={true}
                autoheight={true}
                columnsresize={true}
                selectionmode={'multiplerowsextended'}
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ float: 'left' }}>
                    Event Log:
                    <JqxPanel
                        theme={'material-purple'}
                        ref={myPanel}
                        style={{ border: 'none' }}
                        width={300}
                        height={180}
                    />
                </div>
                <div style={{ float: 'left' }}>
                    Paging Details:
                    <div ref={pagingInfoLog} />
                </div>
            </div>
        </div>
    );
};

export default App;