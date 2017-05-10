import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxNumberInput ref='numericInput'
                width={'50%'} height={35} spinButtons={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
