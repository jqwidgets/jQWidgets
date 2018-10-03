<template>
    <div>
        <div class="left-container">
            <div class="label">Default Layout</div>
            <JqxSlider :width="300" :height="50" />
            <JqxSlider :width="50" :height="300" :orientation="'vertical'" />
        </div>

        <div class="right-container">
            <div class="label">Reversed Layout</div>
            <JqxSlider :width="300" :height="50" :layout="'reverse'" />
            <JqxSlider :width="50" :height="300" :layout="'reverse'" :orientation="'vertical'" style="float: right" />
        </div>
    </div>
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
    .left-container {
        float: left;
    }

    .right-container {
        float: right;
    }

    .label {
        margin: 10px 0px;
    }
</style>