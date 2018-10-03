<template>
    <div>
        <JqxCalendar ref="myCalendar" @change="myCalendarOnChange($event)"
                     :width="220" :height="220"
                     :selectionMode="'range'" :value="value">
        </JqxCalendar>

        <div ref="log"></div>
    </div>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';

    export default {
        components: {
            JqxCalendar
        },
        data: function () {
            return {
                value: new Date(2016, 7, 7)
            }
        },
        mounted: function () {
            let date1 = new Date();
            date1.setFullYear(2016, 7, 7);
            let date2 = new Date();
            date2.setFullYear(2016, 7, 15);
            this.$refs.myCalendar.setRange(date1, date2);
        },
        methods: {
            myCalendarOnChange: function (event) {
                let selection = event.args.range;
                this.$refs.log.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
            }
        }
    }
</script>

<style>
</style>