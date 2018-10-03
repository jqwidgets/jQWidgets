<template>
    <JqxChart style="width: 800px; height: 500px"
              @rangeSelectionChanging="chartChange($event)"
              :title="'Tesla Motors Stock Price'"
              :description="'(June 2010 - March 2014)'"
              :enableCrosshairs="true" :enableAnimations="true" :padding="padding" :xAxis="xAxis"
              :titlePadding="titlePadding" :source="dataAdapter" :animationDuration="1500"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
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
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 30, bottom: 5 },
                titlePadding: { left: 30, top: 5, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    minValue: new Date(2012, 0, 1),
                    maxValue: new Date(2013, 11, 31),
                    type: 'date',
                    baseUnit: 'day',
                    labels:
                        {
                            formatFunction: (value) => {
                                return value.getDate() + '-' + this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                            }
                        },
                    rangeSelector: {
                        size: 80,
                        padding: { /*left: 0, right: 0,*/top: 0, bottom: 0 },
                        minValue: new Date(2010, 5, 1),
                        backgroundColor: 'white',
                        dataField: 'Close',
                        baseUnit: 'month',
                        gridLines: { visible: false },
                        serieType: 'area',
                        labels: {
                            formatFunction: (value) => {
                                return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                            }
                        }
                    }
                },
                valueAxis: {
                    title: { text: 'Price per share [USD]<br><br>' },
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        series: [
                            { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, lineWidthSelected: 1 }
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

            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                let dataItem = this.dataAdapter.records[itemIndex];
                return '<DIV style="text-align:left"><b>Date: ' +
                    categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                    '</b><br />Open price: $' + dataItem.Open +
                    '</b><br />Close price: $' + dataItem.Close +
                    '</b><br />Daily volume: ' + dataItem.Volume +
                    '</DIV>';
            },
            chartChange: function (event) {
                const args = event.args;
                args.instance.description = args.minValue.getFullYear() + ' - ' + args.maxValue.getFullYear();
            }
        }
    };
</script>

<style>
</style>