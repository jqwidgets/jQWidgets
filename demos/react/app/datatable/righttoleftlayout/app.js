import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                localData: generatedata(200),
                dataType: "array",
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
                { text: 'Last Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
                { text: 'Product', editable: false, dataField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
                { text: 'Quantity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
                { text: 'Unit Price', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
                { text: 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsformat: 'c2' }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} altRows={true}
                pageable={true} sortable={true} rtl={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
