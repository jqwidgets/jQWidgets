<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Fitness & exercise weekly scorecard'"
              :description="'Time spent in vigorous exercise'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                sampleData: [
                    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
                    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
                    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
                    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
                    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
                    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
                    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    showGridLines: true
                },
                seriesGroups:
                    [
                        {
                            type: 'column',
                            columnsGapPercent: 50,
                            seriesGapPercent: 0,
                            valueAxis:
                                {
                                    unitInterval: 10,
                                    minValue: 0,
                                    maxValue: 100,
                                    displayValueAxis: true,
                                    description: 'Time in minutes',
                                    axisSize: 'auto',
                                    tickMarksColor: '#888888'
                                },
                            series: [
                                { dataField: 'Keith', displayText: 'Keith' },
                                { dataField: 'Erica', displayText: 'Erica' },
                                { dataField: 'George', displayText: 'George' }
                            ]
                        }
                    ]
            }
        }
    }
</script>

<style>
</style>