import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'tab',
                datafields: [
                    { name: 'Year', type: 'int' },
                    { name: 'HPI', type: 'float' },
                    { name: 'BuildCost', type: 'float' },
                    { name: 'Population', type: 'float' },
                    { name: 'Rate', type: 'float' }
                ],
                url: '../sampledata/homeprices.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Year', datafield: 'Year', width: 200 },
                { text: 'HPI', datafield: 'HPI', cellsformat: 'f2', width: 200 },
                { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2', width: 180 },
                { text: 'Population', datafield: 'Population', cellsformat: 'f2', width: 100 },
                { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} columnsresize={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
