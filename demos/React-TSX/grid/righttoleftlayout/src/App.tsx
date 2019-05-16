import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

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
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',     
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250, align: 'right', cellsalign: 'right' },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, align: 'right', cellsalign: 'right', cellsformat: 'yyyy-MM-dd' },
                { text: 'Freight', datafield: 'Freight', width: 80, align: 'right', cellsformat: 'f2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', align: 'right', width: 350, cellsalign: 'right' },
                { text: 'Ship City', datafield: 'ShipCity', width: 100, align: 'right', cellsalign: 'right' },
                { text: 'Ship Country', datafield: 'ShipCountry', align: 'right', cellsalign: 'right' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={450} source={this.state.source}
                columns={this.state.columns} rtl={true} />

        );
    }
}

export default App;