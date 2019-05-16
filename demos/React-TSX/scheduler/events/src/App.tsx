import * as React from 'react';
 

import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();
    private myLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);

        this.mySchedulerOnAppointmentAdd = this.mySchedulerOnAppointmentAdd.bind(this);
        this.mySchedulerOnAppointmentDelete = this.mySchedulerOnAppointmentDelete.bind(this);
        this.mySchedulerOnAppointmentChange = this.mySchedulerOnAppointmentChange.bind(this);
        this.mySchedulerOnAppointmentDoubleClick = this.mySchedulerOnAppointmentDoubleClick.bind(this);
        this.mySchedulerOnCellClick = this.mySchedulerOnCellClick.bind(this);

        const source: any = {
            dataFields: [
                { name: "id", type: "string" },
                { name: "status", type: "string" },
                { name: "about", type: "string" },
                { name: "address", type: "string" },
                { name: "company", type: "string" },
                { name: "name", type: "string" },
                { name: "style", type: "string" },
                { name: "calendar", type: "string" },
                { name: "start", type: "date", format: "yyyy-MM-dd HH:mm" },
                { name: "end", type: "date", format: "yyyy-MM-dd HH:mm" }
            ],
            dataType: "json",
            id: "id",
            url: 'appointments.txt'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "about",
                from: "start",
                id: "id",
                location: "address",
                resourceId: "calendar",
                status: "status",
                style: "style",
                subject: "name",
                to: "end"
            },
            date: new jqx.date(2016, 11, 23),
            height: 600,
            ready: () => {
                this.myScheduler.current!.scrollTop(700);
            },
            source: dataAdapter,
            views: [
                "dayView",
                "weekView"
            ]
        };
    }

    public render() {
        return (
            <div>
            <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                onAppointmentDelete={this.mySchedulerOnAppointmentDelete}
                onAppointmentAdd={this.mySchedulerOnAppointmentAdd}
                onAppointmentDoubleClick={this.mySchedulerOnAppointmentDoubleClick}
                onAppointmentChange={this.mySchedulerOnAppointmentChange}
                onCellClick={this.mySchedulerOnCellClick}
                // @ts-ignore
                width={"100%"}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                showLegend={true}
                rowsHeight={40}
                view={"weekView"}
                views={this.state.views}
                appointmentDataFields={this.state.appointmentDataFields}
                ready={this.state.ready}
            />
            
            <br/>

                <div>Event Log:</div>
                <div ref={this.myLog} />
            </div>
        );
    }

    // Event handling
    private mySchedulerOnAppointmentDelete(event: any): void {
        // const appointment = event.args.appointment;
        this.myLog.current!.innerHTML = 'appointmentDelete is raised';
    }

    private mySchedulerOnAppointmentAdd(event: any): void {
        // const appointment = event.args.appointment;
        this.myLog.current!.innerHTML = 'appointmentAdd is raised';
    }

    private mySchedulerOnAppointmentDoubleClick(event: any): void {
        // const appointment = event.args.appointment;
        this.myLog.current!.innerHTML = 'appointmentDoubleClick is raised';
    }

    private mySchedulerOnAppointmentChange(event: any): void {
        // const appointment = event.args.appointment;
        this.myLog.current!.innerHTML = 'appointmentChange is raised';
    }

    private mySchedulerOnCellClick(event: any): void {
        // const appointment = event.args.appointment;
        this.myLog.current!.innerHTML = 'cellClick is raised';
    }
}

export default App;
