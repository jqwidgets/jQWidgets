import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
    render() {
        let restrictedDates = new Array();
        let date = new Date();
        date.setHours(0, 0, 0);
        date.setDate(2);
        let date2 = new Date();
        date2.setHours(0, 0, 0);
        date2.setDate(3);
        restrictedDates.push(date);
        restrictedDates.push(date2);
        return (
            <JqxCalendar width={220} height={220} restrictedDates={restrictedDates}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
