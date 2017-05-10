import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';

class App extends React.Component {
    componentDidMount() {
        // gets scrollbable height.
        let scrollHeight = this.refs.myScheduler.scrollHeight();
        // scroll 700px.
        this.refs.myScheduler.scrollTop(700);
    }
    render() {
        // prepare the data
        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'status', type: 'string' },
                    { name: 'about', type: 'string' },
                    { name: 'address', type: 'string' },
                    { name: 'company', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'style', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
                    { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
                ],
                id: 'id',
                url: '../sampledata/appointments.txt'
            };
        let adapter = new $.jqx.dataAdapter(source);

        let appointmentDataFields =
            {
                from: 'start',
                to: 'end',
                id: 'id',
                description: 'about',
                location: 'address',
                subject: 'name',
                style: 'style',
                status: 'status'
            };

        let views =
            [
                { type: 'dayView', showWeekends: false, timeRuler: { hidden: false } },
                { type: 'weekView', showWeekends: false, timeRuler: { hidden: false } },
                { type: 'monthView', showWeekends: false }
            ];
        return (
            <JqxScheduler ref='myScheduler'
                date={new $.jqx.date(2016, 11, 23)}
                width={850}
                height={600}
                source={adapter}
                appointmentDataFields={appointmentDataFields}
                view={'weekView'}
                views={views}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
