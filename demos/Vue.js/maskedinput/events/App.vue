<template>
    <div>
        <div style="font-size: 13px; font-family: verdana; margin-top: 10px;">
            Phone Number
        </div>
        <JqxMaskedInput style="margin-top: 3px;" ref="numericInput"
                        @change="change($event)"
                        :mask="'(###)###-####'"
                        :width="250"
                        :height="25">
        </JqxMaskedInput>
        <div style='margin-left: 0px; margin-top: 20px;'>
            <div>
                <span>
                    Events:
                </span>
                <JqxPanel ref="events" :height="250" :width="300">
                </JqxPanel>
            </div>
        </div>
    </div>
</template>
<script>
    import JqxMaskedInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmaskedinput.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxMaskedInput,
            JqxPanel
        },
        methods: {
            change: function() {
                let value = this.$refs.numericInput.val();
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
