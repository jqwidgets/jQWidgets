import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render() {
        return (
            <div id='jqxWidget' style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <div>The input is restricted from 0 to 1000</div>

                <div style={{ marginTop: 10 }}>Number</div>
                <JqxNumberInput ref='numericInput'
                    width={250} height={25} min={0} max={1000}
                />

                <div style={{ marginTop: 10 }}>Currency</div>
                <JqxNumberInput ref='currencyInput'
                    width={250} height={25}
                    min={0} max={1000}
                    symbol={'$'}
                />

                <div style={{ marginTop: 10 }}>Custom Validation Message</div>
                <JqxNumberInput ref='validation'
                    width={250} height={25}
                    min={0} max={1000}
                    value={0}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
