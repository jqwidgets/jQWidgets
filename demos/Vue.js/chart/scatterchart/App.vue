<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Sales by City in Q1 & Q2'"
                  :description="''"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>

        <table style="width: 550px">
            <tbody>
                <tr>
                    <td>
                        <p>Select Serie 1 Symbol:</p>

                        <JqxDropDownList @change="dropDownSerie1SymbolOnChange($event)"
                                         :width="200" :height="25" :selectedIndex="2"
                                         :dropDownHeight="100" :source="symbolsList">
                        </JqxDropDownList>

                    </td>
                    <td>
                        <p>Select Serie 2 Symbol:</p>

                        <JqxDropDownList @change="dropDownSerie2SymbolOnChange($event)"
                                         :width="200" :height="25" :selectedIndex="1"
                                         :dropDownHeight="100" :source="symbolsList">
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
                sampleData: [
                    { City: 'New York', SalesQ1: 330500, SalesQ2: 210500, YoYGrowth: 1.05 },
                    { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowth: 1.15 },
                    { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowth: 1.45 },
                    { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowth: 0.45 },
                    { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowth: 1.65 },
                    { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowth: 1.25 },
                    { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowth: 0.75 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'City',
                    valuesOnTicks: false
                },
                valueAxis: {
                    minValue: 50000,
                    maxValue: 350000,
                    unitInterval: 50000,
                    title: { text: 'Sales ($)<br>' },
                    labels: {
                        formatSettings: { prefix: '$', thousandsSeparator: ',' },
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'scatter',
                        series: [
                            { dataField: 'SalesQ1', symbolSize: 20, symbolType: 'circle', displayText: 'Sales in Q1' },
                            { dataField: 'SalesQ2', symbolSize: 20, symbolType: 'diamond', displayText: 'Sales in Q2' }
                        ]
                    }
                ],
                symbolsList: ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right']
            }
        },
        methods: {
            dropDownSerie1SymbolOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].series[0].symbolType = value;
                this.$refs.myChart.update();
            },
            dropDownSerie2SymbolOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].series[1].symbolType = value;
                this.$refs.myChart.update();
            }
        }
    };
</script>

<style>
</style>