import * as React from 'react';
import { useRef, useEffect, useMemo, useCallback } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const { dataAdapter, appointmentDataFields, date, views } = useMemo(() => {
        const appointments = [
            {
                calendar: "Room 2",
                description: "",
                from: new Date(2017, 10, 22, 8, 0, 0),
                id: "id4",
                location: "",
                style: '#AA4643',
                subject: "New Projects Planning",
                to: new Date(2017, 10, 22, 13, 0, 0)
            },
            {
                calendar: "Room 1",
                description: "",
                from: new Date(2017, 10, 25, 13, 0, 0),
                id: "id5",
                location: "",
                style: '#89A54E',
                subject: "Interview with James",
                to: new Date(2017, 10, 25, 15, 0, 0)
            },
            {
                calendar: "Room 2",
                description: "",
                from: new Date(2017, 10, 26, 14, 0, 0),
                id: "id6",
                location: "",
                style: '#71588F',
                subject: "Interview with Nancy",
                to: new Date(2017, 10, 26, 16, 0, 0),
            },
            {
                calendar: "Room 1",
                description: "",
                from: new Date(2017, 10, 23, 10, 0, 0),
                id: "id7",
                location: "",
                recurrenceException: '2017-11-24 09:00:00,2017-11-26 12:00:00',
                recurrenceRule: 'FREQ=DAILY;',
                style: '#307DD7',
                subject: "Daily Meeting",
                to: new Date(2017, 10, 23, 11, 0, 0)
            }
        ];

        const source = {
            dataFields: [
                { name: 'calendar', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'from', type: 'date' },
                { name: 'id', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'recurrenceException', type: 'string' },
                { name: 'recurrenceRule', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'style', type: 'string' },
                { name: 'to', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };

        const dataAdapter = new jqx.dataAdapter(source);

        const appointmentDataFields = {
            description: "description",
            from: "from",
            id: "id",
            location: "location",
            recurrenceException: 'recurrenceException',
            recurrencePattern: 'recurrenceRule',
            resourceId: "calendar",
            style: 'style',
            subject: "subject",
            to: "to"
        };

        const date = new jqx.date(2017, 11, 23);
        const views = ['dayView', 'weekView', 'monthView'];

        return { dataAdapter, appointmentDataFields, date, views };
    }, []);

    const ready = useCallback(() => {
        setTimeout(() => {
            myScheduler.current?.ensureAppointmentVisible("id7");
        });
    }, []);

    return (
        <JqxScheduler
            theme="material-purple"
            ref={myScheduler}
            width="100%"
            height={600}
            date={date}
            source={dataAdapter}
            appointmentDataFields={appointmentDataFields}
            view="weekView"
            views={views}
            ready={ready}
        />
    );
};

export default App;