import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myScheduler.ensureAppointmentVisible('id1');
        this.refs.myScheduler.beginAppointmentsUpdate();
        this.refs.myScheduler.setAppointmentProperty('id1', 'resizable', false);
        this.refs.myScheduler.setAppointmentProperty('id2', 'draggable', false);
        this.refs.myScheduler.setAppointmentProperty('id3', 'resizable', false);
        this.refs.myScheduler.setAppointmentProperty('id3', 'draggable', false);
        this.refs.myScheduler.setAppointmentProperty('id4', 'readOnly', true);
        this.refs.myScheduler.setAppointmentProperty('id5', 'hidden', true);
        this.refs.myScheduler.setAppointmentProperty('id6', 'hidden', true);
        this.refs.myScheduler.endAppointmentsUpdate();

        this.refs.showAppointmentsButton.on('click', () => {
            this.refs.myScheduler.beginAppointmentsUpdate();
            this.refs.myScheduler.setAppointmentProperty('id5', 'hidden', false);
            this.refs.myScheduler.setAppointmentProperty('id6', 'hidden', false);
            this.refs.myScheduler.endAppointmentsUpdate();
        });
    }
    render() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Resize is disabled',
            calendar: 'Room 1',
            start: new Date(2016, 10, 23, 9, 0, 0),
            end: new Date(2016, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'Drag is disabled',
            calendar: 'Room 2',
            start: new Date(2016, 10, 24, 10, 0, 0),
            end: new Date(2016, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Drag and Resize are disabled',
            calendar: 'Room 3',
            start: new Date(2016, 10, 27, 11, 0, 0),
            end: new Date(2016, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'Edit with Dialog is disabled',
            calendar: 'Room 2',
            start: new Date(2016, 10, 23, 16, 0, 0),
            end: new Date(2016, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Peter',
            calendar: 'Room 1',
            start: new Date(2016, 10, 25, 15, 0, 0),
            end: new Date(2016, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Nancy',
            calendar: 'Room 4',
            start: new Date(2016, 10, 26, 14, 0, 0),
            end: new Date(2016, 10, 26, 16, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
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
                    { name: 'start', type: 'date' },
                    { name: 'end', type: 'date' }
                ],
                id: 'id',
                localData: appointments
            };
        let adapter = new $.jqx.dataAdapter(source);

        let resources =
            {
                colorScheme: 'scheme05',
                dataField: 'calendar',
                source: new $.jqx.dataAdapter(source)
            };

        let appointmentDataFields =
            {
                from: 'start',
                to: 'end',
                id: 'id',
                description: 'description',
                location: 'place',
                subject: 'subject',
                resourceId: 'calendar'
            };

        let views =
            [
                'dayView',
                'weekView',
                'monthView'
            ];
        return (
            <div>
                <JqxScheduler ref='myScheduler'
                    width={850} height={600} source={adapter}
                    date={new $.jqx.date(2016, 11, 23)} showLegend={true}
                    view={'monthView'} resources={resources} views={views}
                    appointmentDataFields={appointmentDataFields}
                />
                <br />
                <JqxButton ref='showAppointmentsButton' value='Show Hidden Appointments' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
