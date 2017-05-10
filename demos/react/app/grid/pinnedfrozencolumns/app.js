import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName' },
                    { name: 'QuantityPerUnit' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'UnitsOnOrder', type: 'float' },
                    { name: 'ReorderLevel', type: 'float' },
                    { name: 'CategoryID', type: 'int' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: '../sampledata/products.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Product Name', datafield: 'ProductName', width: 250, pinned: true },
                { text: 'Category', datafield: 'CategoryID', width: 120, cellsalign: 'right' },
                { text: 'Quantity Per Unit', datafield: 'QuantityPerUnit', width: 200, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'UnitPrice', width: 120, cellsformat: 'c2', cellsalign: 'right' },
                { text: 'Units On Order', datafield: 'UnitsOnOrder', width: 120, cellsalign: 'right' },
                { text: 'Reorder Level', datafield: 'ReorderLevel', width: 120, cellsalign: 'right' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} sortable={true}
                    pageable={true} autoheight={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
