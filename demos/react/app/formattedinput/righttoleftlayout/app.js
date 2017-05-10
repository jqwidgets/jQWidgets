import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxFormattedInput
                width={250} height={25} radix={'binary'} rtl={true}
                value={10000} spinButtons={true} dropDown={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
