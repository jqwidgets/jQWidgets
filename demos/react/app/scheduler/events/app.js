import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';

class App extends React.Component {
    componentDidMount() {
        // gets scrollbable height.
        let scrollHeight = this.refs.myScheduler.scrollHeight();
        // scroll 700px.
        this.refs.myScheduler.scrollTop(700);

        this.refs.myScheduler.on('appointmentDelete', (event) => {
            let args = event.args;
            let appointment = args.appointment;
            document.getElementById('log').innerHTML = 'appointmentDelete is raised';
            //$("#log").html("appointmentDelete is raised");
        });

        this.refs.myScheduler.on('appointmentAdd', (event) => {
            let args = event.args;
            let appointment = args.appointment;
            document.getElementById('log').innerHTML = 'appointmentAdd is raised';
        });

        this.refs.myScheduler.on('appointmentDoubleClick', (event) => {
            let args = event.args;
            let appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.
            document.getElementById('log').innerHTML = 'appointmentDoubleClick is raised';
        });

        this.refs.myScheduler.on('cellClick', (event) => {
            let args = event.args;
            let cell = args.cell;
            document.getElementById('log').innerHTML = 'cellClick is raised';
        });

        this.refs.myScheduler.on('appointmentChange', (event) => {
            let args = event.args;
            let appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.
            document.getElementById('log').innerHTML = 'appointmentChange is raised';
        });
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
                'dayView',
                'weekView'
            ];
        return (
            <div>
                <JqxScheduler ref='myScheduler'
                    date={new $.jqx.date(2016, 11, 23)}
                    width={850}
                    height={600}
                    rowsHeight={40}
                    source={adapter}
                    appointmentDataFields={appointmentDataFields}
                    view={'weekView'}
                    views={views}
                />
                <br />
                Event Log:
                <div id='log'></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
