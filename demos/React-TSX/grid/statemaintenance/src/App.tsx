import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private gridState: any;

    constructor(props: {}) {
        super(props);
        this.saveStatebtn = this.saveStatebtn.bind(this);
        this.loadStateBtn = this.loadStateBtn.bind(this);

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

        this.state = {
            columns: [
                { text: 'Ship Name', filtercondition: 'STARTS_WITH', datafield: 'ShipName', width: 250 },
                { text: 'Ship City', datafield: 'ShipCity', width: 200 },
                { text: 'Ship Country', datafield: 'ShipCountry' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} sortable={true} altrows={true} filterable={true}
                    columnsreorder={true} autoloadstate={true} autosavestate={true}
                    autoheight={true} editable={true} columnsresize={true}
                    showfilterrow={true} selectionmode={'multiplerowsextended'} />

                <div style={{ marginTop: '30px', float: 'left' }}>
                    <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={this.saveStatebtn}>Save State</JqxButton>
                    <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={this.loadStateBtn}>Load State</JqxButton>
                </div>
            </div>
        );
    }

    private saveStatebtn(): void {
        this.gridState = this.myGrid.current!.savestate();
    };

    private loadStateBtn(): void {
        if (this.state) {
            this.myGrid.current!.loadstate(this.gridState);
        }
        else {
            this.myGrid.current!.loadstate({});
        }
    };
}

export default App;