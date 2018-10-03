<template>
    <JqxSlider
        :width="'90%'" :height="70"  :value="5" :mode="'fixed'"
        :showTickLabels="true" :showButtons="true" :tooltip="true">
    </JqxSlider>
</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxSlider
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 50px;
        overflow: hidden;
    }
</style>