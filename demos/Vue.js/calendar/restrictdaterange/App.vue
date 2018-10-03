<template>
    <div>
        <div>The navigation is restricted from 01/01/2010 to 01/01/2020</div>
        <br />
        <JqxCalendar :width="220" :height="220"
                     :min="min" :max="max">
        </JqxCalendar>
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
                min: new Date(2010, 0, 1),
                max: new Date(2019, 11, 31)
            }
        }
    }
</script>

<style>
</style>