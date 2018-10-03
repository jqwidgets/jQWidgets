<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Logarithmic Scale Axis Example'"
              :description="'Stacked Columns with logarithmic scale axis'"
              :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData"
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
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    unitInterval: 1,
                    title: { text: 'Value' },
                    labels: {
                        formatSettings: { decimalPlaces: 3 },
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'stackedcolumn',
                        columnsGapPercent: 50,
                        series: [
                            { dataField: 'a', displayText: 'A' },
                            { dataField: 'b', displayText: 'B' }
                        ]
                    },
                    {
                        type: 'stackedline',
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