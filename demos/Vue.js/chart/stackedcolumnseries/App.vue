<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Fitness & exercise weekly scorecard'"
              :description="'Time spent in vigorous exercise by activity'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme06'">
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
                    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
                    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
                    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
                    { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
                    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
                    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
                    { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    unitInterval: 1,
                    axisSize: 'auto',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    gridLines: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    }
                },
                valueAxis: {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 120,
                    title: { text: 'Time in minutes' },
                    labels: { horizontalAlignment: 'right' },
                    tickMarks: { color: '#BCBCBC' }
                },
                seriesGroups: [
                    {
                        type: 'stackedcolumn',
                        columnsGapPercent: 50,
                        seriesGapPercent: 0,
                        series: [
                            { dataField: 'Running', displayText: 'Running' },
                            { dataField: 'Swimming', displayText: 'Swimming' },
                            { dataField: 'Cycling', displayText: 'Cycling' }
                        ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>