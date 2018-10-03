<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Logarithmic Spline Area Range'"
              :description="'logarithmic scale with base 2'"
              :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups">
    </JqxChart>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                sampleData: [{ a: 0.35, b: 14.5 }, { a: 1, b: 2.5 }, { a: 10, b: 0.2 }, { a: 100, b: 205 }, { a: 1, b: 100 }, { a: 5.11, b: 10.13 }, { a: 20.13, b: 10.13 }, { a: 600, b: 300 }],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
                xAxis: {
                    valuesOnTicks: false,
                    gridLines: { visible: false }
                },
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    unitInterval: 1,
                    flip: false,
                    title: { text: 'Value' },
                    labels: {
                        formatSettings: { decimalPlaces: 3 },
                        horizontalAlignment: 'right'
                    },
                    gridLines: { visible: false }
                },
                seriesGroups: [
                    {
                        type: 'splinerangearea',
                        series: [
                            { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B', opacity: 0.8, lineWidth: 1 }
                        ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>