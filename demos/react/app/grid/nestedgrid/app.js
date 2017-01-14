import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
  componentDidMount(){
    this.refs.myGrid.showrowdetails(1);
  }
  render() {
    let employeesSource =
    {
        datafields: [
            { name: 'FirstName' },
            { name: 'LastName' },
            { name: 'Title' },
            { name: 'Address' },
            { name: 'City' }
        ],
        root: "Employees",
        record: "Employee",
        id: 'EmployeeID',
        datatype: "xml",
        async: false,
        url: "../sampledata/employees.xml"
    };
    let employeesAdapter = new $.jqx.dataAdapter(employeesSource, { autoBind: true });
    let ordersSource =
    {
        datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: "Orders",
        record: "Order",
        datatype: "xml",
        url: "../sampledata/orderdetails.xml",
        async: false
    };
    let ordersDataAdapter = new $.jqx.dataAdapter(ordersSource, { autoBind: true });
    let orders = ordersDataAdapter.records;
    let nestedGrids = new Array();
    let rowdetailstemplate = { rowdetails: "<div id='grid' style='margin: 10px;'></div>", rowdetailsheight: 220, rowdetailshidden: true };
    let initrowdetails = (index, parentElement, gridElement, record) => {
        let id = record.uid.toString();
        let grid = $($(parentElement).children()[0]);
        nestedGrids[index] = grid;
        let filtergroup = new $.jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = id;
        let filtercondition = 'equal';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // fill the orders depending on the id.
        let ordersbyid = [];
        for (let m = 0; m < orders.length; m++) {
            let result = filter.evaluate(orders[m]["EmployeeID"]);
            if (result)
                ordersbyid.push(orders[m]);
        }
        let orderssource = { datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        let nestedGridAdapter = new $.jqx.dataAdapter(orderssource);
        if (grid != null) {
            grid.jqxGrid({
                source: nestedGridAdapter, width: 780, height: 200,
                columns: [
                  { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                  { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                  { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                  { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                  { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
               ]
            });
        }
    }
    let photosRenderer = (row, column, value) => {
      let records = employeesAdapter.records;
      let name = records[row].FirstName;
      let imgurl = '../images/' + name.toLowerCase() + '.png';
      let img = '<div style="background: white;"><img style="margin:2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
      return img;
    }
    let renderer = (row, column, value) => {
      return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }
    let columns =
    [
      { text: 'Photo', width: 50, cellsrenderer: photosRenderer },
      { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: renderer },
      { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: renderer },
      { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: renderer },
      { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: renderer },
      { text: 'City', datafield: 'City', width: 170, cellsrenderer: renderer }
    ];
    return (
        <JqxGrid ref='myGrid'
          width={850} height={350} source={employeesAdapter} rowdetails={true}
          rowsheight={35} initrowdetails={initrowdetails}
          rowdetailstemplate={rowdetailstemplate} columns={columns}
        />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
