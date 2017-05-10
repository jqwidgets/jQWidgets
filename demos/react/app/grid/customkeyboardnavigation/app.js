import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'csv',
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

        let handlekeyboardnavigation = (event) => {
            let key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
            if (key == 13) {
                alert('Pressed Enter Key.');
                return true;
            }
            else if (key == 27) {
                alert('Pressed Esc Key.');
                return true;
            }
        };

        return (
            <JqxGrid
                width={850} source={dataAdapter} columnsresize={true}
                editable={true} editmode={'selectedcell'}
                selectionmode={'selectedcell'} columns={columns}
                handlekeyboardnavigation={handlekeyboardnavigation}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
