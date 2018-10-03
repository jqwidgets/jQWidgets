<template>
    <JqxScheduler ref="myScheduler"
        :width="getWidth" :height="600" :source="dataAdapter" :date="date"  :view="'weekView'" :appointmentsMinHeight="20"
        :appointmentDataFields="appointmentDataFields" :views="views"  :renderAppointment="renderAppointment" 
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
                    location: 'location',
                    subject: 'subject',
                    style: 'style',
                    color: 'color',
                    background: 'background',
                    borderColor: 'borderColor'
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
            const generateAppointments =  function () {
                const appointments = new Array();
                const appointment1 = {
                    id: 'id1',
                    description: 'Quarterly Project Review Meeting',
                    location: '',
                    subject: 'Nancy',
                    calendar: 'Room 1',
                    start: new Date(2016, 10, 23, 9, 0, 0),
                    end: new Date(2016, 10, 23, 16, 0, 0)
                }
                const appointment2 = {
                    id: 'id2',
                    description: 'IT Group Mtg.',
                    location: '',
                    subject: 'John',
                    calendar: 'Room 2',
                    start: new Date(2016, 10, 24, 10, 0, 0),
                    end: new Date(2016, 10, 24, 15, 0, 0)
                }
                const appointment3 = {
                    id: 'id3',
                    description: 'Course Social Media',
                    location: '',
                    subject: 'Antony',
                    calendar: 'Room 3',
                    start: new Date(2016, 10, 27, 11, 0, 0),
                    end: new Date(2016, 10, 27, 13, 0, 0)
                }
                const appointment4 = {
                    id: 'id4',
                    description: 'New Projects Planning',
                    location: '',
                    subject: 'Michael',
                    calendar: 'Room 2',
                    start: new Date(2016, 10, 23, 16, 0, 0),
                    end: new Date(2016, 10, 23, 18, 0, 0)
                }
                const appointment5 = {
                    id: 'id5',
                    description: 'Interview with James',
                    location: '',
                    subject: 'Peter',
                    calendar: 'Room 1',
                    start: new Date(2016, 10, 25, 15, 0, 0),
                    end: new Date(2016, 10, 25, 17, 0, 0)
                }
                const appointment6 = {
                    id: 'id6',
                    description: 'Interview with Nancy',
                    location: '',
                    subject: 'George',
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
            }

            this.source =
                {
                    dataType: 'array',
                    dataFields: [
                        { name: 'id', type: 'string' },
                        { name: 'description', type: 'string' },
                        { name: 'location', type: 'string' },
                        { name: 'subject', type: 'string' },
                        { name: 'calendar', type: 'string' },
                        { name: 'style', type: 'string' },
                        { name: 'color', type: 'string' },
                        { name: 'background', type: 'string' },
                        { name: 'borderColor', type: 'string' },
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
            renderAppointment: function (data) {
                // data Object properties
                // appointment - Object with the properties from the Scheduler.s source object.
                // width - int
                // height- int
                // textColor - hex
                // background - hex
                // borderColor - hex
                // style - string
                // cssClass - string
                // html - html string
                // view - string
                let img = '<img style="top: 2px; position: relative;" src="../../../images/person.png"/>';
                if (data.appointment.subject == 'Nancy') {
                    img = '<img style="top: 2px; position: relative;" src="../../../images/woman.png"/>';
                }
                else if (data.appointment.subject == 'Peter') {
                    img = '<img style="top: 2px; position: relative;" src="../../../images/boss.png"/>';
                }
                else if (data.appointment.subject == 'Antony') {
                    img = '<img style="top: 2px; position: relative;" src="../../../images/oldboss.png"/>';
                }
                else if (data.appointment.subject == 'John') {
                    img = '<img style="top: 2px; position: relative;" src="../../../images/asian.png"/>';
                }

                if (data.view == 'weekView' || data.view == 'dayView' || data.view == 'monthView') {
                    data.html = img + '<i>' + data.appointment.subject + '</i>';
                    if (data.appointment.id == 'id1') {
                        data.style = '#AA4643';
                    }
                    else if (data.appointment.id == 'id2' || data.appointment.id == 'id6') {
                        data.style = '#309B46';
                    }
                    else if (data.appointment.id == 'id3') {
                        data.style = '#447F6E';
                    }
                }

                return data;
            }
        }
    }
</script>