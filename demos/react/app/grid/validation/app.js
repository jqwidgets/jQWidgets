import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.top.on('checked', () => {
            this.refs.myGrid.everpresentrowactions('add reset');
        });
        this.refs.bottom.on('checked', () => {
            this.refs.myGrid.everpresentrowactions('addBottom reset');
        });
    }
    validateFunc(datafield, value) {
        switch (datafield) {
            case 'name':
                if (value.length < 5) {
                    return { message: 'Entered value should be more than 5 characters', result: false };
                }
                return true;
            case 'productname':
                if (value.length == 0) {
                    return { message: 'Entered field should be more than 0 characters', result: false };
                }
                return true;
                break;
            case 'quantity':
                if (value < 0) {
                    return { message: 'Entered quantity should be positive number', result: false };
                }
                return true;
                break;
            case 'date':
                if (new Date(value) == 'Invalid Date') {
                    return { message: 'Entered date should be valid', result: false };
                }
                return true;
                break;
        }
        return true;
    }
    render() {
        let source =
            {
                localdata: generatedata(10),
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
                {
                    text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
                    validateEverPresentRowWidgetValue: this.validateFunc
                },
                {
                    text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
                    validateEverPresentRowWidgetValue: this.validateFunc
                },
                {
                    text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
                    validateEverPresentRowWidgetValue: this.validateFunc
                },
                {
                    text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
                    validateEverPresentRowWidgetValue: this.validateFunc
                }
            ];

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} filterable={true}
                    showeverpresentrow={true} editable={true}
                    everpresentrowposition={'top'} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
                <br />
                <JqxRadioButton ref='top' checked={true}>Add New Row to Top</JqxRadioButton>
                <JqxRadioButton ref='bottom'>Add New Row to Bottom</JqxRadioButton>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
