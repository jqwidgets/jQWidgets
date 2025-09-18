import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

function App() {
    const myScheduler = useRef<JqxScheduler>(null);

    const appointments = useMemo(() => {
        return [
            {
                calendar: "Room 1",
                description: "Quarterly Project Review Meeting",
                end: new Date(2017, 10, 23, 16, 0, 0),
                id: "id1",
                location: "",
                start: new Date(2017, 10, 23, 9, 0, 0),
                subject: "Nancy"
            },
            {
                calendar: "Room 2",
                description: "Course Social Media",
                end: new Date(2017, 10, 24, 15, 0, 0),
                id: "id2",
                location: "",
                start: new Date(2017, 10, 24, 10, 0, 0),
                subject: "John"
            },
            {
                calendar: "Room 3",
                description: "",
                end: new Date(2017, 10, 27, 13, 0, 0),
                id: "id3",
                location: "",
                start: new Date(2017, 10, 27, 11, 0, 0),
                subject: "Antony"
            },
            {
                calendar: "Room 2",
                description: "New Projects Planning",
                end: new Date(2017, 10, 23, 18, 0, 0),
                id: "id4",
                location: "",
                start: new Date(2017, 10, 23, 16, 0, 0),
                subject: "Michael"
            },
            {
                calendar: "Room 1",
                description: "Interview with James",
                end: new Date(2017, 10, 25, 17, 0, 0),
                id: "id5",
                location: "",
                start: new Date(2017, 10, 25, 15, 0, 0),
                subject: "Peter"
            },
            {
                calendar: "Room 4",
                description: "Interview with Nancy",
                end: new Date(2017, 10, 26, 16, 0, 0),
                id: "id6",
                location: "",
                start: new Date(2017, 10, 26, 14, 0, 0),
                subject: "George"
            }
        ];
    }, []);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'background', type: 'string' },
            { name: 'borderColor', type: 'string' },
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'style', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        dataType: "array",
        id: 'id',
        localData: appointments
    }), [appointments]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = useMemo(() => ({
        background: 'background',
        borderColor: 'borderColor',
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        style: 'style',
        subject: "subject",
        to: "end"
    }), []);

    const resources = useMemo(() => ({
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const date = useMemo(() => new jqx.date(2017, 11, 23), []);

    const views = useMemo(() => [
        'dayView',
        'weekView',
        'monthView'
    ], []);

    const ready = React.useCallback(() => {
        setTimeout(() => {
            myScheduler.current && myScheduler.current.ensureAppointmentVisible("id1");
        });
    }, []);

    const renderAppointment = React.useCallback((data: any) => {
        let img = '<img style="top: 2px; position: relative;" src="https://www.jqwidgets.com/react/images/person.png"/>';
        if (data.appointment.subject === 'Nancy') {
            img = '<img style="top: 2px; position: relative;" src="https://www.jqwidgets.com/react/images/woman.png"/>';
        }
        else if (data.appointment.subject === 'Peter') {
            img = '<img style="top: 2px; position: relative;" src="https://www.jqwidgets.com/react/images/boss.png"/>';
        }
        else if (data.appointment.subject === 'Antony') {
            img = '<img style="top: 2px; position: relative;" src="https://www.jqwidgets.com/react/images/oldboss.png"/>';
        }
        else if (data.appointment.subject === 'John') {
            img = '<img style="top: 2px; position: relative;" src="https://www.jqwidgets.com/react/images/asian.png"/>';
        }

        if (data.view === 'weekView' || data.view === 'dayView' || data.view === 'monthView') {
            data.html = img + '<i>' + data.appointment.subject + '</i>';
            if (data.appointment.id === 'id1') {
                data.style = '#AA4643';
            }
            else if (data.appointment.id === 'id2' || data.appointment.id === 'id6') {
                data.style = '#309B46';
            }
            else if (data.appointment.id === 'id3') {
                data.style = '#447F6E';
            }
        }
        return data;
    }, []);

    return (
        <JqxScheduler
            theme="material-purple"
            ref={myScheduler}
            // @ts-ignore
            width="100%"
            height={600}
            date={date}
            source={dataAdapter}
            view="weekView"
            appointmentDataFields={appointmentDataFields}
            resources={resources}
            appointmentsMinHeight={20}
            views={views}
            ready={ready}
            renderAppointment={renderAppointment}
        />
    );
}

export default App;