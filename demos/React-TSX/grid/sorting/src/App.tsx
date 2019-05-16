import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.myGridOnSort = this.myGridOnSort.bind(this);
        this.removeSortBtnOnClick = this.removeSortBtnOnClick.bind(this);
        this.sortBackGroundBtn = this.sortBackGroundBtn.bind(this);

        const source: any = {

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
        };

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
                { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'f2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid} onSort={this.myGridOnSort}
                    // @ts-ignore
                    width={'100%'} height={450} source={this.state.source} columns={this.state.columns}
                    sortable={true} altrows={true} filterable={true} selectionmode={'multiplecellsadvanced'} />

                <div style={{ marginTop: '30px' }}>
                    <div style={{ float: 'left', marginRight: '10px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.removeSortBtnOnClick} height={20}>Remove Sort</JqxButton>
                        <div style={{ marginTop: '10px' }} />
                        <JqxCheckBox theme={'material-purple'} onChange={this.sortBackGroundBtn} height={25} checked={true}>Sort Background</JqxCheckBox>
                    </div>

                    <div style={{ marginLeft: '100px', float: 'left' }}>
                        Event Log:
                        <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ border: 'none' }} width={300} height={80} />
                    </div>
                </div>
            </div>
        );
    }

     private myGridOnSort(event: any): void {
        this.myPanel.current!.clearcontent();
        const sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
        if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
            sortdirection = 'null';
        }
        const eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
     };

    private removeSortBtnOnClick(): void {
        this.myGrid.current!.removesort();
    }; 

    private sortBackGroundBtn(event: any): void {
        this.myGrid.current!.setOptions({ showsortcolumnbackground: event.args.checked });
    };
}

export default App;