<template>
    <div>
        <JqxComplexInput ref="myComplexInput"
                         :width="250" :height="25" :value="'15 + 7.2i'">
        </JqxComplexInput>

        <div style="margin-top: 20px;">

            <JqxButton @click="getRealPart()" :width="150">
                Get real part
            </JqxButton>

            <JqxButton @click="getImaginaryPart()" :width="150">
                Get imaginary part
            </JqxButton>

        </div>
    </div>
</template>

<script>
    import JqxComplexInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxComplexInput,
            JqxButton
        },
        methods: {
            getRealPart: function () {
                let realPart = this.$refs.myComplexInput.getReal();
                alert(`Real part is ${realPart}`);
            },
            getImaginaryPart: function () {
                let imaginaryPart = this.$refs.myComplexInput.getImaginary();
                alert(`Imaginary part is ${imaginaryPart}`);
            }
        }
    };
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-right: 5px;
    }
</style>