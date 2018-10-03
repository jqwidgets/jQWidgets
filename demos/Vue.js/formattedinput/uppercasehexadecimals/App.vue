<template>
    <JqxFormattedInput :width="250" :height="25" :radix="16" :value="'1CF'" :spinButtons="true" :upperCase="true">
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