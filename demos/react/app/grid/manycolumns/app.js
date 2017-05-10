import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let data = new Array();
        let columns = new Array();
        let datafields = new Array();

        for (let i = 0; i < 200; i++) {
            let row = {};
            for (let j = 0; j < 200; j++) {
                row['Name' + j] = 'Cell ' + (1 + i) + '.' + (1 + j);
                if (i == 0) {
                    columns.push({ datafield: 'Name' + j, text: 'Column ' + (1 + j), width: 100 });
                    datafields.push({ name: 'Name' + j, type: 'string' });
                }
            }
            data[i] = row;
        }

        let source =
            {
                localdata: data,
                datatype: 'array',
                datafields: datafields
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        return (
            <JqxGrid
                width={850} source={dataAdapter} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
