<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Sales by City in Q1 and Q2, and YoY sales growth'"
                  :description="'(the size of the circles represents relative YoY growth)'"
                  :enableAnimations="true" :showLegend="true" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
        </JqxChart>

        <table style="width: 550px">
            <tbody>
                <tr>
                    <td>
                        <p>Select Serie 1 Symbol:</p>
                        <JqxDropDownList ref="dropDownSerie1Symbol" v-on:change="dropDown1OnChange($event)"
                                         :width="200" :height="25" :selectedIndex="0"
                                         :dropDownHeight="100" :source="symbolsList">
                        </JqxDropDownList>
                    </td>
                    <td>
                        <p>Select Serie 2 Symbol:</p>
                        <JqxDropDownList ref="dropDownSerie2Symbol" v-on:change="dropDown2OnChange($event)"
                                         :width="200" :height="25" :selectedIndex="0"
                                         :dropDownHeight="100" :source="symbolsList">
                        </JqxDropDownList>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxChart,
            JqxDropDownList
        },
        data: function () {
            return {
                sampleData: [
                    { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
                    { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
                    { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
                    { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
                    { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
                    { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
                    { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'City',
                    valuesOnTicks: false
                },
                valueAxis: {
                    unitInterval: 50000,
                    minValue: 50000,
                    maxValue: 350000,
                    title: { text: 'Sales ($)<br>' },
                    labels: {
                        formatSettings: { prefix: '$', thousandsSeparator: ',' },
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups:
                    [
                        {
                            type: 'bubble',
                            series: [
                                { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q1' },
                                { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2' }
                            ]
                        }
                    ],
                symbolsList: ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right']
            }
        },
        methods: {
            dropDown1OnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].series[0].symbolType = value;
                this.$refs.myChart.update();
            },
            dropDown2OnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].series[1].symbolType = value;
                this.$refs.myChart.update();
            }
        }
    }
</script>

<style>
</style>