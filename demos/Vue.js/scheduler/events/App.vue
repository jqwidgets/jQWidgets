<template>
    <div>
        <JqxScheduler ref="myScheduler"
                      @appointmentDelete="mySchedulerOnAppointmentDelete($event)"
                      @appointmentAdd="mySchedulerOnAppointmentAdd($event)"
                      @appointmentDoubleClick="mySchedulerOnAppointmentDoubleClick($event)"
                      @appointmentChange="mySchedulerOnAppointmentChange($event)"
                      @cellClick="mySchedulerOnCellClick($event)"
                      :width="getWidth" :height="600" :source="dataAdapter" :date="date" :view="'weekView'" :rowsHeight="40"
                      :appointmentDataFields="appointmentDataFields" :views="views" :ready="ready" />

        <br />

        <div>Event Log:</div>
        <div ref="myLog"></div>
    </div>
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
                    description: 'about',
                    location: 'address',
                    subject: 'name',
                    style: 'style',
                    status: 'status'
                },
                views:
                [        
                    'dayView',
                    'weekView'
                ]
            }
        },
        beforeCreate: function () { 
            this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'id', type: 'string' },
                        { name: 'status', type: 'string' },
                        { name: 'about', type: 'string' },
                        { name: 'address', type: 'string' },
                        { name: 'company', type: 'string' },
                        { name: 'name', type: 'string' },
                        { name: 'style', type: 'string' },
                        { name: 'calendar', type: 'string' },
                        { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
                        { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
                    ],
                    id: 'id',
                    url: 'appointments.txt'
                };

            this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        methods: {
            ready: function () {
                this.$refs.myScheduler.scrollTop(600);
            },
            mySchedulerOnAppointmentAdd: function (event) {
                const appointment = event.args.appointment;
                this.$refs.myLog.innerHTML = 'appointmentDelete is raised';
            },
            mySchedulerOnAppointmentDelete: function (event) {
                const appointment = event.args.appointment;
                this.$refs.myLog.innerHTML = 'appointmentAdd is raised';
            },
            mySchedulerOnAppointmentDoubleClick: function (event) {
                const appointment = event.args.appointment;
                this.$refs.myLog.innerHTML = 'appointmentDoubleClick is raised';
            },
            mySchedulerOnAppointmentChange: function (event) {
                const appointment = event.args.appointment;
                this.$refs.myLog.innerHTML = 'appointmentChange is raised';
            },
            mySchedulerOnCellClick: function (event) {
                const cell = event.args.cell;
                this.$refs.myLog.innerHTML = 'cellClick is raised';
            },
        }
    }
</script>