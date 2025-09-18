import * as React from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

function App() {
    const myScheduler = React.useRef<JqxScheduler>(null);

    const appointments = [
        {
            calendar: "Room 1",
            description: "George brings projector for presentations.",
            end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            subject: "Quarterly Project Review Meeting"
        },
        {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            subject: "IT Group Mtg."
        },
        {
            calendar: "Room 1",
            description: "",
            end: new Date(2018, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 27, 11, 0, 0),
            subject: "Course Social Media"
        },
        {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 25, 23, 59, 59),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 0, 0, 0),
            subject: "New Projects Planning"
        },
        {
            calendar: "Room 1",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 25, 15, 0, 0),
            subject: "Interview with James"
        },
        {
            calendar: "Room 3",
            description: "",
            end: new Date(2018, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 26, 14, 0, 0),
            subject: "Interview with Nancy"
        }
    ];

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

    const dataAdapter: any = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = {
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        subject: "subject",
        to: "end"
    };

    const date = React.useMemo(() => new jqx.date(2018, 11, 23), []);

    const height = 600;

    const resources = React.useMemo(() => ({
        colorScheme: "scheme04",
        dataField: "calendar",
        orientation: "vertical",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const views = [
        { type: 'timelineDayView', appointmentHeight: 30 },
        { type: 'timelineWeekView', appointmentHeight: 30 },
        { type: 'timelineMonthView', appointmentHeight: 30 }
    ];

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
            height={height}
            date={date}
            source={dataAdapter}
            dayNameFormat="abbr"
            showLegend={true}
            view="timelineWeekView"
            appointmentDataFields={appointmentDataFields}
            resources={resources}
            views={views}
            ready={ready}
        />
    );
}

export default App;