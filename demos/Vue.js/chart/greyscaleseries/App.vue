<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Fitness & exercise weekly scorecard'"
                  :description="'Time spent in vigorous exercise by activity'"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
        </JqxChart>
        <div style="margin-top: 10px">
            <div style="float: left">
                <JqxCheckBox :width="120" v-on:change="runningOnChange($event)">
                    Running
                </JqxCheckBox>
                <JqxCheckBox :width="120" v-on:change="swimmingOnChange($event)">
                    Swimming
                </JqxCheckBox>
            </div>
            <div style="float: left">
                <JqxCheckBox :width="120" :checked="true" v-on:change="cyclingOnChange($event)">
                    Cycling
                </JqxCheckBox>
                <JqxCheckBox :width="120" v-on:change="goalOnChange($event)">
                    Personal Goal
                </JqxCheckBox>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxChart,
            JqxCheckBox
        },
        data: function () {
            return {
                sampleData: [
                    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
                    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
                    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
                    { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
                    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
                    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
                    { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    unitInterval: 1,
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#CACACA'
                    },
                    gridLines: {
                        visible: false,
                        interval: 1,
                        color: '#CACACA'
                    }
                },
                valueAxis: {
                    minValue: 0,
                    maxValue: 100,
                    unitInterval: 10,
                    title: { text: 'Time in minutes' },
                    tickMarks: { color: '#CACACA' },
                    gridLines: { color: '#CACACA' }
                },
                seriesGroups: [
                    {
                        type: 'splinearea',
                        series: [
                            { greyScale: true, dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
                        ]
                    },
                    {
                        type: 'stackedcolumn',
                        columnsGapPercent: 50,
                        seriesGapPercent: 5,
                        series: [
                            { greyScale: true, dataField: 'Running', displayText: 'Running' },
                            { greyScale: true, dataField: 'Swimming', displayText: 'Swimming' },
                            { greyScale: false, dataField: 'Cycling', displayText: 'Cycling' }
                        ]
                    }
                ]
            }
        },
        methods: {
            runningOnChange: function (event) {
                this.$refs.myChart.seriesGroups[1].series[0].greyScale = !event.args.checked;
                this.$refs.myChart.refresh();
            },
            cyclingOnChange: function (event) {
                this.$refs.myChart.seriesGroups[1].series[2].greyScale = !event.args.checked;
                this.$refs.myChart.refresh();
            },
            swimmingOnChange: function (event) {
                this.$refs.myChart.seriesGroups[1].series[1].greyScale = !event.args.checked;
                this.$refs.myChart.refresh();
            },
            goalOnChange: function (event) {
                this.$refs.myChart.seriesGroups[0].series[0].greyScale = !event.args.checked;
                this.$refs.myChart.refresh();
            }
        }
    };
</script>

<style>
</style>