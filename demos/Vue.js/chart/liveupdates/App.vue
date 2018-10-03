<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Live updates demo'" :enableAxisTextAnimation="true"
                  :description="''" :animationDuration="1000"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>
        <table style="width: 680px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p>Select the series type:</p>
                        <JqxDropDownList v-on:change="seriesOnChange($event)"
                                         :width="200" :height="25" :selectedIndex="2"
                                         :dropDownHeight="100" :source="seriesList">
                        </JqxDropDownList>
                    </td>
                    <td>
                        <p>Select color scheme:</p>
                        <JqxDropDownList v-on:change="colorsOnChange($event)"
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
                data: [
                    { a: 100, b: 200, c: 1 },
                    { a: 120, b: 140, c: 2 },
                    { a: 100, b: 110, c: 3 },
                    { a: 90, b: 135, c: 4 },
                    { a: 70, b: 210, c: 5 },
                    { a: 170, b: 210, c: 5 },
                    { a: 270, b: 350, c: 5 },
                    { a: 710, b: 410, c: 5 },
                    { a: 230, b: 305, c: 5 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    unitInterval: 1,
                    gridLines: { interval: 2 },
                    valuesOnTicks: false
                },
                valueAxis: {
                    minValue: 0,
                    maxValue: 1000,
                    title: { text: 'Index Value' },
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        alignEndPointsWithIntervals: true,
                        series: [
                            { dataField: 'a', displayText: 'a', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 },
                            { dataField: 'b', displayText: 'b', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 }
                        ]
                    }
                ],
                colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
                seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']
            }
        },
        mounted: function () {
            let data = this.$refs.myChart.source;
            let timer = setInterval(() => {
                let max = 800;
                for (let i = 0; i < data.length; i++) {
                    data[i].a = Math.max(100, (Math.random() * 1000) % max);
                    data[i].b = Math.max(100, (Math.random() * 1000) % max);
                }
                this.$refs.myChart.update();
            }, 3000);
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
                    let isLine = value.indexOf('line') != -1;
                    let isArea = value.indexOf('area') != -1;
                    let group = this.$refs.myChart.seriesGroups[0];
                    group.series[0].opacity = group.series[1].opacity = isArea ? 0.7 : 1;
                    group.series[0].lineWidth = group.series[1].lineWidth = isLine ? 2 : 1;
                    group.type = value;
                    this.$refs.myChart.update();
                }
            }
        }
    };
</script>

<style>
</style>