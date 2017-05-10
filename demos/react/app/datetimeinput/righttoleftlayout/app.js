import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxDateTimeInput
                width={250} height={25}
                culture={'he-IL'} rtl={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
