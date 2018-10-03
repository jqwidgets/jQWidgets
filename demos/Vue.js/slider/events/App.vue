<template>
    <div>
        <JqxSlider :mode="'fixed'" @change="displayEvent($event)" />

        <br />

        <div style="font-family: Verdana; font-size: 12px;">
            Events:
        </div>

        <JqxPanel ref="myPanel" style="border-width: 0px;" :width="450" :height="50" />
    </div>
</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxSlider,
            JqxPanel
        },
        methods: {
            displayEvent : function (event) {
                const eventType = event.type;
                const eventData = ': ' + event.args.value;
                this.$refs.myPanel.clearcontent();
                this.$refs.myPanel.prepend('<div class="item" style="margin-top: 5px;">' + eventType + eventData + '</div>');
            }
        }
    };
</script>