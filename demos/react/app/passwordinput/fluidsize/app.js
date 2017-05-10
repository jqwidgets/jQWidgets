import React from 'react';
import ReactDOM from 'react-dom';

import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxPasswordInput ref='passwordInput'
                width={'50%'} height={25}
                placeHolder={'Enter password:'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
