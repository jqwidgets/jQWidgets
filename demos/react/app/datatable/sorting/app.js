import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
  render () {
    let source =
    {
        localdata: generatedata(85),
        datatype: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        sortcolumn: 'firstname',
        sortdirection: 'asc'
    };

    let dataAdapter = new $.jqx.dataAdapter(source);

    let  columns =
    [
      { text: 'Name', dataField: 'firstname', width: 200 },
      { text: 'Last Name', dataField: 'lastname', width: 200 },
      { text: 'Product', editable: false, dataField: 'productname', width: 180 },
      { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
      { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
      { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
    ];

    return (
      <JqxDataTable
        width={850} source={dataAdapter} altRows={true}
        pageable={true} sortable={true} columns={columns}
      />
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
