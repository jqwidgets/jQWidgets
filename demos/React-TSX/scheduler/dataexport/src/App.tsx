import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const appointments = useMemo(() => {
        return [
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
                end: new Date(2018, 10, 27, 13, 0, 0),
                id: "id3",
                location: "",
                start: new Date(2018, 10, 27, 11, 0, 0),
                subject: "Course Social Media"
            },
            {
                calendar: "Room 2",
                description: "",
                end: new Date(2018, 10, 23, 18, 0, 0),
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
                start: new Date(2018, 10, 25, 15, 0, 0),
                subject: "Interview with James"
            },
            {
                calendar: "Room 4",
                description: "",
                end: new Date(2018, 10, 26, 16, 0, 0),
                id: "id6",
                location: "",
                start: new Date(2018, 10, 26, 14, 0, 0),
                subject: "Interview with Nancy"
            }
        ];
    }, []);

    const source = useMemo(() => ({
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
    }), [appointments]);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = useMemo(() => ({
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        subject: "subject",
        to: "end"
    }), []);

    const date = useMemo(() => new jqx.date(2018, 11, 23), []);

    const resources = useMemo(() => ({
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const views = useMemo(() => [
        'dayView',
        'weekView',
        'monthView'
    ], []);

    const ready = useCallback(() => {
        setTimeout(() => {
            myScheduler.current && myScheduler.current.ensureAppointmentVisible("id1");
        });
    }, []);

    const exportClick = useCallback((type: string) => {
        if (myScheduler.current) {
            myScheduler.current.exportData(type);
        }
    }, []);

    return (
        <div>
            <JqxScheduler
                theme={'material-purple'}
                ref={myScheduler}
                width={'100%'}
                height={600}
                date={date}
                source={dataAdapter}
                showLegend={true}
                view={"weekView"}
                appointmentDataFields={appointmentDataFields}
                resources={resources}
                views={views}
                ready={ready}
            />
            <div style={{ marginTop: 20 }}>
                <div style={{ float: "left" }}>
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('xls')} width={120}>
                        Export to Excel
                    </JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('xml')} width={120}>
                        Export to XML
                    </JqxButton>
                </div>
                <div style={{ marginLeft: 10, float: "left" }}>
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('csv')} width={120}>
                        Export to CSV
                    </JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('tsv')} width={120}>
                        Export to TSV
                    </JqxButton>
                </div >
                <div style={{ marginLeft: 10, float: "left" }}>
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('html')} width={120}>
                        Export to HTML
                    </JqxButton>
                    <br />
                    <br />
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('json')} width={120}>
                        Export to JSON
                    </JqxButton>
                </div >
                <div style={{ marginLeft: 10, float: "left" }}>
                    <JqxButton theme={'material-purple'} onClick={() => exportClick('pdf')} width={120}>
                        Export to PDF
                    </JqxButton>
                </div >
            </div >
        </div >
    );
};

export default App;