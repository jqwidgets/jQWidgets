import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
  componentDidMount(){
    this.refs.myGrid.on("pagechanged", (event) =>
    {
      document.getElementById('eventslog').style.display = 'block';
      if (document.getElementsByClassName('logged').length >= 5) {
          this.refs.myPanel.clearcontent();
      }

      let args = event.args;
      let eventData = "pagechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + "</div>";

      this.refs.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
      // get page information.
      let paginginformation =   this.refs.myGrid.getpaginginformation();
      document.getElementById('paginginfo').innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    });

    this.refs.myGrid.on("pagesizechanged", (event) =>
    {
      document.getElementById('eventslog').style.display = 'block';
      this.refs.myPanel.clearcontent();

      let args = event.args;
      let eventData = "pagesizechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + ", Old Page Size: " + args.oldpagesize + "</div>";

      this.refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
      // get page information.
      let paginginformation =   this.refs.myGrid.getpaginginformation();;
      document.getElementById('paginginfo').innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    });
  }
  render () {
    let source =
    {
        datatype: "xml",
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:OrderID',
        url: "../sampledata/orders.xml",
        pager: (pagenum, pagesize, oldpagenum) => {
            // callback called when a page or page size is changed.
        }
    };
    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'Ship Name', datafield: 'ShipName', width: 250 },
      { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
      { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
      { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
      { text: 'Ship City', datafield: 'ShipCity', width: 100 },
      { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
    ];
    return (
      <div>
          <JqxGrid ref='myGrid'
            width={850} source={dataAdapter} sortable={true}
            pageable={true} autoheight={true} columnsresize={true}
            selectionmode={'multiplerowsextended'} columns={columns}
          />
          <div id="eventslog" style={{ display: 'none', marginTop: 30 }}>
              <div style={{ float: 'left' }}>
                  Event Log:
                  <JqxPanel ref='myPanel' width={300} height={300} style={{ border: 'none' }}/>
              </div>
              <div style={{ float: 'left' }}>
                  Paging Details:
                  <div id="paginginfo"/>
              </div>
          </div>
      </div>
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
