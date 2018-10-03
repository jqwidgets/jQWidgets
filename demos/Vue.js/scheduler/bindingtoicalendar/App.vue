<template>
    <JqxScheduler ref="myScheduler"
        :width="getWidth" :height="600" :source="dataAdapter" :date="date" :showLegend="true" :ready="ready"
         :view="'weekView'" :appointmentDataFields="appointmentDataFields" :views="views" 
    />
</template>

<script>
    import JqxScheduler from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxscheduler.vue';

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
                    from: 'DTSTART',
                    to: 'DTEND',
                    id: 'UID',
                    description: 'DESCRIPTION',
                    location: 'LOCATION',
                    subject: 'SUMMARY',
                    recurrencePattern: 'RRULE',
                    recurrenceException: 'EXDATE',
                    status: 'STATUS'
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
            this.source =
                {
                    dataType: 'ics',
                    url: 'icalendar.txt'
                };

            this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        methods: {
            ready: function () {
                this.$refs.myScheduler.scrollTop(200);
            }
        }
    }
</script>