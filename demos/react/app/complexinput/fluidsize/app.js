import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxComplexInput ref='myComplexInput'
                width={'30%'} height={25} value={'1000 + 2i'} spinButtons={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
