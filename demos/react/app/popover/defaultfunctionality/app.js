import React from 'react';
import ReactDOM from 'react-dom';

import JqxPopover from '../../../jqwidgets-react/react_jqxpopover.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    let data = new Array();
    let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne"];
    let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
    let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager", "Sales Representative", "Sales Representative", "Inside Sales Coordinator", "Sales Representative"];

    let employeesDiv = document.getElementById('employees');

    for (let i = 0; i < firstNames.length; i++) {
        let row = {};
        row["firstname"] = firstNames[i];
        row["lastname"] = lastNames[i];
        row["title"] = titles[i];
        let imgurl = '../images/' + firstNames[i].toLowerCase() + '.png';
        let img = '<img height="50" width="45" src="' + imgurl + '"/>';
        let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
        employeesDiv.innerHTML += table;
    }
  }
  render () {
    return (
      <div>
        <JqxPopover
          offset={{ left: -50, top:0 }}
          showCloseButton={true} title={'Employees'}
          selector={'#container'} arrowOffsetValue={50}
        >
            <div id="employees"/>
        </JqxPopover>
        <div style={{ height: 33, borderWidth: 1, borderStyle: 'solid', padding: 10 }} className='jqx-widget-header'>
          <div style={{ float: 'right' }} id="container">
            <JqxButton value='View Employees' style={{ marginRight: 10, padding: 10, borderRadius: 6 }}
              width={170} height={30} template={'inverse'}
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
