<template>
    <div>
        <label>Date Input</label>
        <JqxDateTimeInput 
            :width="300" :height="25">
        </JqxDateTimeInput>
        <br />

        <label>Time Input</label>
        <JqxDateTimeInput 
            :width="300" :height="25" :formatString="'T'" :showTimeButton="true" :showCalendarButton="false">
        </JqxDateTimeInput>
        <br />

        <label>Date Time Input</label>
        <JqxDateTimeInput 
            :width="300" :height="25" :formatString="'F'" :showTimeButton="true">
        </JqxDateTimeInput>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";

    export default {
        components: {
            JqxDateTimeInput
        }
    };
</script>

<style>
</style>