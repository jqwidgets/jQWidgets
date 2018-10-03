<template>
    <div>
        <div>Default</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'default'">
        </JqxDateTimeInput>
        <br />

        <div>Primary</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'primary'">
        </JqxDateTimeInput>
        <br />

        <div>Success</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'success'">
        </JqxDateTimeInput>
        <br />

        <div>Info</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'info'">
        </JqxDateTimeInput>
        <br />

        <div>Warning</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'warning'">
        </JqxDateTimeInput>
        <br />

        <div>Danger</div>
        <JqxDateTimeInput :width="300" :height="30"
            :showTimeButton="true" :template="'danger'">
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