<template>
    <div>
        <div>{{ date.toString() }}</div><br />

        <JqxCalendar :width="220" :height="220" v-model="date"/>
    </div>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';

    export default {
        components: {
            JqxCalendar
        },
        data: function () {
            return {
                date: new Date()
            }
        }
    }
</script>