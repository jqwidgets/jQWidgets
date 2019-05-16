import * as React from 'react';
 


import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        const appointments = new Array();
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
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        const source: any = {
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

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                subject: "subject",
                to: "end"
            },
            /**
             * called when the context menu is created.
             * @param {Object} menu - jqxMenu's jQuery object.
             * @param {Object} settings - Object with the menu's initialization settings.
             */
            contextMenuCreate: (menu: any, settings: any) => {
                const menuItems: any[] = [];
                settings.source!.forEach((element: any) => {
                    menuItems.push(element);
                });
                menuItems.push({ id: 'delete', label: 'Delete Appointment' });
                menuItems.push({
                    id: 'status', 
                    items:
                    [
                        { label: 'Free', id: 'free' },
                        { label: 'Out of Office', id: 'outOfOffice' },
                        { label: 'Tentative', id: 'tentative' },
                        { label: 'Busy', id: 'busy' }
                    ],
                    label: 'Set Status'
                });

                settings.source = menuItems;
            },
            /**
             * called when the user clicks an item in the Context Menu. Returning true as a result disables the built-in Click handler.
             * @param {Object} menu - jqxMenu's jQuery object.
             * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
             * @param {jQuery.Event Object} the jqxMenu's itemclick event object.
             */
            contextMenuItemClick: (menu: any, appointment: any, event: any) => {
                const args = event.args;
                switch (args.id) {
                    case 'delete':
                        this.myScheduler.current!.deleteAppointment(appointment.id);
                        return true;
                    case 'free':
                        this.myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'free');
                        return true;
                    case 'outOfOffice':
                        this.myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
                        return true;
                    case 'tentative':
                        this.myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'tentative');
                        return true;
                    case 'busy':
                        this.myScheduler.current!.setAppointmentProperty(appointment.id, 'status', 'busy');
                        return true;
                    default:
                        return false;
                }
            },

            /**
             * called when the menu is closed.
             * @param {Object} menu - jqxMenu's jQuery object.
             * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
             * @param {jQuery.Event Object} the close event.
             */
            contextMenuClose: () => { /* Sets or gets a function called when the context menu is closed. */ },

            /**
             * called when the menu is opened.
             * @param {Object} menu - jqxMenu's jQuery object.
             * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
             * @param {jQuery.Event Object} the open event.
             */
            contextMenuOpen: (menu, appointment, event) => {
                if (!appointment) {
                    menu.jqxMenu('hideItem', 'delete');
                    menu.jqxMenu('hideItem', 'status');
                }
                else {
                    menu.jqxMenu('showItem', 'delete');
                    menu.jqxMenu('showItem', 'status');
                }
            },
            date: new jqx.date(2017, 11, 23),
            height: 600,
            ready: () => {
                setTimeout(() => {
                    this.myScheduler.current!.ensureAppointmentVisible("id1");
                });
            },
            resources: {
                colorScheme: "scheme02",
                dataField: "calendar",
                source: new jqx.dataAdapter(source)
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
                width={'100%'}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                showLegend={true}

                contextMenuCreate={this.state.contextMenuCreate}
                contextMenuItemClick={this.state.contextMenuItemClick}
                contextMenuOpen={this.state.contextMenuOpen}
                contextMenuClose={this.state.contextMenuClose}

                resources={this.state.resources}
                view={'weekView'}
                views={this.state.views}
                appointmentDataFields={this.state.appointmentDataFields}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
