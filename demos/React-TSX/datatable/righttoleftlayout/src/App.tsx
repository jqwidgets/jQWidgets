import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(200, false),
        };

        this.state = {
            columns: [
                { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
                { text: 'Last Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
                { text: 'Product', editable: false, dataField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
                { text: 'Unit Price', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
                { text: 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsFormat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                altRows={true} pageable={true} sortable={true} rtl={true} />
        );
    }
}

export default App;