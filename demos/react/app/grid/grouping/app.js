import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.ExpandButton.on('click', () => {
        let groupnum = parseInt($("#groupnum").val());
        if (!isNaN(groupnum)) {
          this.refs.Grid.expandgroup(groupnum);
        }
    });
    // collapse group.
    this.refs.CollapseButton.on('click', () => {
        let groupnum = parseInt($("#groupnum").val());
        if (!isNaN(groupnum)) {
          this.refs.Grid.collapsegroup(groupnum);
        }
    });
    // expand all groups.
    this.refs.ExpandAllButton.on('click', () => {
        this.refs.Grid.expandallgroups();
    });
    // collapse all groups.
    this.refs.CollapseAllButton.on('click', () => {
        this.refs.Grid.collapseallgroups();
    });
    // trigger expand and collapse events.
    this.refs.Grid.on('groupexpand', (event) => {
        let args = event.args;
        document.getElementById('expandedgroup').innerHTML = "Group: " + args.group + ", Level: " + args.level;
    });
    this.refs.Grid.on('groupcollapse', (event) => {
        let args = event.args;
        document.getElementById('collapsedgroup').innerHTML = "Group: " + args.group + ", Level: " + args.level
    });
  }
  render() {
    let source =
    {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: "../sampledata/customers.xml"
    };
    let dataAdapter = new $.jqx.dataAdapter(source);

    let columns =
    [
      { text: 'Company Name', datafield: 'CompanyName', width: 250 },
      { text: 'City', datafield: 'City', width: 120 },
      { text: 'Country', datafield: 'Country' }
    ];
    return (
      <div>
        <JqxGrid ref='Grid'
          width={850} source={dataAdapter} groupable={true}
          columns={columns} groups={['City']}
        />
        <div style={{ marginTop: 30 }}>
            <div style={{ float: 'left', marginLeft: 20 }}>
                <JqxButton ref='ExpandButton' width={125} height={25} value='Expand Group'/>
                <br />
                <JqxButton ref='CollapseButton' width={125} height={25} style={{ marginTop: 10 }} value='Collapse Group'/>
                <br />
                <span style={{ marginTop: 10 }}>Group:</span>
                <input defaultValue="1" id="groupnum" style={{ marginLeft: 10, marginTop: 10, width: 20 }} type="text" />
            </div>
            <div style={{ float: 'left', marginLeft: 20 }}>
                <JqxButton ref='ExpandAllButton' width={125} height={25} value='Expand All'/>
                <br />
                <JqxButton ref='CollapseAllButton' width={125} height={25} value='Collapse All' style={{ marginTop: 10, marginBottom: 10 }}/>
                <br />
            </div>
            <div style={{ float: 'left', marginLeft: 20 }}>
                <div style={{ fontWeight: 'bold' }}>
                    <span>Event Log:</span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <span>Expanded Group:</span>
                    <span id="expandedgroup"></span>
                </div>
                <div style={{ marginTop: 10 }}>
                    <span>Collapsed Group:</span>
                    <span id="collapsedgroup"></span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
