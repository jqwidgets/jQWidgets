import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const appointments = useMemo(() => [
        {
            calendar: "Paula",
            description: "",
            end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            status: "tentative",
            subject: "Appointment with the dentist"
        },
        {
            calendar: "Tom",
            description: "",
            end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            status: "tentative",
            subject: "Business Plans Review"
        },
        {
            calendar: "Chris",
            description: "",
            end: new Date(2018, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 27, 11, 0, 0),
            status: "tentative",
            subject: "Lunch with Monica"
        },
        {
            calendar: "Paula",
            description: "",
            end: new Date(2018, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            status: 'free',
            subject: "Meeting John"
        },
        {
            calendar: "Chris",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 25, 15, 0, 0),
            status: 'outOfOffice',
            subject: "Parent-Teacher Conference"
        },
        {
            calendar: "Tom",
            description: "",
            end: new Date(2018, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 26, 14, 0, 0),
            status: 'busy',
            subject: "Interview with Nancy"
        }
    ], []);

    const source = useMemo(() => ({
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'status', type: 'string' },
            { name: 'end', type: 'date' }
        ],
        dataType: "array",
        id: 'id',
        localData: appointments
    }), [appointments]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = useMemo(() => ({
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        status: "status",
        subject: "subject",
        to: "end"
    }), []);

    const resources = useMemo(() => ({
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const date = useMemo(() => new jqx.date(2018, 11, 23), []);

    const views = useMemo(() => ['dayView', 'weekView', 'monthView'], []);

    const ready = React.useCallback(() => {
        setTimeout(() => {
            myScheduler.current?.ensureAppointmentVisible("id1");
        });
    }, []);

    return (
        <JqxScheduler
            theme="material-purple"
            ref={myScheduler}
            width="100%"
            height={600}
            date={date}
            source={dataAdapter}
            showLegend={true}
            view="weekView"
            appointmentDataFields={appointmentDataFields}
            resources={resources}
            views={views}
            ready={ready}
        />
    );
};

export default App;