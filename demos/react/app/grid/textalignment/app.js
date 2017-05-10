import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.leftbutton.on('checked', () => {
            this.setAlignment('left');
        });
        this.refs.centerbutton.on('checked', () => {
            this.setAlignment('center');
        });
        this.refs.rightbutton.on('checked', () => {
            this.setAlignment('right');
        });
    }
    setAlignment(align) {
        this.refs.myGrid.beginupdate();
        for (let index = 0; index < this.columns().length; index++) {
            this.refs.myGrid.setcolumnproperty(this.columns()[index].datafield, 'align', align);
            this.refs.myGrid.setcolumnproperty(this.columns()[index].datafield, 'cellsalign', align);
        }
        this.refs.myGrid.endupdate();
    }
    columns() {
        let columns =
            [
                { text: 'First Name', datafield: 'firstname', width: 200, cellsalign: 'center', align: 'center' },
                { text: 'Last Name', datafield: 'lastname', width: 200, cellsalign: 'center', align: 'center' },
                { text: 'Product', datafield: 'productname', width: 180, cellsalign: 'center', align: 'center' },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'center', align: 'center' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'center', align: 'center', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'center', align: 'center', cellsformat: 'c2' }
            ];

        return columns;
    }
    render() {
        let source =
            {
                localdata: generatedata(200),
                datafields:
                [
                    { name: 'id', type: 'number' },
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
      
        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} columns={this.columns()}
                    selectionmode={'multiplecellsadvanced'}
                />
                <div>
                    <h3>Alignment</h3>
                    <JqxRadioButton style={{ float: 'left' }} ref='leftbutton' width={55}>Left</JqxRadioButton>
                    <JqxRadioButton style={{ float: 'left' }} ref='centerbutton' width={70} checked={true}>Center</JqxRadioButton>
                    <JqxRadioButton style={{ float: 'left' }} ref='rightbutton' width={70}>Right</JqxRadioButton>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
