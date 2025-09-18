import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const dataAdapter = useMemo(() => {
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
        return new jqx.dataAdapter(source);
    }, []);

    const appointmentDataFields = useMemo(() => ({
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

    const views = useMemo(() => [
        'dayView',
        'weekView',
        'monthView'
    ], []);

    const date = useMemo(() => new jqx.date(2016, 11, 23), []);

    return (
        <JqxScheduler
            theme="material-purple"
            ref={myScheduler}
            width="100%"
            height={600}
            date={date}
            source={dataAdapter}
            showLegend={true}
            view="weekView"
            views={views}
            appointmentDataFields={appointmentDataFields}
        />
    );
};

export default App;