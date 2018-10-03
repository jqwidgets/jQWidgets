<template>
    <div>
        <JqxDateTimeInput style="float: left; margin-top: 3px"
            @valueChanged="onValueChanged($event)" @open="onOpen()" @close="onClose()"
            :width="270" :height="25">
        </JqxDateTimeInput>

        <div style="margin-left: 20px; float: left">
            <div>
                <span>Events:</span>
                <JqxPanel ref="myPanel" :width="300" :height="250"></JqxPanel>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxDateTimeInput,
            JqxPanel
        },       
        mounted: function () {
            this.$refs.myPanel.$el.style.border = 'none';
        },
        methods: {
            onValueChanged: function (event) {
                this.$refs.myPanel.clearcontent();
                let date = event.args.date;
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
            },
            onOpen: function () {
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
            },
            onClose: function () {
                this.$refs.myPanel.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
            }
        },
    };
</script>

<style>
</style>