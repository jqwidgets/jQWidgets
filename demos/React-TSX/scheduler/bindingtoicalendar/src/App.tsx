import * as React from 'react';
 

import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataType: "ics",
            url: 'icalendar.txt'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "DESCRIPTION",
                from: "DTSTART",
                id: "UID",
                location: "LOCATION",
                recurrenceException: "EXDATE",
                recurrencePattern: "RRULE",
                status: "STATUS",
                subject: "SUMMARY",
                to: "DTEND",
            },
            date: new jqx.date(2017, 11, 23),
            height: 600,
            ready: () => {
                this.myScheduler.current!.scrollTop(200);
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
