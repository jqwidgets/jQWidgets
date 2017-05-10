import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: "csv",
                datafields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: '../sampledata/nasdaq_vs_sp500.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
                { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
                { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} columnsresize={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
