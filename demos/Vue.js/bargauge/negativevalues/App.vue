<template>
    <JqxBarGauge :width="getWidth" :height="600" :values="values"
                 :max="45" :min="-45" :baseValue="0" :labels="labels"
                 :startAngle="270" :endAngle="90" :animationDuration="0"
                 :relativeInnerRadius="0.2" :colorScheme="'scheme02'">
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
                getWidth: '90%',
                values: [12, -35, -14.78, 29.5, 23.124, 41],
                labels: {
                    formatFunction: (value) => {
                        return value + ' m';
                    },
                    precision: 1,
                    indent: 15
                }
            }
        }
    }
</script>

<style>
</style>