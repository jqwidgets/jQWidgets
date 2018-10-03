<template>
    <JqxScheduler ref="myScheduler"
        :width="'100%'" :height="'100%'" :source="dataAdapter" :date="date" :view="'weekView'" 
        :appointmentDataFields="appointmentDataFields" :views="views"
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
                    'weekView',
                    'monthView'
                ],

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
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>