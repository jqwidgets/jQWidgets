import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(200, true),
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', editable: false, datafield: 'firstname', width: 120 },
                { text: 'Last Name', editable: false, datafield: 'lastname', width: 120 },
                { text: 'Product', editable: false, datafield: 'productname', width: 180 },
                { text: 'Available', datafield: 'available', threestatecheckbox: true, columntype: 'checkbox', width: 70 },
                { text: 'Quantity', editable: false, datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', editable: false, datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', editable: false, datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} editable={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
