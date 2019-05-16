import * as React from 'react';
 


import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        const appointments = new Array();
        const appointment1 = {
            calendar: "Paula",
            description: "",
            end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            status: "tentative",
            subject: "Appointment with the dentist"
        };
        const appointment2 = {
            calendar: "Tom",
            description: "",
            end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            status: "tentative",
            subject: "Business Plans Review"
        };
        const appointment3 = {
            calendar: "Chris",
            description: "",
            end: new Date(2018, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 27, 11, 0, 0),
            status: "tentative",
            subject: "Lunch with Monica"
        };
        const appointment4 = {
            calendar: "Paula",
            description: "",
            end: new Date(2018, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            status: 'free',
            subject: "Meeting John"
        };
        const appointment5 = {
            calendar: "Chris",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 25, 15, 0, 0),
            status: 'outOfOffice',
            subject: "Parent-Teacher Conference"
        };
        const appointment6 = {
            calendar: "Tom",
            description: "",
            end: new Date(2018, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 26, 14, 0, 0),
            status: 'busy',
            subject: "Interview with Nancy"
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        const source: any = {
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
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                status: "status",
                subject: "subject",
                to: "end"
            },
            date: new jqx.date(2018, 11, 23),
            height: 600,
            ready: () => {
                setTimeout(() => {
                    this.myScheduler.current!.ensureAppointmentVisible("id1");
                });
            },
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
    }

    public render() {
        return (
            <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                // @ts-ignore
                width={'100%'}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                showLegend={true}
                view={'weekView'}
                appointmentDataFields={this.state.appointmentDataFields}
                resources={this.state.resources}
                views={this.state.views}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
