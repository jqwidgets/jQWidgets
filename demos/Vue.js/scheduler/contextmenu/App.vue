<template>
    <JqxScheduler ref="myScheduler"
        :width="getWidth" :height="600" :source="dataAdapter" :date="date"  :showLegend="true" :view="'1'"
        :appointmentDataFields="appointmentDataFields" :views="views" :resources="resources" 
        :contextMenuCreate="contextMenuCreate" :contextMenuItemClick="contextMenuItemClick" 
        :contextMenuOpen="contextMenuOpen" :contextMenuClose="contextMenuClose" 
    />
</template>

<script>
    import JqxScheduler from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxscheduler.vue'

    export default {
        components: {
            JqxScheduler
        },
        data: function () {
            return {
				getWidth: '90%',
                date: new jqx.date(2016, 11, 23),
                appointmentDataFields: 
                {
                    from: 'start',
                    to: 'end',
                    id: 'id',
                    description: 'description',
                    location: 'place',
                    subject: 'subject',
                    resourceId: 'calendar'
                },
                resources: 
                {
                    colorScheme: 'scheme02',
                    dataField: 'calendar',
                    source: new jqx.dataAdapter(this.source)
                },
                views:
                [        
                    'dayView',
                    'weekView',
                    'monthView'
                ]
            }
        },
        beforeCreate: function () {
            const generateAppointments = function () {
                const appointments = new Array();
                const appointment1 = {
                    id: 'id1',
                    description: 'George brings projector for presentations.',
                    location: '',
                    subject: 'Quarterly Project Review Meeting',
                    calendar: 'Room 1',
                    start: new Date(2016, 10, 23, 9, 0, 0),
                    end: new Date(2016, 10, 23, 16, 0, 0)
                }
                const appointment2 = {
                    id: 'id2',
                    description: '',
                    location: '',
                    subject: 'IT Group Mtg.',
                    calendar: 'Room 2',
                    start: new Date(2016, 10, 24, 10, 0, 0),
                    end: new Date(2016, 10, 24, 15, 0, 0)
                }
                const appointment3 = {
                    id: 'id3',
                    description: '',
                    location: '',
                    subject: 'Course Social Media',
                    calendar: 'Room 3',
                    start: new Date(2016, 10, 27, 11, 0, 0),
                    end: new Date(2016, 10, 27, 13, 0, 0)
                }
                const appointment4 = {
                    id: 'id4',
                    description: '',
                    location: '',
                    subject: 'New Projects Planning',
                    calendar: 'Room 2',
                    start: new Date(2016, 10, 23, 16, 0, 0),
                    end: new Date(2016, 10, 23, 18, 0, 0)
                }
                const appointment5 = {
                    id: 'id5',
                    description: '',
                    location: '',
                    subject: 'Interview with James',
                    calendar: 'Room 1',
                    start: new Date(2016, 10, 25, 15, 0, 0),
                    end: new Date(2016, 10, 25, 17, 0, 0)
                }
                const appointment6 = {
                    id: 'id6',
                    description: '',
                    location: '',
                    subject: 'Interview with Nancy',
                    calendar: 'Room 4',
                    start: new Date(2016, 10, 26, 14, 0, 0),
                    end: new Date(2016, 10, 26, 16, 0, 0)
                }

                appointments.push(appointment1);
                appointments.push(appointment2);
                appointments.push(appointment3);
                appointments.push(appointment4);
                appointments.push(appointment5);
                appointments.push(appointment6);

                return appointments;
            };

            this.source =
                {
                    dataType: 'array',
                    dataFields: [
                        { name: 'id', type: 'string' },
                        { name: 'description', type: 'string' },
                        { name: 'location', type: 'string' },
                        { name: 'subject', type: 'string' },
                        { name: 'calendar', type: 'string' },
                        { name: 'start', type: 'date' },
                        { name: 'end', type: 'date' }
                    ],
                    id: 'id',
                    localData: generateAppointments()
                };

            this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        mounted: function () {
            this.$refs.myScheduler.ensureAppointmentVisible('id1');
        },
        methods: {
            /*
            * called when the context menu is created.
            * @param {Object} menu - jqxMenu's jQuery object.
            * @param {Object} settings - Object with the menu's initialization settings.
            */
            contextMenuCreate : function (menu, settings) {
                const source = settings.source;
                source.push({ id: 'delete', label: 'Delete Appointment' });
                source.push({
                    id: 'status', label: 'Set Status', items:
                    [
                        { label: 'Free', id: 'free' },
                        { label: 'Out of Office', id: 'outOfOffice' },
                        { label: 'Tentative', id: 'tentative' },
                        { label: 'Busy', id: 'busy' }
                    ]
                });
            },
            /*
            * called when the user clicks an item in the Context Menu. Returning true as a result disables the built-in Click handler.
            * @param {Object} menu - jqxMenu's jQuery object.
            * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
            * @param {jQuery.Event Object} the jqxMenu's itemclick event object.
            */
            contextMenuItemClick: function (menu, appointment, event) {
                const args = event.args;
                switch (args.id) {
                    case 'delete':
                        this.$refs.myScheduler.deleteAppointment(appointment.id);
                        return true;
                    case 'free':
                        this.$refs.myScheduler.setAppointmentProperty(appointment.id, 'status', 'free');
                        return true;
                    case 'outOfOffice':
                        this.$refs.myScheduler.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
                        return true;
                    case 'tentative':
                        this.$refs.myScheduler.setAppointmentProperty(appointment.id, 'status', 'tentative');
                        return true;
                    case 'busy':
                        this.$refs.myScheduler.setAppointmentProperty(appointment.id, 'status', 'busy');
                        return true;
                }
            },
            /*
            * called when the menu is opened.
            * @param {Object} menu - jqxMenu's jQuery object.
            * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
            * @param {jQuery.Event Object} the open event.
            */
            contextMenuOpen: function (menu, appointment, event) {
                if (!appointment) {
                    menu.jqxMenu('hideItem', 'delete');
                    menu.jqxMenu('hideItem', 'status');
                }
                else {
                    menu.jqxMenu('showItem', 'delete');
                    menu.jqxMenu('showItem', 'status');
                }
            },
            /*
            * called when the menu is closed.
            * @param {Object} menu - jqxMenu's jQuery object.
            * @param {Object} the selected appointment instance or NULL when the menu is opened from cells selection.
            * @param {jQuery.Event Object} the close event.
            */
            contextMenuClose : function (menu, settings) {

            }
        }
    }
</script>