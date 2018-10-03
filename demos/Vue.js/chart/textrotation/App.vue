<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Axis text rotation example'"
              :description="''"
              :enableAnimations="true" :padding="padding" :showToolTips="true"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
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
                    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
                    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
                    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
                    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
                    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
                    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
                    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
                ],
                padding: { left: 5, top: 5, right: 20, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    position: 'top',
                    dataField: 'Day',
                    labels:
                        {
                            angle: 55,
                            horizontalAlignment: 'right',
                            verticalAlignment: 'center',
                            rotationPoint: 'right',
                            offset: { x: 0, y: -5 }
                        }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        seriesGapPercent: 15,
                        orientation: 'horizontal',
                        valueAxis:
                            {
                                minValue: 0,
                                maxValue: 100,
                                unitInterval: 10,
                                position: 'right'
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
    };
</script>

<style>
</style>