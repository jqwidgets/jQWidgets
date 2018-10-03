<template>
    <div>
        <JqxScheduler ref="myScheduler"
            :width="getWidth" :height="600" :source="dataAdapter" :date="date" :showLegend="true" :view="'weekView'"
            :appointmentDataFields="appointmentDataFields" :views="views" :resources="resources" :exportSettings="exportSettings"
         /> 

        <br />

        <JqxButton ref="myButton" @click="printClick()" :width="120">Print</JqxButton>
    </div>
</template>

<script>
    import JqxScheduler from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxscheduler.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue'

    export default {
        components: {
            JqxScheduler,
            JqxButton
        },
        data: function () {
            return {
				getWidth: '90%',
                exportSettings: {
                    fileName: null
                },
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
                    colorScheme: 'scheme05',
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
            printClick: function () {
                const content = this.$refs.myScheduler.exportData('html');
                const newWindow = window.open('', '', 'width=800, height=500'),
                    document = newWindow.document.open(),
                    pageContent =
                        '<!DOCTYPE html>' +
                        '<html>' +
                        '<head>' +
                        '<meta charset="utf-8" />' +
                        '<title>jqxScheduler Print Preview</title>' +
                        '</head>' +
                        '<body>' + content + '</body></html>';
                try {
                    document.write(pageContent);
                    document.close();
                    newWindow.print();
                }
                catch (er) {
                    document.close();
                }
            }
        }
    }
</script>