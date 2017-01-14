import React from 'react';
import ReactDOM from 'react-dom';

import JqxKanban from '../../../jqwidgets-react/react_jqxkanban.js';
import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

let fields = [
          { name: "status", map: "state", type: "string" },
          { name: "text", map: "label", type: "string" },
          { name: "tags", type: "string" },
          { name: "color", map: "hex", type: "string" },
          { name: "resourceId", type: "number" }
];
let resourcesAdapterFunc = () => {
    let resourcesSource =
    {
        localData: [
              { id: 0, name: "No name", image: "../jqwidgets/styles/images/common.png", common: true },
              { id: 1, name: "Andrew Fuller", image: "../images/andrew.png" },
              { id: 2, name: "Janet Leverling", image: "../images/janet.png" },
              { id: 3, name: "Steven Buchanan", image: "../images/steven.png" },
              { id: 4, name: "Nancy Davolio", image: "../images/nancy.png" },
              { id: 5, name: "Michael Buchanan", image: "../images/Michael.png" },
              { id: 6, name: "Margaret Buchanan", image: "../images/margaret.png" },
              { id: 7, name: "Robert Buchanan", image: "../images/robert.png" },
              { id: 8, name: "Laura Buchanan", image: "../images/Laura.png" },
              { id: 9, name: "Laura Buchanan", image: "../images/Anne.png" }
        ],
        dataType: "array",
        dataFields: [
             { name: "id", type: "number" },
             { name: "name", type: "string" },
             { name: "image", type: "string" },
             { name: "common", type: "boolean" }
        ]
    };
    let resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
    return resourcesDataAdapter;
}

class RightSplitter extends React.Component {
  render () {
    let source2 =
    {
       localData: [
                { state: "ready", label: "Logout issue", tags: "logout, issue", hex: "#5dc3f0", resourceId: 7 },
                { state: "ready", label: "Remember password issue", tags: "password, issue", hex: "#6bbd49", resourceId: 8 },
                { state: "ready", label: "Cart calculation issue", tags: "cart, calculation", hex: "#f19b60", resourceId: 9 },
                { state: "ready", label: "Remove topic issue", tags: "topic, issue", hex: "#6bbd49" }
       ],
       dataType: "array",
       dataFields: fields
    };
    let dataAdapter2 = new $.jqx.dataAdapter(source2);
    let source3 =
    {
        localData: [
                 { state: "done", label: "Delete orders", tags: "orders, combine", hex: "#f19b60", resourceId: 4 },
                 { state: "work", label: "Add New Address", tags: "address", hex: "#6bbd49", resourceId: 5 },
                 { state: "new", label: "Rename items", tags: "rename", hex: "#5dc3f0", resourceId: 6 },
                 { state: "work", label: "Update cart", tags: "cart, update", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: fields
    };
    let dataAdapter3 = new $.jqx.dataAdapter(source3);

    let kanbanTwoColumnRenderer = (element, collapsedElement, column) => {
      if(this.refs.kanbanTwo !== undefined) {
        let columnItems = this.refs.kanbanTwo.getColumnItems(column.dataField).length;
        let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
        headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
      }
    }

    let kanbanThreeColumns =
    [
        { text: "Backlog", dataField: "new", maxItems: 5 },
        { text: "In Progress", dataField: "work", maxItems: 5 },
        { text: "Done", dataField: "done", maxItems: 5 }
    ];

    let kanbanThreeColumnRenderer = (element, collapsedElement, column) => {
      if(this.refs.kanbanThree !== undefined) {
        let columnItems = this.refs.kanbanThree.getColumnItems(column.dataField).length;
        let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
        let maxItems;
        column.maxItems === 10 ? maxItems = 5 : maxItems = column.maxItems;
        headerStatus.innerHTML = " (" + columnItems + "/" + maxItems + ")";
      }
    };

    return (
      <JqxSplitter
        width={'100%'} height={600} orientation={'horizontal'}
        panels={[{ min: 200, size: 350, collapsible: false }, { min: 200 }]}
      >
        <div id='kanban2'>
          <JqxKanban ref='kanbanTwo'
            width={'100%'} height={'100%'} resources={resourcesAdapterFunc()}
            source={dataAdapter2} connectWith={'#kanban1, #kanban3'}
            columns={[{ text: "Ready", dataField: "ready", maxItems: 10 }]}
            columnRenderer={kanbanTwoColumnRenderer}
          />
        </div>
        <div id='kanban3'>
          <JqxKanban ref='kanbanThree'
            width={'100%'} height={'100%'} resources={resourcesAdapterFunc()}
            source={dataAdapter3} connectWith={'#kanban1, #kanban2'}
            columns={kanbanThreeColumns} columnRenderer={kanbanThreeColumnRenderer}
          />
        </div>
      </JqxSplitter>
    )
  }
}

class App extends React.Component {
  render () {
    let source =
     {
         localData: [
                  { state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
                  { state: "new", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
                  { state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
                  { state: "new", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
                  { state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
         ],
         dataType: "array",
         dataFields: fields
     };
    let dataAdapter = new $.jqx.dataAdapter(source);
    let kanbanOneColumnRenderer = (element, collapsedElement, column) => {
      if(this.refs.kanbanOne !== undefined) {
        let columnItems = this.refs.kanbanOne.getColumnItems(column.dataField).length;
        let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
        headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
      }
    }
    return (
      <JqxSplitter
        width={700} height={600}
        panels={[{ size: 250, min: 100 }, { min: 250 }]}
      >
        <div id='kanban1'>
          <JqxKanban ref='kanbanOne'
            width={'100%'} height={600} resources={resourcesAdapterFunc()}
            source={dataAdapter} connectWith={'#kanban2, #kanban3'}
            columns={[{ text: "Backlog", dataField: "new", maxItems: 10 }]}
            columnRenderer={kanbanOneColumnRenderer}
          />
        </div>
        <div>
          <RightSplitter ref='rightSplitter'/>
        </div>
      </JqxSplitter>
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
let headerStatusElements = document.getElementsByClassName("jqx-kanban-column-header-status");
headerStatusElements[1].innerHTML = " (5/10)";
headerStatusElements[3].innerHTML = " (4/10)";
headerStatusElements[5].innerHTML = " (1/10)";
headerStatusElements[7].innerHTML = " (2/10)";
headerStatusElements[9].innerHTML = " (1/10)";
