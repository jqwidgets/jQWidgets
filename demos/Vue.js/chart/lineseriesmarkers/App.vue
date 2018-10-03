<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Fitness & exercise weekly scorecard'"
              :description="'Time spent in vigorous exercise by activity'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
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
                    { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
                    { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
                    { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
                    { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
                    { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
                    { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
                    { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
                ],
                padding: { left: 10, top: 10, right: 15, bottom: 10 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    unitInterval: 1,
                    tickMarks: { visible: true, interval: 1 },
                    gridLinesInterval: { visible: true, interval: 1 },
                    valuesOnTicks: false,
                    padding: { bottom: 10 }
                },
                valueAxis: {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 50,
                    title: { text: 'Time in minutes<br><br>' },
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        series: [
                            {
                                dataField: 'Swimming',
                                symbolType: 'square',
                                labels: {
                                    visible: true,
                                    backgroundColor: '#FEFEFE',
                                    backgroundOpacity: 0.2,
                                    borderColor: '#7FC4EF',
                                    borderOpacity: 0.7,
                                    padding: { left: 5, right: 5, top: 0, bottom: 0 }
                                }
                            },
                            {
                                dataField: 'Running',
                                symbolType: 'square',
                                labels: {
                                    visible: true,
                                    backgroundColor: '#FEFEFE',
                                    backgroundOpacity: 0.2,
                                    borderColor: '#7FC4EF',
                                    borderOpacity: 0.7,
                                    padding: { left: 5, right: 5, top: 0, bottom: 0 }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    };
</script>

<style>
</style>