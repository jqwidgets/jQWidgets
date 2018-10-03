<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Live updates performance'" :enableAxisTextAnimation="true"
                  :description="'Data changes every 100 milliseconds'"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>
        <table style="width: 680px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p>Pause / Resume updates:</p>

                        <JqxButton ref="myBtn" @click="btnOnClick($event)" :width="160">
                            Pause
                        </JqxButton>
                    </td>
                    <td>
                        <p>Select color scheme:</p>
                        <JqxDropDownList @change="colorsOnChange($event)"
                                         :width="200" :height="25" :selectedIndex="2"
                                         :dropDownHeight="100" :source="colorsSchemesList">
                        </JqxDropDownList>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxChart,
            JqxButton,
            JqxDropDownList
        },
        data: function () {
            return {
                data: this.data,
                padding: { left: 10, top: 10, right: 10, bottom: 10 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'key',
                    unitInterval: 1,
                    valuesOnTicks: true,
                    gridLines: { visible: false }
                },
                valueAxis: {
                    minValue: 0,
                    maxValue: 750,
                    title: { text: 'Index Value<br>' },
                },
                seriesGroups: [
                    {
                        type: 'line',
                        useGradientColors: false,
                        series: [
                            { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle' }
                        ]
                    },
                    {
                        type: 'spline',
                        useGradientColors: false,
                        columnsGapPercent: 50,
                        alignEndPointsWithIntervals: true,
                        series: [
                            { dataField: 'value2', displayText: 'value2' }
                        ]
                    },
                    {
                        type: 'column',
                        useGradientColors: false,
                        columnsGapPercent: 50,
                        alignEndPointsWithIntervals: true,
                        series: [
                            { dataField: 'value3', displayText: 'value3' }
                        ]
                    }
                ],
                colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08']
            }
        },
        beforeCreate: function () {
            this.data = [];
            let max = 200;
            let timestamp = new Date();
            for (let i = 0; i < 20; i++) {
                this.data.push({
                    key: i,
                    value1: (Math.random() * 200) % 200 + 200,
                    value2: (Math.random() * 200) % 200 + 500,
                    value3: (Math.random() * 200) % 200,
                });
            }
        },
        mounted: function () {
            this.timer = setInterval(this.timerFunction, this.refreshTimeout());
        },
        methods: {
            btnOnClick: function (event) {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.$refs.myBtn.val('Resume');
                    this.timer = undefined;
                }
                else {
                    this.timer = setInterval(this.timerFunction, this.refreshTimeout());
                    this.$refs.myBtn.val('Pause');
                }
            },
            colorsOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.colorScheme = value;
                this.$refs.myChart.update();
            },
            timerFunction: function () {
                let data = this.$refs.myChart.source;
                data.splice(0, 1);
                data.push({
                    key: data[data.length - 1].key + 1,
                    value1: (Math.random() * 200) % 200 + 200,
                    value2: (Math.random() * 200) % 200 + 500,
                    value3: (Math.random() * 200) % 200,
                });
                this.$refs.myChart.update();
            },
            refreshTimeout: function () {
                return 100;
            }
        }
    };
</script>

<style>
</style>