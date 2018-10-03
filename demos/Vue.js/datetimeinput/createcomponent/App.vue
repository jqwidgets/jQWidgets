<template>
    <div>
        <label>Date Input</label>

        <JqxDateTimeInput ref="myDateInput" :autoCreate="false"></JqxDateTimeInput><br />

        <label>Time Input</label>

        <JqxDateTimeInput ref="myTimeInput" :autoCreate="false"></JqxDateTimeInput><br />

        <label>Date Time Input</label>

        <JqxDateTimeInput ref="myDateTimeInput" :autoCreate="false"></JqxDateTimeInput>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";

    export default {
        components: {
            JqxDateTimeInput
        },
        mounted: function () {
            const dateInputSettings = { width: '300px', height: '25px' };
            const timeInputSettings = { formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px' };
            const dateTimeInputSettings = { formatString: "F", showTimeButton: true, width: '300px', height: '25px' };

            this.$refs.myDateInput.createComponent(dateInputSettings);
            this.$refs.myTimeInput.createComponent(timeInputSettings);
            this.$refs.myDateTimeInput.createComponent(dateTimeInputSettings);
        }
    };
</script>

<style>
</style>