import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render () {
        return (
          <div id='jqxWidget'>
              <div style={{ marginTop: 10 }}>Number</div>

              <JqxNumberInput ref='numericInput'
                width={250} height={25} spinButtons={true}
              />

              <div style={{ marginTop: 10 }}>Percentage</div>

              <JqxNumberInput ref='percentageInput'
                width={250} height={25} digits={3} spinButtons={true}
                symbolPosition={'right'} symbol={'%'}
              />

              <div style={{ marginTop: 10 }}>Currency</div>

              <JqxNumberInput ref='currencyInput'
                width={250} height={25}
                symbol={'%'} spinButtons={true}
              />

              <div style={{ marginTop: 10 }}>Disabled</div>

              <JqxNumberInput ref='disabledInput'
                width={250} height={25}
                disabled={true} spinButtons={true}
              />

          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
