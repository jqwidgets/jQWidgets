import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const source = useMemo(() => ({
        dataType: 'ics',
        url: 'icalendar.txt'
    }), []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const ready = useCallback(() => {
        myScheduler.current && myScheduler.current.scrollTop(200);
    }, []);

    const appointmentDataFields = useMemo(() => ({
        description: 'DESCRIPTION',
        from: 'DTSTART',
        id: 'UID',
        location: 'LOCATION',
        recurrenceException: 'EXDATE',
        recurrencePattern: 'RRULE',
        status: 'STATUS',
        subject: 'SUMMARY',
        to: 'DTEND'
    }), []);

    const views = useMemo(() => ['dayView', 'weekView', 'monthView'], []);
    const date = useMemo(() => new jqx.date(2017, 11, 23), []);

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
            ready={ready}
        />
    );
};

export default App;