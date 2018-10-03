<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Fitness & exercise weekly scorecard'" :description="'Time spent in vigorous exercise by activity'"
                  :enableAnimations="false" :enableAxisTextAnimation="true" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis" :animationDuration="1000"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'" :showLegend="true">
        </JqxChart>

        <div style="margin-top: 10px">
            <div style="float: left">
                <JqxCheckBox v-on:change="flipValueAxisOnChange($event)">
                    Invert value axis
                </JqxCheckBox>
                <JqxCheckBox style="margin-top: 5px" v-on:change="flipXAxisOnChange($event)">
                    Invert x-axis
                </JqxCheckBox>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

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
                    unitInterval: 1
                },
                valueAxis: {
                    minValue: 0,
                    maxValue: 100,
                    unitInterval: 10,
                    title: { text: 'Time in minutes' },
                    labels: {
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'stackedcolumn',
                        columnsGapPercent: 50,
                        seriesGapPercent: 5,
                        series: [
                            { dataField: 'Running', displayText: 'Running' },
                            { dataField: 'Swimming', displayText: 'Swimming' },
                            { dataField: 'Cycling', displayText: 'Cycling' }
                        ]
                    }
                ]
            }
        },
        methods: {
            flipValueAxisOnChange: function (event) {
                this.$refs.myChart.valueAxis.flip = event.args.checked;
                this.$refs.myChart.refresh();
            },
            flipXAxisOnChange: function (event) {
                this.$refs.myChart.xAxis.flip = event.args.checked;
                this.$refs.myChart.refresh();
            }
        }

    }
</script>

<style>
</style>