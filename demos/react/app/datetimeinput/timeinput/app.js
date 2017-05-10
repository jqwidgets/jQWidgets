import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <JqxDateTimeInput
                width={250} height={25} formatString={'T'}
                showTimeButton={true} showCalendarButton={false}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
