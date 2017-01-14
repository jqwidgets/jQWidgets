import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
  render () {
    let source =
    {
      dataType: "xml",
      dataFields: [
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
      { text: 'Supplier Name', cellsAlign: 'center', align: 'center', dataField: 'SupplierName', width: 250 },
      { text: 'Name', cellsAlign: 'center', align: 'center', dataField: 'ProductName', width: 250 },
      { text: 'Quantity', dataField: 'Quantity', cellsformat: 'd', cellsAlign: 'center', align: 'center', width: 120 },
      { text: 'Price', dataField: 'Price', cellsformat: 'c2', align: 'center', cellsAlign: 'center', width: 120 },
      { text: 'City', cellsAlign: 'center', align: 'center', dataField: 'City' }
    ];
    return (
      <JqxDataTable
        width={850} source={dataAdapter} altRows={true}
        pageable={true} filterable={true} columns={columns}
      />
    )
  }
}
//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
