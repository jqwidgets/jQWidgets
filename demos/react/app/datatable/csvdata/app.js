import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'csv',
                dataFields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: '../sampledata/nasdaq_vs_sp500.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Date', dataField: 'Date', cellsFormat: 'D', width: 250 },
                { text: 'S&P 500', dataField: 'S&P 500', width: 300, cellsFormat: 'f' },
                { text: 'NASDAQ', dataField: 'NASDAQ', cellsFormat: 'f' }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} columnsResize={true}
                pageable={true} pagerButtonsCount={10} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
