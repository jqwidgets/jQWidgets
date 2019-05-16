import * as React from 'react';
 


import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        const appointments = new Array();
        const appointment1 = {
            calendar: "Room 1",
            description: "Quarterly Project Review Meeting",
            end: new Date(2017, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2017, 10, 23, 9, 0, 0),
            subject: "Nancy"
        };
        const appointment2 = {
            calendar: "Room 2",
            description: "Course Social Media",
            end: new Date(2017, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2017, 10, 24, 10, 0, 0),
            subject: "John"
        };
        const appointment3 = {
            calendar: "Room 3",
            description: "",
            end: new Date(2017, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2017, 10, 27, 11, 0, 0),
            subject: "Antony"
        };
        const appointment4 = {
            calendar: "Room 2",
            description: "New Projects Planning",
            end: new Date(2017, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2017, 10, 23, 16, 0, 0),
            subject: "Michael"
        };
        const appointment5 = {
            calendar: "Room 1",
            description: "Interview with James",
            end: new Date(2017, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2017, 10, 25, 15, 0, 0),
            subject: "Peter"
        };
        const appointment6 = {
            calendar: "Room 4",
            description: "Interview with Nancy",
            end: new Date(2017, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2017, 10, 26, 14, 0, 0),
            subject: "George"
        };

        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        const source: any = {
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
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
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
            },
            date: new jqx.date(2017, 11, 23),
            height: 600,
            ready: () => {
                setTimeout(() => {
                    this.myScheduler.current!.ensureAppointmentVisible("id1");
                });
            },
            renderAppointment: this.renderAppointment,
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

    public renderAppointment(data: any) {
        // data Object properties
        // appointment - Object with the properties from the Scheduler.s source object.
        // width - int
        // height- int
        // textColor - hex
        // background - hex
        // borderColor - hex
        // style - string
        // cssClass - string
        // html - html string
        // view - string
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
    };

    public render() {
        return (
            <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                // @ts-ignore
                width={'100%'}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                view={"weekView"}
                appointmentDataFields={this.state.appointmentDataFields}
                resources={this.state.resources}
                appointmentsMinHeight={20}
                views={this.state.views}
                ready={this.state.ready}
                renderAppointment={this.state.renderAppointment}
            />
        );
    }
}

export default App;
