import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'SupplierName', type: 'string' },
                { name: 'Quantity', type: 'number' },
                { name: 'OrderDate', type: 'date' },
                { name: 'OrderAddress', type: 'string' },
                { name: 'Freight', type: 'number' },
                { name: 'Price', type: 'number' },
                { name: 'City', type: 'string' },
                { name: 'ProductName', type: 'string' },
                { name: 'Address', type: 'string' }
            ],
            dataType: 'xml',
            record: 'ROW',
            root: 'DATA',
            url: 'orderdetailsextended.xml',
        };

        this.state = {
            columns: [
                { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 250 },
                { text: 'Name', columnGroup: 'ProductDetails', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 250 },
                { text: 'Quantity', columnGroup: 'ProductDetails', dataField: 'Quantity', cellsFormat: 'd', cellsAlign: 'center', align: 'center', width: 80 },
                { text: 'Price', columnGroup: 'ProductDetails', dataField: 'Price', cellsFormat: 'c2', align: 'center', cellsAlign: 'center', width: 70 },
                { text: 'Address', columnGroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'Address', width: 120 },
                { text: 'City', columnGroup: 'Location', cellsAlign: 'center', align: 'center', dataField: 'City' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }


    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} height={400} source={this.state.source}
                columns={this.state.columns} altRows={true} pageable={true}
                filterable={true} pagerButtonsCount={10} filterMode={'simple'} />
        );
    }
}

export default App;