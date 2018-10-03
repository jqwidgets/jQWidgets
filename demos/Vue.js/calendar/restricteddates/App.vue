<template>
    <JqxCalendar :width="220" :height="220" :restrictedDates="restrictedDates">
    </JqxCalendar>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';

    export default {
        components: {
            JqxCalendar
        },
        data: function () {
            return {
                restrictedDates: this.restrictedDates
            }
        },
        beforeCreate: function () {
            let date = new Date();
            date.setHours(0, 0, 0);
            date.setDate(2);
            let date2 = new Date();
            date2.setHours(0, 0, 0);
            date2.setDate(3);
            this.restrictedDates = [];
            this.restrictedDates.push(date);
            this.restrictedDates.push(date2);
        }
    }
</script>

<style>
</style>