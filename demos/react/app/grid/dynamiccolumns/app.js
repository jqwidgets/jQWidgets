import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                url: '../sampledata/rows_and_columns.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source, {
            autoBind: true,
            downloadComplete: (data) => {
                let columns = data[0].columns;
                let rows = data[1].rows;
                let gridAdapter = new $.jqx.dataAdapter({
                    datafields: [
                        { name: 'id', type: 'number' },
                        { name: 'name', type: 'string' },
                        { name: 'type', type: 'string' },
                        { name: 'calories', type: 'int' },
                        { name: 'totalfat', type: 'string' },
                        { name: 'protein', type: 'string' }
                    ],
                    id: 'id',
                    localdata: rows
                });

                this.refs.myGrid.hideloadelement();
                this.refs.myGrid.beginupdate(true);
                this.refs.myGrid.setOptions
                    ({
                        source: gridAdapter,
                        columns: columns
                    });
                this.refs.myGrid.endupdate();
            }
        }
        );

        return (
            <JqxGrid ref='myGrid' width={850} columnsresize={true} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
