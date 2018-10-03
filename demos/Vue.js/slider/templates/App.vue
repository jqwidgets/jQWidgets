<template>
    <div>
        <div class="label">Default</div>
        <JqxSlider :tooltip="true" :mode="'fixed'" />

        <div class="label">Primary</div>
        <JqxSlider :template="'primary'" :tooltip="true" :mode="'fixed'" />

        <div class="label">Success</div>
        <JqxSlider :template="'success'" :tooltip="true" :mode="'fixed'" />

        <div class="label">Info</div>
        <JqxSlider :template="'info'" :tooltip="true" :mode="'fixed'" />

        <div class="label">Warning</div>
        <JqxSlider :template="'warning'"  :tooltip="true" :mode="'fixed'" />

        <div class="label">Danger</div>
        <JqxSlider :template="'danger'" :tooltip="true" :mode="'fixed'" />
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
    .label {
        margin: 10px 0px;
    }
</style>