<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Line serie with missing points'"
                  :description="'Sample line serie with missing and invalid values'"
                  :showLegend="true" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
        </JqxChart>

        <p style="font-family: Verdana; font-size: 12px">Select missing points display mode:</p>

        <JqxDropDownList v-on:select="dropDownOnSelect($event)"
                         :width="220" :height="25" :selectedIndex="0"
                         :dropDownHeight="77" :source="['skip','zero','connect']">
        </JqxDropDownList>
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
                sampleData: [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11],
                padding: { left: 5, top: 5, right: 15, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    text: 'x',
                    valuesOnTicks: false
                },
                seriesGroups: [
                    {
                        type: 'line',
                        toolTipFormatFunction: (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
                            return '<DIV style="text-align:left"><b>Index:</b> ' +
                                itemIndex + '<br /><b>Value:</b> ' +
                                value + '<br /></DIV>';
                        },
                        valueAxis:
                            {
                                title: { text: 'Value<br>' }
                            },
                        series:
                            [
                                { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
                            ]
                    }
                ]
            }
        },
        methods: {
            dropDownOnSelect: function (event) {
                let args = event.args;

                if (args) {
                    let value = args.item.value;
                    this.$refs.myChart.seriesGroups[0].series[0].emptyPointsDisplay = value;
                    this.$refs.myChart.update();
                }
            }
        }
    };
</script>

<style>
</style>