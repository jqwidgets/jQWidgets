import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let data = generatedata(200);

        let source =
            {
                localData: data,
                dataType: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                updateRow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 90 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 90 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'Quantity', datafield: 'quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n2' },
                {
                    text: 'Price', datafield: 'price', cellsAlign: 'right', align: 'right', cellsFormat: 'c2',
                    aggregates:
                    [{
                        'Total':
                        (aggregatedValue, currentValue, column, record) => {
                            let total = currentValue * parseInt(record['quantity']);
                            return aggregatedValue + total;
                        }
                    }],
                    aggregatesRenderer: (aggregates, column, element) => {
                        let renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                        renderString += '<strong>Total: </strong>' + aggregates.Total + '</div>';
                        return renderString;
                    }
                }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} altRows={true}
                pageable={true} showAggregates={true} columns={columns}
                pagerButtonsCount={10} aggregatesHeight={25}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
