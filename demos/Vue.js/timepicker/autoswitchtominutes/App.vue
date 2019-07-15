<template>
    <JqxTimePicker :width="400" :autoSwitchToMinutes="autoSwitchToMinutes" />
</template>

<script>
    import JqxTimePicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtimepicker.vue';

    export default {
        components: {
            JqxTimePicker
        },
        data: function () {
            return {
                autoSwitchToMinutes: true
            }
        }
    }
</script>