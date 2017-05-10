import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxDateTimeInput width={'50%'} height={35} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
