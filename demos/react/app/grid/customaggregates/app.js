import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 150 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 150 },
                { text: 'Product', datafield: 'productname', width: 200 },
                { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right', cellsformat: 'n2' },
                {
                    text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: [{
                        '<b>Total</b>':
                        (aggregatedValue, currentValue, column, record) => {
                            let total = currentValue * parseInt(record['quantity']);
                            return aggregatedValue + total;
                        }
                    }]
                }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} showstatusbar={true}
                altrows={true} showaggregates={true} statusbarheight={25}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
