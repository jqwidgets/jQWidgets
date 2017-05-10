import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myScheduler.ensureAppointmentVisible('id7');
    }
    render() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id4',
            description: '',
            style: '#AA4643',
            location: '',
            subject: 'New Projects Planning',
            calendar: 'Room 2',
            from: new Date(2016, 10, 22, 8, 0, 0),
            to: new Date(2016, 10, 22, 13, 0, 0)
        }
        let appointment2 = {
            id: 'id5',
            description: '',
            style: '#89A54E',
            location: '',
            subject: 'Interview with James',
            calendar: 'Room 1',
            from: new Date(2016, 10, 25, 13, 0, 0),
            to: new Date(2016, 10, 25, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id6',
            description: '',
            style: '#71588F',
            location: '',
            subject: 'Interview with Nancy',
            calendar: 'Room 2',
            from: new Date(2016, 10, 26, 14, 0, 0),
            to: new Date(2016, 10, 26, 16, 0, 0)
        }
        let appointment4 = {
            id: 'id7',
            description: '',
            style: '#307DD7',
            location: '',
            subject: 'Daily Meeting',
            calendar: 'Room 1',
            recurrenceRule: 'FREQ=DAILY;',
            recurrenceException: '2016-11-24 09:00:00,2016-11-26 12:00:00',
            from: new Date(2016, 10, 23, 10, 0, 0),
            to: new Date(2016, 10, 23, 11, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        // prepare the data
        let source =
            {
                dataType: 'array',
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'recurrenceRule', type: 'string' },
                    { name: 'recurrenceException', type: 'string' },
                    { name: 'style', type: 'string' },
                    { name: 'from', type: 'date' },
                    { name: 'to', type: 'date' }
                ],
                id: 'id',
                localData: appointments
            };
        let adapter = new $.jqx.dataAdapter(source);

        let appointmentDataFields =
            {
                from: 'from',
                to: 'to',
                id: 'id',
                description: 'description',
                location: 'place',
                style: 'style',
                subject: 'subject',
                resourceId: 'calendar',
                recurrencePattern: 'recurrenceRule',
                recurrenceException: 'recurrenceException'
            };

        let views =
            [
                'dayView',
                'weekView',
                'monthView'
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
