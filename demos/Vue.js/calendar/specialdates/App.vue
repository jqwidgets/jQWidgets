<template>
    <JqxCalendar ref="myCalendar"
            :width="220" :height="220" 
            :enableTooltips="true">
    </JqxCalendar>
</template>

    <script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';

    export default {
        components: {
            JqxCalendar
        },
        mounted: function() {
            let date1 = new Date();
            let date2 = new Date();
            let date3 = new Date();

            date1.setDate(5);
            date2.setDate(15);
            date3.setDate(16);

            this.$refs.myCalendar.addSpecialDate(date1, '', 'Special Date1');
            this.$refs.myCalendar.addSpecialDate(date2, '', 'Special Date2');
            this.$refs.myCalendar.addSpecialDate(date3, '', 'Special Date3');
        }
    }
</script>

<style>   
</style>