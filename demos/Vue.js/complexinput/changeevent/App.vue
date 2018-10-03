<template>
    <div>
        <JqxComplexInput @change="complexInputOnChange($event)"
                         :width="300" :height="25" :value="'15 + 7i'" :spinButtons="true">
        </JqxComplexInput>

        <div style="margin-top: 20px">Events log:</div>

        <JqxPanel ref="myPanel"
                  :width="300" :height="150">
        </JqxPanel>
    </div>
</template>

<script>
    import JqxComplexInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxComplexInput,
            JqxPanel
        },
        methods: {
            complexInputOnChange: function (event) {
                let args = event.args;
                if (args) {
                    let value = args.value;
                    let oldValue = args.oldValue;
                    let realPart = args.realPart;
                    let imaginaryPart = args.imaginaryPart;
                    this.$refs.myPanel.append('<strong>' + event.type + '</strong><br />' +
                        'value: ' + value + ', old value: ' + oldValue +
                        ',<br /> real part: ' + realPart + ', imaginary part: ' + imaginaryPart + '<br />');
                }
            }
        }
    };
</script>

<style>
</style>