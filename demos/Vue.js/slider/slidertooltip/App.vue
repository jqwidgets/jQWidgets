<template>
    <JqxSlider :tooltip="true" :mode="'fixed'" />
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
    .jqx-slider {
        margin-top: 50px;
    }
</style>