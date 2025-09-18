import * as React from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = React.useRef<JqxScheduler>(null);

    const appointments = React.useMemo(() => {
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

    const source = React.useMemo(() => ({
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

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

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
        'monthView'
    ], []);

    const date = React.useMemo(() => new jqx.date(2018, 11, 23), []);

    const exportSettings = React.useMemo(() => ({
        fileName: null
    }), []);

    const ready = React.useCallback(() => {
        setTimeout(() => {
            myScheduler.current && myScheduler.current.ensureAppointmentVisible("id1");
        });
    }, []);

    const printClick = React.useCallback((event: any) => {
        if (!myScheduler.current) return;
        const content = myScheduler.current.exportData('html');
        const newWindow = window.open('', '', 'width=800, height=500');
        const doc = newWindow!.document.open();
        const pageContent =
            '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8" />' +
            '<title>jqxScheduler Print Preview</title>' +
            '</head>' +
            '<body>' + content + '</body></html>';
        try {
            doc.write(pageContent);
            doc.close();
            newWindow!.print();
        } catch (er) {
            doc.close();
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
                exportSettings={exportSettings}
                showLegend={true}
                view={"weekView"}
                appointmentDataFields={appointmentDataFields}
                resources={resources}
                views={views}
                ready={ready}
            />
            <JqxButton
                theme={'material-purple'}
                style={{ margin: "20px 0 0 10px" }}
                onClick={printClick}
                width={80}
            >
                Print
            </JqxButton>
        </div>
    );
};

export default App;