<template>
    <div style="float: left;">
        <div style="margin-top: 10px;">
            Number
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput @change="change($event)"
                            :spinButtons="true"
                            :inputMode="'simple'"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div style="margin-left: 0px; margin-top: 20px; float: left;">
            <div>
                <span>
                    Events:
                </span>
                <JqxPanel ref="events"
                          :width="300"
                          :height="250">
                </JqxPanel>
            </div>
        </div>
    </div>
</template>
<script>
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxNumberInput,
            JqxPanel
        },
        methods: {
            change: function(event) {
                let value = event.args.value;
                this.$refs.events.clearcontent();
                this.$refs.events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    .jqx-panel {
        border: none;
    }
</style>
