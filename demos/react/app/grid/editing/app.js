import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.Grid.on('cellbeginedit', (event) => {
        let args = event.args;
        document.getElementById("cellBeginEdit").innerHTML = ("Event Type: cellBeginEdit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
    });
    this.refs.Grid.on('cellendedit', (event) => {
        let args = event.args;
        document.getElementById("cellEndEdit").innerHTML = ("Event Type: cellEndEdit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
    });
  }
  render() {
    let data = generatedata(200);
    let source =
    {
        localdata: data,
        datatype: "array",
        updaterow: (rowid, rowdata, commit) => {
            commit(true);
        },
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ]
    };
    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
      { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
      { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
      { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
      {
          text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
          validation: (cell, value) => {
                  if (value == "")
                     return true;
                  let year = value.getFullYear();
                  if (year >= 2017) {
                      return { result: false, message: "Ship Date should be before 1/1/2017" };
                  }
                  return true;
              }
          },
          {
              text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
              validation: (cell, value) => {
                  if (value < 0 || value > 150) {
                      return { result: false, message: "Quantity should be in the 0-150 interval" };
                  }
                  return true;
              },
              createeditor: (row, cellvalue, editor) => {
                  editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
              }
          },
          { text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
              validation: (cell, value) => {
                  if (value < 0 || value > 15) {
                      return { result: false, message: "Price should be in the 0-15 interval" };
                  }
                  return true;
              },
              createeditor: (row, cellvalue, editor) => {
                  editor.jqxNumberInput({ digits: 3 });
              }
          }
    ];
    return (
      <div>
        <JqxGrid ref='Grid'
          width={850} source={dataAdapter} editable={true} columns={columns}
          enabletooltips={true} selectionmode={'multiplecellsadvanced'}
        />
        <div style={{ fontSize: 12, fontFamily: 'Verdana, Geneva, DejaVu Sans, sans-serif', marginTop: 30 }}>
            <div id="cellBeginEdit"/>
            <div id="cellEndEdit" style={{ marginTop: 10 }}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
