import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'SupplierName', type: 'string' },
                    { name: 'Quantity', type: 'number' },
                    { name: 'OrderDate', type: 'date' },
                    { name: 'OrderAddress', type: 'string' },
                    { name: 'Freight', type: 'number' },
                    { name: 'Price', type: 'number' },
                    { name: 'City', type: 'string' },
                    { name: 'ProductName', type: 'string' },
                    { name: 'Address', type: 'string' }
                ],
                url: '../sampledata/orderdetailsextended.xml',
                root: 'DATA',
                record: 'ROW'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Supplier Name', cellsalign: 'center', align: 'center', datafield: 'SupplierName', width: 110 },
                { text: 'Name', columngroup: 'ProductDetails', cellsalign: 'center', align: 'center', datafield: 'ProductName', width: 120 },
                { text: 'Quantity', columngroup: 'ProductDetails', datafield: 'Quantity', cellsformat: 'd', cellsalign: 'center', align: 'center', width: 80 },
                { text: 'Freight', columngroup: 'OrderDetails', datafield: 'Freight', cellsformat: 'd', cellsalign: 'center', align: 'center', width: 100 },
                { text: 'Order Date', columngroup: 'OrderDetails', cellsalign: 'center', align: 'center', cellsformat: 'd', datafield: 'OrderDate', width: 100 },
                { text: 'Order Address', columngroup: 'OrderDetails', cellsalign: 'center', align: 'center', datafield: 'OrderAddress', width: 100 },
                { text: 'Price', columngroup: 'ProductDetails', datafield: 'Price', cellsformat: 'c2', align: 'center', cellsalign: 'center', width: 70 },
                { text: 'Address', columngroup: 'Location', cellsalign: 'center', align: 'center', datafield: 'Address', width: 120 },
                { text: 'City', columngroup: 'Location', cellsalign: 'center', align: 'center', datafield: 'City', width: 80 }
            ];

        let columngroups =
            [
                { text: 'Product Details', align: 'center', name: 'ProductDetails' },
                { text: 'Order Details', parentgroup: 'ProductDetails', align: 'center', name: 'OrderDetails' },
                { text: 'Location', align: 'center', name: 'Location' }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} pageable={true}
                autorowheight={true} altrows={true} columnsresize={true}
                columns={columns} columngroups={columngroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
