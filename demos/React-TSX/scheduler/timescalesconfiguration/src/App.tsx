import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const {
        height,
        date,
        source,
        views,
        appointmentDataFields
    } = useMemo(() => {
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

        const appointmentDataFields = {
            description: "about",
            from: "start",
            id: "id",
            location: "address",
            resourceId: "calendar",
            status: "status",
            style: "style",
            subject: "name",
            to: "end"
        };

        const date = new jqx.date(2018, 11, 23);

        const height = 600;

        const views = [
            { type: "dayView", showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
            { type: "weekView", showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
            { type: "timelineDayView", showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } },
            { type: "timelineWeekView", showWeekends: true, timeRuler: { scaleStartHour: 7, scaleEndHour: 21 } }
        ];

        return { height, date, source: dataAdapter, views, appointmentDataFields };
    }, []);

    return (
        <JqxScheduler
            theme={'material-purple'}
            ref={myScheduler}
            width={"100%"}
            height={height}
            date={date}
            source={source}
            view={"weekView"}
            views={views}
            appointmentDataFields={appointmentDataFields}
        />
    );
};

export default App;