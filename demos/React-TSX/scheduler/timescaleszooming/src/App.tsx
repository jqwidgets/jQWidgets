import * as React from 'react';
import { useRef, useMemo, useState, useCallback } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
  const myScheduler = useRef<JqxScheduler>(null);

  const source = useMemo(() => ({
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

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

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

  const date = useMemo(() => new jqx.date(2018, 11, 23), []);

  const views = useMemo(() => [
    { type: 'dayView', showWeekends: true, timeRuler: { scale: 'quarterHour' } },
    { type: 'weekView', showWeekends: true, timeRuler: { scale: 'quarterHour' } }
  ], []);

  const ready = useCallback(() => {
    const scrollHeight = myScheduler.current!.scrollHeight();
    console.log("scrollHeight is " + scrollHeight);
    myScheduler.current!.scrollTop(700);
  }, []);

  const [height] = useState(600);

  return (
    <JqxScheduler
      theme="material-purple"
      ref={myScheduler}
      width="100%"
      height={height}
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