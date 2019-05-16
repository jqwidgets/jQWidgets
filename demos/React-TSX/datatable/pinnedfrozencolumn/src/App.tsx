import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source = {
            dataFields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
            ],
            dataType: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                { text: 'Ship Name', dataField: 'ShipName', pinned: true, width: 300 },
                { text: 'Ship City', dataField: 'ShipCity', width: 250 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 350 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', width: 250, cellsFormat: 'D' },
                { text: 'Freight', dataField: 'Freight', width: 100, cellsFormat: 'f2', cellsAlign: 'right' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source}
                columns={this.state.columns} pageable={true} sortable={true}
                columnsResize={true} pagerButtonsCount={10} />
        );
    }
}

export default App;