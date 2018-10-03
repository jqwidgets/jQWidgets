<template>
    <div style="float: left">
        <JqxCalendar ref="myCalendar" style="margin-top: 3px" v-on:change="myCalendarEvent($event)" v-on:viewChange="myCalendarEvent($event)"
                     :width="220" :height="220">
        </JqxCalendar>
        <div style="margin-left: 0; margin-top: 20px; float: left">
            <div>
                <span>Events:</span>
                <JqxPanel ref="myPanel" :width="600" :height="250"></JqxPanel>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxCalendar,
            JqxPanel
        },
        methods: {
            myCalendarEvent: function (event) {
                let date = event.args.date;
                let view = event.args.view;
                let viewFrom = view.from;
                let viewTo = view.to;
                this.$refs.myPanel.clearcontent();
                if (event.type === 'viewChange') {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
                }
                else {
                    this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
                }
            }
        }
    }
</script>

<style>
    .jqx-panel {
        border: none !important;
    }
</style>