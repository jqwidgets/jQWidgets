<template>
    <JqxComplexInput 
        :width="250" :height="25" :value="'15 + 7.2i'" 
        :spinButtons="true" :spinButtonsStep="1">
    </JqxComplexInput>
</template>

<script>
    import JqxComplexInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue";

    export default {
        components: {
            JqxComplexInput
        }
    };
</script>

<style>
</style>