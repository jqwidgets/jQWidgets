<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Columns spacing and padding'"
                  :description="'Example with two series groups and three series in each group'"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :columnSeriesOverlap="true" :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
        </JqxChart>

        <table style="padding-left: 30px; padding-top: 10px">
            <tr style="height: 50px">
                <td style="width: 300px">
                    <b>Series group 1:</b>
                </td>
                <td>
                    <b>Series group 2:</b>
                </td>
            </tr>
            <tr>
                <td>
                    <JqxCheckBox ref="btnEnableSeriesGroup1" v-on:change="updateSeriesGroupsVisibility()"
                                 :width="120" :height="25" :checked="true">
                        Visible
                    </JqxCheckBox>
                </td>
                <td>
                    <JqxCheckBox ref="btnEnableSeriesGroup2" v-on:change="updateSeriesGroupsVisibility()"
                                 :width="120" :height="25" :checked="false">
                        Visible
                    </JqxCheckBox>
                </td>
            </tr>
            <tr>
                <td>
                    <JqxCheckBox ref="btnStackedSeriesGroup1" v-on:change="updateSeriesGroupsStacking()"
                                 :width="120" :height="25" :checked="false">
                        Stacked
                    </JqxCheckBox>
                </td>
                <td>
                    <JqxCheckBox ref="btnStackedSeriesGroup2" v-on:change="updateSeriesGroupsStacking()"
                                 :width="120" :height="25" :checked="false">
                        Stacked
                    </JqxCheckBox>
                </td>
            </tr>
            <tr>
                <td>
                    Space between columns / padding:
                    <JqxSlider v-on:change="sliderColumnsGapPercent($event, 0)"
                               :width="250" :min="0" :max="99" :value="25"
                               :ticksFrequency="5" :step="1" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Space between columns / padding:
                    <JqxSlider v-on:change="sliderColumnsGapPercent($event, 1)"
                               :width="250" :min="0" :max="99" :value="25"
                               :ticksFrequency="5" :step="1" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Space between series:
                    <JqxSlider v-on:change="sliderSeriesGap($event, 0)"
                               :width="250" :min="0" :max="100" :value="10"
                               :ticksFrequency="5" :step="1" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Space between series:
                    <JqxSlider v-on:change="sliderSeriesGap($event, 1)"
                               :width="250" :min="0" :max="100" :value="25"
                               :ticksFrequency="5" :step="1" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Minimum column :width:
                    <JqxSlider v-on:change="sliderMinWidth($event, 0)"
                               :width="250" :min=" 0" :max="50" :value="0"
                               :ticksFrequency="5" :step=" 1" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Minimum column :width:
                    <JqxSlider v-on:change="sliderMinWidth($event ,1)"
                               :width="250" :min=" 0" :max="50" :value="0"
                               :ticksFrequency="5" :step=" 1" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Maximum column :width:
                    <JqxSlider v-on:change="sliderMaxWidth($event, 0)"
                               :width="250" :min=" 1" :max="120" :value="40"
                               :ticksFrequency="20" :step=" 1" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Maximum column :width:
                    <JqxSlider v-on:change="sliderMaxWidth($event, 1)"
                               :width="250" :min=" 1" :max="120" :value="40"
                               :ticksFrequency="20" :step=" 1" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';
    import JqxSlider from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue';

    export default {
        components: {
            JqxChart,
            JqxCheckBox,
            JqxSlider
        },
        data: function () {
            return {
                sampleData: [
                    { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
                    { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
                    { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
                    { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
                    { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
                    { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
                    { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Position',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    gridLines: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    flip: false,
                    valuesOnTicks: false
                },
                valueAxis: {
                    unitInterval: 10,
                    title: { text: 'Value' },
                    tickMarks: { color: '#BCBCBC' },
                    gridLines: { color: '#BCBCBC' },
                    labels: {
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 25,
                        seriesGapPercent: 10,
                        columnsMaxWidth: 40,
                        columnsMinWidth: 1,
                        series: [
                            { dataField: 'Serie1', displayText: 'Serie1' },
                            { dataField: 'Serie2', displayText: 'Serie2' },
                            { dataField: 'Serie3', displayText: 'Serie3' }
                        ]
                    }
                ]
            }
        },
        methods: {
            updateSeriesGroupsVisibility: function () {
                this.$refs.myChart.seriesGroups = [];

                if (this.$refs.btnEnableSeriesGroup1.checked) {
                    this.$refs.myChart.seriesGroups[0] =
                        {
                            type: 'column',
                            columnsGapPercent: 25,
                            seriesGapPercent: 10,
                            columnsMaxWidth: 40,
                            columnsMinWidth: 1,
                            series: [
                                { dataField: 'Serie1', displayText: 'Serie1' },
                                { dataField: 'Serie2', displayText: 'Serie2' },
                                { dataField: 'Serie3', displayText: 'Serie3' }
                            ]
                        };
                }

                if (this.$refs.btnEnableSeriesGroup2.checked) {
                    let index = this.$refs.myChart.seriesGroups.length > 0 ? 1 : 0;

                    this.$refs.myChart.seriesGroups[index] =
                        {
                            type: 'column',
                            greyScale: true,
                            columnsGapPercent: 25,
                            seriesGapPercent: 10,
                            columnsMaxWidth: 40,
                            columnsMinWidth: 1,
                            series: [
                                { dataField: 'Serie4', displayText: 'Serie4' },
                                { dataField: 'Serie5', displayText: 'Serie5' },
                                { dataField: 'Serie6', displayText: 'Serie6' }
                            ]
                        };
                }
                this.updateSeriesGroupsStacking();
            },
            updateSeriesGroupsStacking: function () {
                if (this.$refs.btnEnableSeriesGroup1.checked) {
                    if (this.$refs.btnStackedSeriesGroup1.checked) {
                        this.$refs.myChart.seriesGroups[0].type = 'stackedcolumn';
                    }
                    else {
                        this.$refs.myChart.seriesGroups[0].type = 'column';
                    }
                }

                if (this.$refs.btnEnableSeriesGroup2.checked) {
                    if (this.$refs.btnStackedSeriesGroup2.checked) {
                        this.$refs.myChart.seriesGroups[this.$refs.myChart.seriesGroups.length - 1].type = 'stackedcolumn';
                    }
                    else {
                        this.$refs.myChart.seriesGroups[this.$refs.myChart.seriesGroups.length - 1].type = 'column';
                    }
                }
                this.$refs.myChart.refresh();
            },
            sliderColumnsGapPercent: function (event, series) {
                this.eventHandler(event, series, 'columnsGapPercent');
            },
            sliderSeriesGap: function (event, series) {
                this.eventHandler(event, series, 'seriesGapPercent');
            },
            sliderMinWidth: function (event, series) {
                this.eventHandler(event, series, 'columnsMinWidth');
            },
            sliderMaxWidth: function (event, series) {
                this.eventHandler(event, series, 'columnsMaxWidth');
            },
            eventHandler: function (event, series, propName) {
                let seriesGroups = this.$refs.myChart.seriesGroups;
                if (seriesGroups.length !== 0) {
                    if (seriesGroups.length < 2) {
                        let serieDataField = seriesGroups[0].series[0].dataField;
                        let serie = serieDataField == 'Serie1' ? 0 : 1;
                        if (series !== serie) return;
                        seriesGroups[0][propName] = event.args.value;
                    } else {
                        seriesGroups[series][propName] = event.args.value;
                    }
                    this.$refs.myChart.refresh();
                }
            }
        }
    }
</script>

<style>
</style>