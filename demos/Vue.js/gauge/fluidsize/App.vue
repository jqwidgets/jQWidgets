<template>
    <JqxGauge :width="'40%'" :ranges="ranges" :ticksMinor="ticksMinor"
              :ticksMajor="ticksMajor" :value="0" :colorScheme="'scheme05'" :animationDuration="1200">
    </JqxGauge>
</template>

<script>
    import JqxGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgauge.vue";

    export default {
        components: {
            JqxGauge
        },
        data: function () {
            return {
                ticksMinor: { interval: 10, size: '5%' },
                ticksMajor: { interval: 20, size: '9%' },
                ranges: [
                    { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                    { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                    { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                    { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
                ]
            }
        }
    }
</script>

<style>
    html, body, app-root {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>