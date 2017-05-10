import React from 'react';
import ReactDOM from 'react-dom';

import JqxMaskedInput from '../../../jqwidgets-react/react_jqxmaskedinput.js';

class App extends React.Component {
    render() {
        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>

                <div style={{ marginTop: 10 }}>Numeric</div>
                <JqxMaskedInput
                    width={250} height={25} rtl={true}
                />

                <div style={{ marginTop: 10 }}>Zip Code</div>
                <JqxMaskedInput
                    width={250} height={25} mask={'#####-####'} rtl={true}
                />

                <div style={{ marginTop: 10 }}>SSN</div>
                <JqxMaskedInput
                    width={250} height={25} mask={'###-##-####'} rtl={true}
                />

                <div style={{ marginTop: 10 }}>Date</div>
                <JqxMaskedInput
                    width={250} height={25} mask={'##/##/####'} rtl={true}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
