<template>
    <div>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />

        <label>Date Input</label>
        <JqxDateTimeInput :width="300" :height="25" :dropDownVerticalAlignment="'top'">
        </JqxDateTimeInput>

        <label>Time Input</label>
        <JqxDateTimeInput :width="300" :height="25" :dropDownVerticalAlignment="'top'"
                          :showCalendarButton="false" :showTimeButton="true">
        </JqxDateTimeInput>

        <label>Date/Time Input</label>
        <JqxDateTimeInput :width="300" :height="25" :dropDownVerticalAlignment="'top'"
                          :showCalendarButton="true" :showTimeButton="true">
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