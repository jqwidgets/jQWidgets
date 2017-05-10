import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';

class App extends React.Component {
    render () {
        // prepare the data
        let source = {
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
        
        let appointmentDataFields = {
                from: 'start',
                to: 'end',
                id: 'id',
                description: 'about',
                location: 'address',
                subject: 'name',
                style: 'style',
                status: 'status'
        };

        let views = [
                { type: 'dayView', showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
                { type: 'weekView', showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
                { type: 'timelineDayView', showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
                { type: 'timelineWeekView', showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } }
        ];
        return (
            <JqxScheduler ref='myScheduler'
                width={850} height={600} source={adapter}
                date={new $.jqx.date(2016, 11, 23)} showLegend={true}
                view={'weekView'} views={views}
                appointmentDataFields={appointmentDataFields}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
