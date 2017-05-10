import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxComplexInput ref='myComplexInput'
                width={250} height={25} value={'15 + 7.2i'}
                spinButtons={true} spinButtonsStep={1}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
