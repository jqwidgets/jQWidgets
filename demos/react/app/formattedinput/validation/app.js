import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxFormattedInput
                width={250} height={25} radix={'decimal'}
                value={0} spinButtons={true} min={0} max={1000}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
