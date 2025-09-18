import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const { ready, stateProps } = useMemo(() => {
        const appointments = [];
        const appointment1 = {
            calendar: "Room 1",
            description: "George brings projector for presentations.",
            end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            subject: "Quarterly Project Review Meeting"
        };
        const appointment2 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            subject: "IT Group Mtg."
        };
        const appointment3 = {
            calendar: "Room 3",
            description: "",
            end: new Date(2018, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 27, 11, 0, 0),
            subject: "Course Social Media"
        };
        const appointment4 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            subject: "New Projects Planning"
        };
        const appointment5 = {
            calendar: "Room 1",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 25, 15, 0, 0),
            subject: "Interview with James"
        };
        const appointment6 = {
            calendar: "Room 4",
            description: "",
            end: new Date(2018, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 26, 14, 0, 0),
            subject: "Interview with Nancy"
        };
        appointments.push(appointment1, appointment2, appointment3, appointment4, appointment5, appointment6);

        const source: any = {
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        const ready = () => {
            setTimeout(() => {
                if (!myScheduler.current) return;
                myScheduler.current.ensureAppointmentVisible("id1");
                myScheduler.current.beginAppointmentsUpdate();
                myScheduler.current.setAppointmentProperty('id1', 'resizable', false);
                myScheduler.current.setAppointmentProperty('id2', 'draggable', false);
                myScheduler.current.setAppointmentProperty('id3', 'resizable', false);
                myScheduler.current.setAppointmentProperty('id3', 'draggable', false);
                myScheduler.current.setAppointmentProperty('id4', 'readOnly', true);
                myScheduler.current.setAppointmentProperty('id5', 'hidden', true);
                myScheduler.current.setAppointmentProperty('id6', 'hidden', true);
                myScheduler.current.endAppointmentsUpdate();
            });
        };

        const stateProps: ISchedulerProps = {
            appointmentDataFields: {
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                subject: "subject",
                to: "end"
            },
            date: new jqx.date(2018, 11, 23),
            height: 600,
            ready,
            resources: {
                colorScheme: "scheme05",
                dataField: "calendar",
                source: new jqx.dataAdapter(source)
            },
            source: dataAdapter,
            views: [
                'dayView',
                'weekView',
                'monthView'
            ]
        };

        return { ready, stateProps };
    }, []);

    const click = useCallback(() => {
        if (!myScheduler.current) return;
        myScheduler.current.beginAppointmentsUpdate();
        myScheduler.current.setAppointmentProperty('id5', 'hidden', false);
        myScheduler.current.setAppointmentProperty('id6', 'hidden', false);
        myScheduler.current.endAppointmentsUpdate();
    }, []);

    return (
        <div>
            <JqxScheduler
                theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                height={stateProps.height}
                date={stateProps.date}
                source={stateProps.source}
                showLegend={true}
                view={"monthView"}
                appointmentDataFields={stateProps.appointmentDataFields}
                resources={stateProps.resources}
                views={stateProps.views}
                ready={stateProps.ready}
                ref={myScheduler}
            />
            <br />
            <JqxButton theme={'material-purple'} onClick={click} width={200}>
                Show Hidden Appointments
            </JqxButton>
        </div>
    );
};

export default App;