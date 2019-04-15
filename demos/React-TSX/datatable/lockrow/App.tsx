import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();

    constructor(props: {}) {
        super(props);
        this.tableOnBindingComplete = this.tableOnBindingComplete.bind(this);

        const source = {
            dataFields: [
                { name: 'OrderID', type: 'int' },
                { name: 'Freight', type: 'float' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'xml',
            id: 'OrderID',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };

        this.state = {
            columns: [
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 250 },
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'} ref={this.myDataTable} onBindingComplete={this.tableOnBindingComplete}
                // @ts-ignore 
                width={'100%'} source={this.state.source}
                columns={this.state.columns} pageable={true} editable={true}
                sortable={true} altRows={true} pagerButtonsCount={8} />
        );
    }

    private tableOnBindingComplete(): void {
        this.myDataTable.current!.beginUpdate();
        this.myDataTable.current!.lockRow(1);
        this.myDataTable.current!.lockRow(3);
        this.myDataTable.current!.lockRow(5);
        this.myDataTable.current!.endUpdate();
    }
}

export default App;