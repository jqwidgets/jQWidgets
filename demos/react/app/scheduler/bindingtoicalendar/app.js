import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.refs.myScheduler.scrollTop(200);
        })
    }
    render() {
        let source = {
            dataType: 'ics',
            url: '../sampledata/icalendar.txt'
        };

        let adapter = new $.jqx.dataAdapter(source);

        let appointmentDataFields = {
            from: "DTSTART",
            to: "DTEND",
            id: "UID",
            description: "DESCRIPTION",
            location: "LOCATION",
            subject: "SUMMARY",
            recurrencePattern: "RRULE",
            recurrenceException: "EXDATE",
            status: "STATUS"
        };

        let views = [
            'dayView',
            'weekView',
            'monthView'
        ];
        return (
            <JqxScheduler ref='myScheduler'
                date={new $.jqx.date(2016, 11, 23)}
                width={850}
                height={600}
                source={adapter}
                showLegend={true}
                appointmentDataFields={appointmentDataFields}
                view={'weekView'}
                views={views}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
