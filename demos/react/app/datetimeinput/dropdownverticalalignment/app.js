import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <label>Date Input</label>
                <JqxDateTimeInput
                    width={300} height={25}
                    dropDownVerticalAlignment={'top'}
                />
                <label>Time Input</label>
                <JqxDateTimeInput
                    width={300} height={25} showCalendarButton={false}
                    dropDownVerticalAlignment={'top'} showTimeButton={true}
                />
                <label>Date/Time Input</label>
                <JqxDateTimeInput
                    width={300} height={25} showTimeButton={true}
                    dropDownVerticalAlignment={'top'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
