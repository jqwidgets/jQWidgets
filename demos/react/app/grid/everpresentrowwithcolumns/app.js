import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(10),
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' },
                { text: '', datafield: 'addButtonColumn', width: 50 },
                { text: '', datafield: 'resetButtonColumn', width: 50 }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} columns={columns}
                showeverpresentrow={true} everpresentrowposition={'top'}
                everpresentrowactions={'add reset'} everpresentrowactionsmode={'columns'}
                editable={true} filterable={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
