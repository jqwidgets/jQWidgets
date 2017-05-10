import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.clearFilteringButton.on('click', () => {
            this.refs.myGrid.clearfilters();
        });
    }
    render() {
        let data = generatedata(500);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'range', map: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Name', columntype: 'textbox', filtercondition: 'starts_with', datafield: 'name', width: '30%' },
                { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
                { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} showfilterrow={true}
                    filterable={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
                <JqxButton style={{ marginTop: 10 }} value='Remove Filter' ref='clearFilteringButton' height={25} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
