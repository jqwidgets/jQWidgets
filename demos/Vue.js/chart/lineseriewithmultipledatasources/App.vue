<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Fitness & exercise weekly scorecard'"
              :description="'Time spent in vigorous exercise'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="days" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme02'">
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
                days: [
                    { Day: 'Monday' },
                    { Day: 'Tuesday' },
                    { Day: 'Wednesday' },
                    { Day: 'Thursday' },
                    { Day: 'Friday' },
                    { Day: 'Saturday' },
                    { Day: 'Sunday' }
                ],
                padding: { left: 5, top: 5, right: 40, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    gridLines: { visible: true }
                },
                valueAxis: {
                    visible: true,
                    title: { text: 'Time in minutes' }
                },
                seriesGroups: [
                    {
                        type: 'stackedline',
                        source: this.Keith,
                        series: [
                            { dataField: 'Minutes', displayText: 'Keith' }
                        ]
                    },
                    {
                        type: 'stackedline',
                        source: this.Erica,
                        series: [
                            { dataField: 'Minutes', displayText: 'Erica' }
                        ]
                    },
                    {
                        type: 'stackedline',
                        source: this.George,
                        series: [
                            { dataField: 'Minutes', displayText: 'George' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.Keith = [
                { Minutes: 30 },
                { Minutes: 25 },
                { Minutes: 30 },
                { Minutes: 35 },
                { Minutes: 20 },
                { Minutes: 30 },
                { Minutes: 60 }
            ];

            this.Erica = [
                { Minutes: 15 },
                { Minutes: 25 },
                { Minutes: 20 },
                { Minutes: 25 },
                { Minutes: 20 },
                { Minutes: 20 },
                { Minutes: 45 }
            ];

            this.George = [
                { Minutes: 25 },
                { Minutes: 30 },
                { Minutes: 25 },
                { Minutes: 45 },
                { Minutes: 25 },
                { Minutes: 30 },
                { Minutes: 90 }
            ];
        }
    };
</script>

<style>
</style>