<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Live updates demo'" :enableAxisTextAnimation="true"
                  :description="''" :animationDuration="1000"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>
        <table style="width: 680px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p>Select the series type:</p>
                        <JqxDropDownList @change="seriesOnChange($event)"
                                         :width="200" :height="25" :selectedIndex="0"
                                         :dropDownHeight="100" :source="seriesList">
                        </JqxDropDownList>
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
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxChart,
            JqxDropDownList
        },
        data: function () {
            return {
                data: this.data,
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'timestamp',
                    type: 'date',
                    baseUnit: 'second',
                    unitInterval: 5,
                    formatFunction: (value) => {
                        return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
                    },
                    gridLines: { step: 2 },
                    valuesOnTicks: true,
                    labels: { angle: -45, offset: { x: -17, y: 0 } }
                },
                valueAxis: {
                    minValue: 0,
                    maxValue: 1000,
                    title: { text: 'Index Value' },
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        columnsGapPercent: 50,
                        alignEndPointsWithIntervals: true,
                        valueAxis:
                        {
                            minValue: 0,
                            maxValue: 1000,
                            title: { text: 'Index Value' }
                        },
                        series: [
                            { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
                        ]
                    }
                ],
                colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
                seriesList: ['line', 'area', 'stepline', 'steparea', 'splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']
            }
        },
        beforeCreate: function () {
            this.data = [];

            let max = 800;
            let timestamp = new Date();
            for (let i = 0; i < 60; i++) {
                timestamp.setMilliseconds(0);
                timestamp.setSeconds(timestamp.getSeconds() - 1);
                this.data.push({ timestamp: new Date(timestamp.valueOf()), value: Math.max(100, (Math.random() * 1000) % max) });
            }
            this.data = this.data.reverse();
        },
        mounted: function () {
            let data = this.$refs.myChart.source;
            let timer = setInterval(() => {
                let max = 800;
                if (data.length >= 60) {
                    data.splice(0, 1);
                }
                let timestamp = new Date();
                timestamp.setSeconds(timestamp.getSeconds());
                timestamp.setMilliseconds(0);
                data.push({ timestamp: timestamp, value: Math.max(100, (Math.random() * 1000) % max) });
                this.$refs.myChart.update();
            }, 1000);
        },
        methods: {
            colorsOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.colorScheme = value;
                this.$refs.myChart.update();
            },
            seriesOnChange: function (event) {
                let args = event.args;
                if (args) {
                    let value = args.item.value;
                    this.$refs.myChart.seriesGroups[0].type = value;
                    this.$refs.myChart.update();
                }
            }
        }
    };
</script>

<style>
</style>