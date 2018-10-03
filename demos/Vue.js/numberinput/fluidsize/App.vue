<template>
    <JqxNumberInput :spinButtons="true"
                    :width="'50%'"
                    :height="35">
    </JqxNumberInput>
</template>
<script>
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";

    export default {
        components: {
            JqxNumberInput
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 3px;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
    }
</style>
