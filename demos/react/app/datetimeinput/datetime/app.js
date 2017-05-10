import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxDateTimeInput
                width={300} height={25} formatString={'F'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
