import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.Grid.on("filter", (event) => {
      this.refs.Panel.clearcontent();
      let filterinfo = this.refs.Grid.getfilterinformation();
      let eventData = "Triggered 'filter' event";
      for (i = 0; i < filterinfo.length; i++) {
        let eventData = "Filter Column: " + filterinfo[i].filtercolumntext;
        this.refs.Panel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
      }
    });
    this.refs.Button.on('click', () => {
      this.refs.Grid.clearfilters();
    });
    // show/hide filter background
    this.refs.CheckBox1.on('change', (event) => {
      this.refs.Grid.showfiltercolumnbackground(event.args.checked);
    });
    // show/hide filter icons
    this.refs.CheckBox2.on('change', (event) => {
      this.refs.Grid.autoshowfiltericon(!event.args.checked);
    });
    this.addFilter()
  }
  addFilter() {
      let filtergroup = new $.jqx.filter();
      let filter_or_operator = 1;
      let filtervalue = 'Beate';
      let filtercondition = 'contains';
      let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
      filtervalue = 'Andrew';
      filtercondition = 'starts_with';
      let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

      filtergroup.addfilter(filter_or_operator, filter1);
      filtergroup.addfilter(filter_or_operator, filter2);
      // add the filters.
      this.refs.Grid.addfilter('firstname', filtergroup);
      // apply the filters.
      this.refs.Grid.applyfilters();
  }
  render () {
    let data = generatedata(500);
    let source =
    {
        localdata: data,
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: "array"
    };
    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'First Name', datafield: 'firstname', width: 160 },
      { text: 'Last Name', datafield: 'lastname', width: 160 },
      { text: 'Product', datafield: 'productname', width: 170 },
      { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
      { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
      { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];
    return (
      <div id='jqxWidget' style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
        <JqxGrid ref='Grid'
          width={850} source={dataAdapter} filterable={true}
          sortable={true} autoshowfiltericon={true} columns={columns}
        />
        <div id="eventslog" style={{ marginTop: 30 }}>
          <div style={{ width: 200, float: 'left', marginRight: 10 }}>
            <JqxButton ref='Button' height={25} value='Remove Filter'/>
            <JqxCheckBox ref='CheckBox1' checked={true} height={25} style={{ marginTop: 10 }} value='Filter Background'/>
            <JqxCheckBox ref='CheckBox2' checked={false} height={25} style={{ marginTop: 10 }} value='Show All Filter Icons'/>
          </div>
          <div style={{ float: 'left' }}>
            Event Log:
            <JqxPanel ref='Panel' width={300} height={80} style={{ border: 'none' }}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
