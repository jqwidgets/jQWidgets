<template>
    <div>
        <JqxFormattedInput ref="myFormattedInput"
                           :width="250" :height="25" :radix="'binary'" :value="100001">
        </JqxFormattedInput>

        <div style="margin-top: 20px">
            <JqxButton style="float: left" @click="getOctal()" :width="175">Get Octal Value</JqxButton>
            <JqxButton style="margin-left: 5px; float: left" @click="getDecimal()" :width="175">Get Decimal Value</JqxButton>
            <JqxButton style="margin-left: 5px; float: left" @click="getHexadecimal()" :width="175">Get Hexadecimal Value</JqxButton>
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
            getOctal: function () {
                let octalValue = this.$refs.myFormattedInput.val('octal');
                alert('Octal value: ' + octalValue);
            },
            getDecimal: function () {
                let decimalValue = this.$refs.myFormattedInput.val('decimal');
                alert('Decimal value: ' + decimalValue);
            },
            getHexadecimal: function () {
                let hexadecimalValue = this.$refs.myFormattedInput.val('hexadecimal');
                alert('Hexadecimal value: ' + hexadecimalValue);
            }
        }
    }
</script>

<style>
</style>