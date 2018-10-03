<template>
    <JqxFormattedInput ref="myFormattedInput"
                       :width="'30%'" :height="25" :radix="'binary'" :value="10111">
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