import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(500),
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
                { text: 'Name', columntype: 'textbox', datafield: 'name', width: '20%' },
                { text: 'Product', datafield: 'productname', width: '35%' },
                { text: 'Ship Date', datafield: 'date', filtertype: 'date', width: '30%', cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', width: '15%', cellsalign: 'right' }
            ];

        return (
            <JqxGrid
                width={'100%'} height={'100%'} source={dataAdapter}
                showfilterrow={true} filterable={true}
                columns={columns} selectionmode={'multiplecellsadvanced'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
