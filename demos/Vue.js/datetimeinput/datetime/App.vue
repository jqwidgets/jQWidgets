<template>
    <JqxDateTimeInput 
        :width="300" :height="25" :formatString="'F'">
    </JqxDateTimeInput>
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