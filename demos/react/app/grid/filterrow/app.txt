import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.Button.on('click', () => {
      this.refs.Grid.clearfilters();
    });
  }
  render() {
    let data = generatedata(500);
    let source =
    {
        localdata: data,
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date'},
            { name: 'quantity', type: 'number' }
        ],
        datatype: "array"
    };
    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
      { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
      { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
      { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
      { text: 'Qty.', datafield: 'quantity', filtertype: 'number',  cellsalign: 'right' }
    ];
   return (
     <div>
       <JqxGrid ref='Grid'
         width={850} source={dataAdapter} filterable={true} columns={columns}
         showfilterrow={true} selectionmode={'multiplecellsextended'}
       />
       <JqxButton ref='Button' width={125} height={25} value="Remove Filter" style={{ marginTop: 10 }}/>
     </div>
   )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
