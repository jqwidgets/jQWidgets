import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' },
                ],
                id: 'id',
                url: '../sampledata/beverages.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', datafield: 'name', width: '30%' },
                { text: 'Beverage Type', datafield: 'type', width: '25%' },
                { text: 'Calories', datafield: 'calories', width: '15%' },
                { text: 'Total Fat', datafield: 'totalfat', width: '15%' },
                { text: 'Protein', datafield: 'protein', width: '15%' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
