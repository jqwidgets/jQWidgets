<template>
    <JqxChart ref="myChart" style="width: 850px; height: 500px"
              :title="'Logarithmic Scale Axis Example'"
              :description="'Sample logarithmic scale axis with base 2 and baseline 8'"
              :enableAnimations="false" :padding="padding"
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
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: ''
                },
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    baselineValue: 8,
                    unitInterval: 1,
                    title: { text: 'Value' },
                    tickMarks: { interval: 1 },
                    gridLines: { interval: 1 },
                    labels: {
                        formatSettings: { decimalPlaces: 3 },
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        series: [
                            { dataField: 'a', displayText: 'A' },
                            { dataField: 'b', displayText: 'B' }
                        ]
                    },
                    {
                        type: 'line',
                        series: [
                            { dataField: 'a', displayText: 'A2' },
                            { dataField: 'b', displayText: 'B2' }
                        ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>