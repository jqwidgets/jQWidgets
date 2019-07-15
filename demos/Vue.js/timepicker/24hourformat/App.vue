<template>
    <JqxTimePicker :width="400" :format="format" />
</template>

<script>
    import JqxTimePicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtimepicker.vue';

    export default {
        components: {
            JqxTimePicker
        },
        data: function () {
            return {
                format: "24-hour"
            }
        }
    }
</script>