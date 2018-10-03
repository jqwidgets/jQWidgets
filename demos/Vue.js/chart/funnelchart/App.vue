<template> 
    <JqxChart style="width: 850px; height: 500px"
        :title="'Funnel chart'" 
        :description="'This example demonstrates funnel chart with positive and negative values'"
        :showLegend="true" :enableAnimations="true" :padding="padding"
        :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
        :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme02'">
    </JqxChart>
</template>

    <script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function() {
            return {
                sampleData: [
                    { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
                    { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
                    { Index: '3', SerieA: 30, SerieB: 15, SerieC: 25 },
                    { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
                    { Index: '5', SerieA: 20, SerieB: 15, SerieC: 25 }
                ],
                padding: { left: 15, top: 15, right: 15, bottom: 15 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Index',
                    tickMarks: {
                        visible: true,
                        interval: 1
                    },
                    gridLines: {
                        visible: true,
                        interval: 1
                    }
                },
                valueAxis: {
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 20,
                        seriesGapPercent: 20,
                        columnsTopWidthPercent: 100,
                        columnsBottomWidthPercent: 30,
                        series: [
                            { dataField: 'SerieA', displayText: 'Serie A', labels: { visible: true } },
                            { dataField: 'SerieB', displayText: 'Serie B', labels: { visible: true } },
                            { dataField: 'SerieC', displayText: 'Serie C', labels: { visible: true } }
                        ]
                    }
                ]
            }
        }
    };
    </script>

<style>
</style>