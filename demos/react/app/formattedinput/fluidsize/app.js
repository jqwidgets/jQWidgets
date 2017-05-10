import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxFormattedInput
                width={'30%'} height={25} radix={'binary'}
                value={10111} spinButtons={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
