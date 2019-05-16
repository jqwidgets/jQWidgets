import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myPanel = React.createRef<JqxPanel>();
    private pagingInfo = React.createRef<HTMLDivElement>();
    private eventsLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
        this.onPageSizeChanged = this.onPageSizeChanged.bind(this);

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

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'f2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    onPagechanged={this.onPageChanged} onPagesizechanged={this.onPageSizeChanged}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} sortable={true} columnsresize={true}
                    autoheight={true} selectionmode={'multiplerowsextended'} />

                <div ref={this.eventsLog} style={{ display: 'none', marginTop: '30px' }}>
                    <div style={{ float: 'left' }}>
                        Event Log:
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ border: 'none' }} width={300} height={300} />
                    </div>
                    <div style={{ float: 'left' }}>
                        Paging Details:
                        <div ref={this.pagingInfo} />
                    </div>
                </div>
            </div>
        );
    }

    private onPageChanged(event: any): void {
        this.eventsLog.current!.style.display = 'block';
        const loggedElements = document.getElementsByClassName('logged');
        if (loggedElements.length >= 5) {
            this.myPanel.current!.clearcontent();
        }
        const args = event.args;
        const eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';
        this.myPanel.current!.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        const paginginformation = this.myGrid.current!.getpaginginformation();
        this.pagingInfo.current!.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    }

    private onPageSizeChanged(event: any): void {
        this.eventsLog.current!.style.display = 'block';
        this.myPanel.current!.clearcontent();
        const args = event.args;
        const eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';
        this.myPanel.current!.prepend('<div style="margin-top: 5px">' + eventData + '</div>');
        // get page information.
        const paginginformation = this.myGrid.current!.getpaginginformation();
        this.pagingInfo.current!.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
    }
}

export default App;