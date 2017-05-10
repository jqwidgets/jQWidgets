import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
    componentDidMount() {
        // Create Date objects.
        let date1 = new Date();
        let date2 = new Date();
        let date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(16);
        // Add special dates by invoking the addSpecialDate method.
        this.refs.myCalendar.addSpecialDate(date1, '', 'Special Date1');
        this.refs.myCalendar.addSpecialDate(date2, '', 'Special Date2');
        this.refs.myCalendar.addSpecialDate(date3, '', 'Special Date3');
    }
    render() {
        return (
            <JqxCalendar ref='myCalendar'
                width={220} height={220} enableTooltips={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
