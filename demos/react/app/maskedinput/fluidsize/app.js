import React from 'react';
import ReactDOM from 'react-dom';

import JqxMaskedInput from '../../../jqwidgets-react/react_jqxmaskedinput.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{ fontSize: 13, fontFamily: 'Verdana', marginTop: 10 }}>
                    Phone Number
                </div>
                <JqxMaskedInput style={{ marginTop: 3 }}
                    width={'50%'} height={35} mask={'(###)###-####'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
