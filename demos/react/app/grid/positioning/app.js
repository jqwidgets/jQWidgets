import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.top.on('checked', () => {
            this.refs.myGrid.everpresentrowposition('top');
        });
        this.refs.bottom.on('checked', () => {
            this.refs.myGrid.everpresentrowposition('bottom');
        });
        this.refs.topAbove.on('checked', () => {
            this.refs.myGrid.everpresentrowposition('topAboveFilterRow');
        });
    }
    render() {
        let source =
            {
                localdata: generatedata(20),
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} filterable={true}
                    showeverpresentrow={true} showfilterrow={true} editable={true}
                    everpresentrowposition={'top'} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
                <br />
                <JqxRadioButton ref='top' checked={true}>Top Position</JqxRadioButton>
                <JqxRadioButton ref='topAbove'>Top Position Above Filter Row</JqxRadioButton>
                <JqxRadioButton ref='bottom'>Bottom Position</JqxRadioButton>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
