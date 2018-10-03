<template>
    <JqxBarGauge :width="'75%'" :height="'75%'"
                 :colorScheme="'scheme11'" :values="values">
    </JqxBarGauge>
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';

    export default {
        components: {
            JqxBarGauge,
        },
        data: function () {
            return {
                values: [32, 11, 100, 49, 69, 20]
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
</style>