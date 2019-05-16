import * as React from 'react';
 


import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.myListOnSelect = this.myListOnSelect.bind(this);

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
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>

                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} sortable={true} columnsresize={true}
                    autoheight={true} pagermode={'simple'} selectionmode={'multiplerowsextended'} />

                <div style={{ marginTop: '30px' }}>
                    <div style={{ float: 'left' }}>
                        Pager Settings:
                        <JqxDropDownList theme={'material-purple'} onSelect={this.myListOnSelect}
                            width={150} height={25} selectedIndex={1}
                            autoDropDownHeight={true} source={['Default', 'Simple']} />
                    </div>
                </div>
            </div>
        );
    }

    private myListOnSelect(event: any): void {
        if (event.args.index === 0) {
            this.myGrid.current!.setOptions({ pagermode: 'default' });
        }
        else {
            this.myGrid.current!.setOptions({ pagermode: 'simple' });
        }
    };
}

export default App;