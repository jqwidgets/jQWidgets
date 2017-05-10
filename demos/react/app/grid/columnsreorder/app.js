import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('columnresized', (event) => {
            let column = event.args.columntext;
            let newindex = event.args.newindex
            let oldindex = event.args.oldindex;
            let log = document.getElementById('eventlog');
            log.innerHTML = 'Column: ' + column + ', ' + 'New Index: ' + newindex + ', Old Index: ' + oldindex;
        });
    }
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name' },
                    { name: 'type' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat' },
                    { name: 'protein' }
                ],
                id: 'id',
                url: '../sampledata/beverages.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', datafield: 'name', width: 200 },
                { text: 'Beverage Type', datafield: 'type', width: 200 },
                { text: 'Calories', datafield: 'calories', width: 100 },
                { text: 'Total Fat', datafield: 'totalfat' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} columnsresize={true}
                    columnsreorder={true} columns={columns}
                />
                <div style={{ marginTop: 30 }} id='eventlog' />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
