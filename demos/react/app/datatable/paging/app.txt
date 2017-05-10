import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
  render () {
    let source =
    {
        localData: generatedata(200),
        dataType: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ]
    };

    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'Name', dataField: 'firstname', width: 150 },
      { text: 'Last Name', dataField: 'lastname', width: 150 },
      { text: 'Product', editable: false, dataField: 'productname', width: 250 },
      { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
      { text: 'Unit Price', dataField: 'price', width: 80, cellsalign: 'right', cellsFormat: 'c2' },
      { text: 'Total', dataField: 'total', cellsalign: 'right', cellsFormat: 'c2' }
    ];

    return (
    <JqxDataTable
      width={850} source={dataAdapter} altRows={true}
      pageable={true} pagerMode={'advanced'} columns={columns}
    />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
