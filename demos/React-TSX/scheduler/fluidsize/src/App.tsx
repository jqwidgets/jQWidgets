import * as React from 'react';

import './App.css';

import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = React.useRef<JqxScheduler>(null);

    const source: any = React.useMemo(() => ({
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
    }), []);

    const dataAdapter: any = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = React.useMemo(() => ({
        description: "about",
        from: "start",
        id: "id",
        location: "address",
        resourceId: "calendar",
        status: "status",
        style: "style",
        subject: "name",
        to: "end"
    }), []);

    const date = React.useMemo(() => new jqx.date(2018, 11, 23), []);

    const views = React.useMemo(() => [
        'dayView',
        'weekView',
        'monthView'
    ], []);

    return (
        <JqxScheduler theme={'material-purple'} ref={myScheduler}
            width={"100%"}
            height={"100%"}
            date={date}
            source={dataAdapter}
            showLegend={true}
            view={"weekView"}
            views={views}
            appointmentDataFields={appointmentDataFields}
        />
    );
};

export default App;