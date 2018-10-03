<template>
    <JqxChart ref="myChart" style="width: 850px; height: 500px"
              :title="'Logarithmic Scale x-Axis Example'"
              :description="'Horizontal axis with base 2 logarithmic scale'"
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
                sampleData: [
                    { a: 0.1535, b: 0.5 },
                    { a: 0.48, b: 20.5 },
                    { a: 10, b: 60 },
                    { a: 100, b: 80 },
                    { a: 200, b: 90 },
                    { a: 245.11, b: 100.13 },
                    { a: 300.13, b: 150.13 },
                    { a: 340, b: 200 }
                ],
                padding: { left: 15, top: 5, right: 15, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'a',
                    logarithmicScale: true,
                    logarithmicScaleBase: 2
                },
                valueAxis: {
                    logarithmicScale: false,
                    logarithmicScaleBase: 2,
                    title: { text: 'Value' },
                    labels:
                        {
                            horizontalAlignment: 'right'
                        }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        series: [
                            { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                            { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                        ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>