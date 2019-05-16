import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);

        const source: any =
        {
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
        };

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 50 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 30, cellsformat: 'D' },
                { text: 'Freight', datafield: 'Freight', width: 30, cellsformat: 'f2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 50 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
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
                    width={'100%'} source={this.state.source} columns={this.state.columns} />

                <div style={{ marginTop: '30px' }}>
                    <JqxButton theme={'material-purple'} onClick={this.btnOnClick} width={140}>Auto Resize Columns</JqxButton>
                </div>
            </div>
        );
    }

    private btnOnClick(): void {
        this.myGrid.current!.autoresizecolumns();
    }
}

export default App;