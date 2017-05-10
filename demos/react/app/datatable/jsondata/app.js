import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: '../sampledata/beverages.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', dataField: 'name', width: 300 },
                { text: 'Beverage Type', dataField: 'type', width: 300 },
                { text: 'Calories', dataField: 'calories', width: 180 },
                { text: 'Total Fat', dataField: 'totalfat', width: 120 },
                { text: 'Protein', dataField: 'protein' }
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
