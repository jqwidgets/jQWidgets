<template>
    <div>
        <JqxSlider @change="displayEvent($event)" :width="400" :mode="'fixed'" :rtl="true" />

        <JqxPanel ref="myPanel" :width="300" :height="400" />
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
                let eventData = event.type;
                eventData += ': ' + event.args.value;
                this.$refs.myPanel.clearcontent();
                this.$refs.myPanel.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
    }
</script>

<style>
    .jqx-slider {
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .jqx-panel {
        border: none;
    }
</style>