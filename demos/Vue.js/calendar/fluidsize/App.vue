<template>
<div style="min-width: 200px; min-height: 200px; width: 30%; height: 30%">
  <JqxCalendar :width="'100%'" :height="'100%'"></JqxCalendar>
</div>
</template>

    <script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxCalendar,
            JqxDropDownList
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