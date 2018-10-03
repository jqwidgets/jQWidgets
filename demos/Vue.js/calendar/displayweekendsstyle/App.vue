<template>
  <JqxCalendar 
  :width="220" :height="220" 
  :enableOtherMonthDays="false" :enableWeekend="true"> 
  </JqxCalendar>
</template>

    <script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';

    export default {
        components: {
            JqxCalendar
        }
    }
</script>

<style>   
</style>