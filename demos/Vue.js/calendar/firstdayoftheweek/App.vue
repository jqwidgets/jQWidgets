<template>
    <div>
        <JqxCalendar ref="myCalendar" style="margin-top: 3px"
                     :width="220" :height="220" :enableTooltips="false">
        </JqxCalendar>

        <br /><br />
        <div>Choose the first day of the week</div>
        <br /><br />
        <JqxDropDownList ref="myDropDownList" v-on:select="myDropDownListOnSelect($event)"
                         :width="220" :height="25" :source="days"
                         :selectedIndex="6" :autoDropDownHeight="true">
        </JqxDropDownList>
    </div>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxCalendar,
            JqxDropDownList
        },
        data: function () {
            return {
                days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
        },
        methods: {
            myDropDownListOnSelect: function (event) {
                let index = event.args.index;
                if (index === 6) {
                    index = -1;
                }
                this.$refs.myCalendar.firstDayOfWeek = index + 1;
            }
        }
    }
</script>

<style>
    .jqx-panel {
        border: none !important;
    }
</style>