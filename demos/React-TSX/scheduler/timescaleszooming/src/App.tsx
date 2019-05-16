import * as React from 'react';
 

import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

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
            date: new jqx.date(2018, 11, 23),
            height: 600,
            ready: () => {
                // gets scrollbable height.
                const scrollHeight = this.myScheduler.current!.scrollHeight();
                /* tslint:disable:no-console */
                console.log("scrollHeight is " + scrollHeight);
                // scroll 700px.
                this.myScheduler.current!.scrollTop(700);
            },
            source: dataAdapter,
            views: [
                { type: 'dayView', showWeekends: true, timeRuler: { scale: 'quarterHour' } },
                { type: 'weekView', showWeekends: true, timeRuler: { scale: 'quarterHour' } }
            ]
        };
    }

    public render() {
        return (
            <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                // @ts-ignore
                width={"100%"}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                showLegend={true}
                view={"weekView"}
                views={this.state.views}
                appointmentDataFields={this.state.appointmentDataFields}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
