import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
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

  const views = useMemo(() => ["dayView", "weekView"], []);

  const ready = useCallback(() => {
    const scrollHeight = myScheduler.current!.scrollHeight();
    // tslint:disable-next-line:no-console
    console.log("scrollHeight is " + scrollHeight);
    myScheduler.current!.scrollTop(700);
  }, []);

  return (
    <JqxScheduler
      theme="material-purple"
      ref={myScheduler}
      width="100%"
      height={600}
      date={date}
      source={dataAdapter}
      showLegend={true}
      rowsHeight={40}
      view="weekView"
      views={views}
      appointmentDataFields={appointmentDataFields}
      ready={ready}
    />
  );
};

export default App;