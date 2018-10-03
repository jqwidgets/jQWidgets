<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Range selector with regular x-axis'"
              :description="'In this example the range selector works with (non-date) axis'"
              :showLegend="false" :enableAnimations="true" :padding="padding"
              :source="dataAdapter" :xAxis="xAxis" :enableCrosshairs="true"
              :animationDuration="1500" :seriesGroups="seriesGroups" :colorScheme="'scheme02'">
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
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 20, bottom: 5 },
                xAxis: {
                    minValue: 175,
                    maxValue: 550,
                    flip: false,
                    valuesOnTicks: true,
                    rangeSelector: {
                        serieType: 'area',
                        padding: { top: 20, bottom: 0 },
                        backgroundColor: 'white',
                        size: 110,
                        gridLines: { visible: false },
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                flip: false,
                                title: { text: 'Value<br><br>' }
                            },
                        series: [
                            { dataField: 'Close', lineWidth: 1, lineWidthSelected: 1 }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Date' },
                        { name: 'Open' },
                        { name: 'High' },
                        { name: 'Low' },
                        { name: 'Close' },
                        { name: 'Volume' },
                        { name: 'AdjClose' }
                    ],
                    url: 'TSLA_stockprice.csv'
                };
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                return 'Index: ' + itemIndex + ", Value: " + value;
            }
        }
    };
</script>

<style>
</style>