import React from 'react';
import ReactDOM from 'react-dom';

import JqxFormattedInput from '../../../jqwidgets-react/react_jqxformattedinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxFormattedInput
                width={600} height={25} radix={'binary'} spinButtons={true} dropDown={true}
                value={'1111111111111111111111111111111111111111111111111111111111110110'} 
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
