import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);

    const { 
        source, 
        resources, 
        appointmentDataFields, 
        height, 
        date, 
        views 
    } = useMemo(() => {
        const appointments = [];
        const appointment1 = {
            calendar: "Room 1",
            description: "George brings projector for presentations.",
            end: new Date(2017, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2017, 10, 23, 9, 0, 0),
            subject: "Quarterly Project Review Meeting"
        };
        const appointment2 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2017, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2017, 10, 24, 10, 0, 0),
            subject: "IT Group Mtg."
        };
        const appointment3 = {
            calendar: "Room 3",
            description: "",
            end: new Date(2017, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2017, 10, 27, 11, 0, 0),
            subject: "Course Social Media"
        };
        const appointment4 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2017, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2017, 10, 23, 16, 0, 0),
            subject: "New Projects Planning"
        };
        const appointment5 = {
            calendar: "Room 1",
            description: "",
            end: new Date(2017, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2017, 10, 25, 15, 0, 0),
            subject: "Interview with James"
        };
        const appointment6 = {
            calendar: "Room 4",
            description: "",
            end: new Date(2017, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2017, 10, 26, 14, 0, 0),
            subject: "Interview with Nancy"
        };
        appointments.push(appointment1, appointment2, appointment3, appointment4, appointment5, appointment6);

        const source = {
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };
        const dataAdapter = new jqx.dataAdapter(source);

        return {
            source: dataAdapter,
            resources: {
                colorScheme: "scheme02",
                dataField: "calendar",
                source: new jqx.dataAdapter(source)
            },
            appointmentDataFields: {
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                subject: "subject",
                to: "end"
            },
            height: 600,
            date: new jqx.date(2017, 11, 23),
            views: [
                'dayView',
                'weekView',
                'monthView'
            ]
        };
    }, []);

    const contextMenuCreate = useCallback((menu: any, settings: any) => {
        const menuItems: any[] = [];
        settings.source!.forEach((element: any) => {
            menuItems.push(element);
        });
        menuItems.push({ id: 'delete', label: 'Delete Appointment' });
        menuItems.push({
            id: 'status',
            items: [
                { label: 'Free', id: 'free' },
                { label: 'Out of Office', id: 'outOfOffice' },
                { label: 'Tentative', id: 'tentative' },
                { label: 'Busy', id: 'busy' }
            ],
            label: 'Set Status'
        });
        settings.source = menuItems;
    }, []);

    const contextMenuItemClick = useCallback((menu: any, appointment: any, event: any) => {
        const args = event.args;
        switch (args.id) {
            case 'delete':
                myScheduler.current!.deleteAppointment(appointment.id);
                return true;
            case 'free':
                myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'free');
                return true;
            case 'outOfOffice':
                myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
                return true;
            case 'tentative':
                myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'tentative');
                return true;
            case 'busy':
                myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'busy');
                return true;
            default:
                return false;
        }
    }, []);

    const contextMenuClose = useCallback(() => {}, []);

    const contextMenuOpen = useCallback((menu: any, appointment: any, event: any) => {
        if (!appointment) {
            menu.jqxMenu('hideItem', 'delete');
            menu.jqxMenu('hideItem', 'status');
        } else {
            menu.jqxMenu('showItem', 'delete');
            menu.jqxMenu('showItem', 'status');
        }
    }, []);

    const ready = useCallback(() => {
        setTimeout(() => {
            myScheduler.current!.ensureAppointmentVisible("id1");
        });
    }, []);

    return (
        <JqxScheduler
            theme="material-purple"
            ref={myScheduler}
            width="100%"
            height={height}
            date={date}
            source={source}
            showLegend={true}
            contextMenuCreate={contextMenuCreate}
            contextMenuItemClick={contextMenuItemClick}
            contextMenuOpen={contextMenuOpen}
            contextMenuClose={contextMenuClose}
            resources={resources}
            view="weekView"
            views={views}
            appointmentDataFields={appointmentDataFields}
            ready={ready}
        />
    );
};

export default App;