<template>
    <JqxFormattedInput style="float: left"
                       :width="250" :height="25" :radix="'binary'" 
                       :value="10000" :dropDown="true" :rtl="true">
    </JqxFormattedInput>
</template>

<script>
    import JqxFormattedInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxformattedinput.vue";

    export default {
        components: {
            JqxFormattedInput
        }
    }
</script>

<style>
</style>