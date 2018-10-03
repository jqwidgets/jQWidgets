<template>
    <div>
        <div>{{ date.toString() }}</div><br />
        <JqxDateTimeInput v-model="date" :width="200" :height="25" />

        <br /><br />

        <div>{{ time.toString() }}</div><br />
        <JqxDateTimeInput v-model="time" :width="200" :height="25" :formatString="'T'" :showTimeButton="true" :showCalendarButton="false" />
    </div>
</template>

<script>
    import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue';

    export default {
        components: {
            JqxDateTimeInput
        },
        data: function () {
            return {
                date: new Date(),
                time: new Date()
            }
        }
    }
</script>