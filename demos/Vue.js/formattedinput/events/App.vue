<template>
    <div>
        <JqxFormattedInput @open="onOpen($event)" @close="onClose($event)"
                           @change="onChange($event)" @radixChange="onRadixChange($event)"
                           :width="300" :height="25" :radix="'decimal'"
                           :value="190" :spinButtons="true" :dropDown="true">
        </JqxFormattedInput>

        <div style="margin-top: 150px">
            Events log:
        </div>

        <JqxPanel ref="myPanel" :width="300" :height="150"></JqxPanel>
    </div>
</template>

<script>
    import JqxFormattedInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxformattedinput.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxFormattedInput,
            JqxPanel
        },
        methods: {
            onOpen: function(event) {
                this.$refs.myPanel.append('<strong>' + event.type + '</strong><br />');
            },
            onClose: function(event) {
                this.$refs.myPanel.append('<strong>' + event.type + '</strong><br />');
            },
            onChange: function(event) {
                let args = event.args;
                let newValue = args.value;
                let oldValue = args.oldValue;
                let radix = args.radix;
                this.$refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                    'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />');
            },
            onRadixChange: function(event) {
                let args = event.args;
                let newRadix = args.radix;
                let oldRadix = args.oldRadix;
                let newValue = args.value;
                let oldValue = args.oldValue;
                this.$refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                    'radix: ' + newRadix + ', old radix: ' + oldRadix +
                    '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />');
            }
        }
    }
</script>

<style>
</style>