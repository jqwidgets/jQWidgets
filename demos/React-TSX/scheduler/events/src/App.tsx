import * as React from 'react'
import { useRef, useMemo, useCallback } from 'react'
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler'

function App() {
    const myScheduler = useRef<JqxScheduler>(null)
    const myLog = useRef<HTMLDivElement>(null)

    const source = useMemo(
        () => ({
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
        }),
        []
    )

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source])

    const appointmentDataFields = useMemo(
        () => ({
            description: "about",
            from: "start",
            id: "id",
            location: "address",
            resourceId: "calendar",
            status: "status",
            style: "style",
            subject: "name",
            to: "end"
        }),
        []
    )

    const views = useMemo(() => ["dayView", "weekView"], [])

    const ready = useCallback(() => {
        myScheduler.current?.scrollTop(700)
    }, [])

    const mySchedulerOnAppointmentDelete = useCallback((event: any) => {
        if (myLog.current) myLog.current.innerHTML = 'appointmentDelete is raised'
    }, [])

    const mySchedulerOnAppointmentAdd = useCallback((event: any) => {
        if (myLog.current) myLog.current.innerHTML = 'appointmentAdd is raised'
    }, [])

    const mySchedulerOnAppointmentDoubleClick = useCallback((event: any) => {
        if (myLog.current) myLog.current.innerHTML = 'appointmentDoubleClick is raised'
    }, [])

    const mySchedulerOnAppointmentChange = useCallback((event: any) => {
        if (myLog.current) myLog.current.innerHTML = 'appointmentChange is raised'
    }, [])

    const mySchedulerOnCellClick = useCallback((event: any) => {
        if (myLog.current) myLog.current.innerHTML = 'cellClick is raised'
    }, [])

    return (
        <div>
            <JqxScheduler
                theme='material-purple'
                ref={myScheduler}
                onAppointmentDelete={mySchedulerOnAppointmentDelete}
                onAppointmentAdd={mySchedulerOnAppointmentAdd}
                onAppointmentDoubleClick={mySchedulerOnAppointmentDoubleClick}
                onAppointmentChange={mySchedulerOnAppointmentChange}
                onCellClick={mySchedulerOnCellClick}
                width="100%"
                height={600}
                date={useMemo(() => new jqx.date(2016, 11, 23), [])}
                source={dataAdapter}
                showLegend={true}
                rowsHeight={40}
                view="weekView"
                views={views}
                appointmentDataFields={appointmentDataFields}
                ready={ready}
            />
            <br />
            <div>Event Log:</div>
            <div ref={myLog} />
        </div>
    )
}

export default App