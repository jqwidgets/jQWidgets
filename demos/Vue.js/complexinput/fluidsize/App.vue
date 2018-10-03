<template>
    <JqxComplexInput 
        :width="'30%'" :height="25" :value="'1000 + 2i'" :spinButtons="true">
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