<template>
    <JqxScheduler ref="myScheduler"
        :width="getWidth" :height="600" :source="dataAdapter" :date="date"  :view="'weekView'" :showLegend="true"
        :appointmentDataFields="appointmentDataFields" :views="views" 
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
                    from: 'from',
                    to: 'to',
                    id: 'id',
                    description: 'description',
                    location: 'place',
                    style: 'style',
                    subject: 'subject',
                    resourceId: 'calendar',
                    recurrencePattern: 'recurrenceRule',
                    recurrenceException: 'recurrenceException'
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
                    id: 'id4',
                    description: '',
                    style: '#AA4643',
                    location: '',
                    subject: 'New Projects Planning',
                    calendar: 'Room 2',
                    from: new Date(2016, 10, 22, 8, 0, 0),
                    to: new Date(2016, 10, 22, 13, 0, 0)
                }
                const appointment2 = {
                    id: 'id5',
                    description: '',
                    style: '#89A54E',
                    location: '',
                    subject: 'Interview with James',
                    calendar: 'Room 1',
                    from: new Date(2016, 10, 25, 13, 0, 0),
                    to: new Date(2016, 10, 25, 15, 0, 0)
                }
                const appointment3 = {
                    id: 'id6',
                    description: '',
                    style: '#71588F',
                    location: '',
                    subject: 'Interview with Nancy',
                    calendar: 'Room 2',
                    from: new Date(2016, 10, 26, 14, 0, 0),
                    to: new Date(2016, 10, 26, 16, 0, 0)
                }
                const appointment4 = {
                    id: 'id7',
                    description: '',
                    style: '#307DD7',
                    location: '',
                    subject: 'Daily Meeting',
                    calendar: 'Room 1',
                    recurrenceRule: 'FREQ=DAILY;',
                    recurrenceException: '2016-11-24 09:00:00,2016-11-26 12:00:00',
                    from: new Date(2016, 10, 23, 10, 0, 0),
                    to: new Date(2016, 10, 23, 11, 0, 0)
                }

                appointments.push(appointment1);
                appointments.push(appointment2);
                appointments.push(appointment3);
                appointments.push(appointment4);

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
                        { name: 'recurrenceRule', type: 'string' },
                        { name: 'recurrenceException', type: 'string' },
                        { name: 'style', type: 'string' },
                        { name: 'from', type: 'date' },
                        { name: 'to', type: 'date' }
                    ],
                    id: 'id',
                    localData: generateAppointments()
                };

            this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        mounted: function () {
            this.$refs.myScheduler.ensureAppointmentVisible('id7');    
        }
    }
</script>