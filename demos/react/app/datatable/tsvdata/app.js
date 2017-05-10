import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

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
                { text: 'Year', dataField: 'Year', width: 200 },
                { text: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
                { text: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
                { text: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
                { text: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
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
