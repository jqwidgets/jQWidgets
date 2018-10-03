<template>
    <JqxFormattedInput :width="250" :height="25" :radix="'decimal'"
                       :value="15" :spinButtons="true" :dropDown="true">
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