import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(85, false),
            sortcolumn: 'firstname',
            sortdirection: 'asc'
        };

        this.state = {
            columns: [
                { text: 'Name', dataField: 'firstname', width: 200 },
                { text: 'Last Name', dataField: 'lastname', width: 200 },
                { text: 'Product', editable: false, dataField: 'productname', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
                { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }


    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                altRows={true} pageable={true} sortable={true} />
        );
    }
}

export default App;