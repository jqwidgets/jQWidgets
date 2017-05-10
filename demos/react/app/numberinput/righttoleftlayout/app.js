import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render() {
        return (
            <div id='jqxWidget' style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>

                <div style={{ marginTop: 10 }}>Number</div>
                <JqxNumberInput ref='numericInput' style={{ marginTop: 3 }}
                    rtl={true} inputMode={'simple'}
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Percentage</div>
                <JqxNumberInput ref='percentageInput' style={{ marginTop: 3 }}
                    rtl={true}
                    width={250} height={25}
                    digits={3} symbolPosition={'right'}
                    symbol={'%'} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Currency</div>
                <JqxNumberInput ref='currencyInput' style={{ marginTop: 3 }}
                    rtl={true}
                    width={250} height={25}
                    symbol={'$'} spinButtons={true}
                />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
