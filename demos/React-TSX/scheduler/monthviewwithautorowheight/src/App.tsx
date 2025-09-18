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
            calendar: "Room 3",
            description: "",
            end: new Date(2018, 10, 26, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 23, 11, 0, 0),
            subject: "Course Social Media"
        },
        {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 27, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            subject: "New Projects Planning"
        },
        {
            calendar: "Room 1",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 24, 15, 0, 0),
            subject: "Interview with James"
        },
        {
            calendar: "Room 4",
            description: "",
            end: new Date(2018, 10, 30, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 24, 14, 0, 0),
            subject: "Interview with Nancy"
        }
    ];

    const source: any = React.useMemo(() => ({
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
    }), []);

    const dataAdapter: any = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = React.useMemo(() => ({
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        subject: "subject",
        to: "end"
    }), []);

    const resources = React.useMemo(() => ({
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const views = React.useMemo(() => [
        'dayView',
        'weekView',
        { type: 'monthView', monthRowAutoHeight: true }
    ], []);

    const date = React.useMemo(() => new jqx.date(2018, 11, 23), []);

    return (
        <JqxScheduler
            theme={'material-purple'}
            ref={myScheduler}
            // @ts-ignore
            width={'100%'}
            height={600}
            date={date}
            source={dataAdapter}
            showLegend={true}
            view={"monthView"}
            appointmentDataFields={appointmentDataFields}
            resources={resources}
            views={views}
        />
    );
}

export default App;