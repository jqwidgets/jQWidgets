<template>
    <div>
        <JqxFormattedInput ref="myFormattedInput"
                           :width="200" :height="25" :radix="'decimal'" :spinButtons="false"
                           :value="330000" :decimalNotation="'exponential'">
        </JqxFormattedInput>

        <div style="margin-top: 20px">
            <JqxButton style="float: left" @click="getDecimal()" :width="185">Get Decimal Value</JqxButton>
            <JqxButton style="margin-left: 5px; float: left" @click="getExponential()" :width="185">Get Exponential Notation</JqxButton>
            <br />
            <br />
            <JqxButton style="float: left" @click="getScientific()" :width="185">Get Scientific Notation</JqxButton>
            <JqxButton style="margin-left: 5px; float: left" @click="getEngineering()" :width="185">Get Engineering Notation</JqxButton>
        </div>
    </div>
</template>

<script>
    import JqxFormattedInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxformattedinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxFormattedInput,
            JqxButton
        },
        methods: {
            getDecimal: function () {
                let decimalValue = this.$refs.myFormattedInput.val('decimal');
                alert('Decimal Value: ' + decimalValue);
            },
            getExponential: function () {
                let exponentialValue = this.$refs.myFormattedInput.val('exponential');
                alert('Exponential Notation: ' + exponentialValue);
            },
            getScientific: function () {
                let scientificValue = this.$refs.myFormattedInput.val('scientific');
                alert('Scientific Notation: ' + scientificValue);
            },
            getEngineering: function () {
                let engineeringValue = this.$refs.myFormattedInput.val('engineering');
                alert('Engineering Notation: ' + engineeringValue);
            }
        }
    }
</script>

<style>
</style>