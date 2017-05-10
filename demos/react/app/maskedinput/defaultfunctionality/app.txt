import React from 'react';
import ReactDOM from 'react-dom';

import JqxMaskedInput from '../../../jqwidgets-react/react_jqxmaskedinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myClearButton.on('click', () => {
            this.refs.numericInput.clear();
            this.refs.zipCodeInput.clear();
            this.refs.ssnInput.clear();
            this.refs.phoneInput.clear();
            this.refs.regexInput.clear();
        });
    }
    render () {
        return (
            <div>
                <div style={{ marginTop: 10 }}>Numeric</div>
                <JqxMaskedInput ref='numericInput' width={250} height={25}/>

                <div style={{ marginTop: 10 }}>Zip Code</div>
                <JqxMaskedInput ref='zipCodeInput' width={250} height={25}
                  mask={'#####-####'}
                />

                <div style={{ marginTop: 10 }}>SSN</div>
                <JqxMaskedInput ref='ssnInput' width={250} height={25}
                  mask={'###-##-####'}
                />

                <div style={{ marginTop: 10 }}>Phone Number</div>
                <JqxMaskedInput ref='phoneInput' width={250} height={25}
                  mask={'(###)###-####'}
                />

                <div style={{ marginTop: 10 }}>IP Address (ex: 255.255.255.255)</div>
                <JqxMaskedInput ref='regexInput' width={250} height={25}
                  mask={'[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]'}
                />

                <div style={{ marginTop: 10 }}>Disabled</div>
                <JqxMaskedInput ref='disabledInput' width={250} height={25}
                  disabled={true}
                />

                <div style={{ marginTop: 10 }}>
                    <JqxButton ref='myClearButton' value="Clear Values"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
