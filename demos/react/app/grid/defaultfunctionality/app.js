import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
  render () {
    let source =
    {
        datatype: "xml",
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: "Products",
        record: "Product",
        id: 'ProductID',
        url: "../sampledata/products.xml"
    };
    let cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    }
    let dataAdapter = new $.jqx.dataAdapter(source);


    let columns =
    [
      { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
      { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
      { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
      { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
      { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
    ];

    let columngroups =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ];
    return (
      <JqxGrid
        width={850} source={dataAdapter} pageable={true}
        sortable={true} altrows={true} enabletooltips={true}
        autoheight={true} editable={true} columns={columns}
        selectionmode={'multiplecellsadvanced'} columngroups={columngroups}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
