import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('columnresized', (event) => {
            let column = event.args.columntext;
            let newwidth = event.args.newwidth
            let oldwidth = event.args.oldwidth;
            let log = document.getElementById('eventlog');
            log.innerHTML = 'Column: ' + column + ', ' + 'New Width: ' + newwidth + ', Old Width: ' + oldwidth;
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(),
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: 'array'

            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 100 },
                { text: 'Last Name', datafield: 'lastname', width: 100 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', minwidth: 100, resizable: false, width: 'auto', cellsalign: 'right', cellsformat: 'c2' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} columnsresize={true} columns={columns}
                />
                <div style={{ marginTop: 30 }} id='eventlog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
