import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
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
                    validateEverPresentRowWidgetValue: (displayField, value, rowData) => {
                        if (value.length < 5) {
                            return { message: 'Entered value should be more than 5 characters', result: false };
                        }
                        return true;
                    }
                },
                { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
                { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
            ];

        let localization =
            {
                addrowstring: 'Apply',
                udpaterowstring: 'Update',
                deleterowstring: 'Delete',
                resetrowstring: 'Clear',
                everpresentrowplaceholder: 'Type: '
            };

        return (
            <JqxGrid
                width={850} source={dataAdapter} filterable={true}
                showeverpresentrow={true} everpresentrowposition={'top'}
                editable={true} localization={localization} columns={columns}
                selectionmode={'multiplecellsadvanced'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
