<template>
    <div>
        <div style="font-size: 13px; font-family: verdana; margin-top: 10px;">
            Phone Number
        </div>
        <JqxMaskedInput :mask="'(###)###-####'"
                        :width="'50%'"
                        :height="35">
        </JqxMaskedInput>
    </div>
</template>
<script>
    import JqxMaskedInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmaskedinput.vue";

    export default {
        components: {
            JqxMaskedInput
        }
    }
</script>

<style>
</style>
