<template>
    <JqxFormattedInput :width="250" :height="25" :radix="'decimal'"
                       :spinButtons="true" :value="0" :min="0" :max="1000">
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