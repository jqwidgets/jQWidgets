<template>
    <JqxChart ref="myChart" style="width: 850px; height: 500px"
              :title="'Waterfall series with logarithmic axis'"
              :description="'Logarithmic base 2'"
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
                    { a: 3, b: 9 },
                    { a: 5, b: 7 },
                    { a: 2, b: 9 },
                    { a: 10, b: 15 },
                    { a: 9, b: 7 },
                    { a: 15, b: 10 },
                    { a: 7, b: 5 },
                    { total: true }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    gridLines: { visible: true },
                    tickMarks: { visible: true }
                },
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    title: { text: 'Value<br>' },
                    labels:
                        {
                            formatSettings: { decimalPlaces: 2 },
                            horizontalAlignment: 'right'
                        }
                },
                seriesGroups: [
                    {
                        type: 'waterfall',
                        columnsMaxWidth: 50,
                        series:
                            [
                                { dataField: 'a', displayText: 'A' },
                                { dataField: 'b', displayText: 'B', summary: 'total' }
                            ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>