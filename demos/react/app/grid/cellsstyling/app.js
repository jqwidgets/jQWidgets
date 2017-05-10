import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: '../sampledata/products.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let cellclass = (row, columnfield, value) => {
            if (value < 20) {
                return 'red';
            }
            else if (value >= 20 && value < 50) {
                return 'yellow';
            }
            else return 'green';
        }

        let columns =
            [
                { text: 'Product Name', datafield: 'ProductName', width: 250 },
                { text: 'Quantity per Unit', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 120 },
                { text: 'Unit Price', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 100 },
                { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellclassname: cellclass, width: 100 },
                { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} pageable={true}
                    autoheight={true} sortable={true} altrows={true}
                    enabletooltips={true} editable={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
