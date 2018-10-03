<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'NASDAQ and S&P 500 - OHLC Example'"
              :description="'(June 2010 - November 2014)'"
              :enableCrosshairs="true" :enableAnimations="true" :padding="padding"
              :source="dataAdapter" :xAxis="xAxis" :animationDuration="1500"
              :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
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
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                xAxis: {
                    dataField: 'Date',
                    labels:
                        {
                            formatFunction: (value) => {
                                return value.getDate() + '-' + this.months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                            }
                        },
                    type: 'date',
                    valuesOnTicks: true,
                    minValue: new Date(2014, 8, 20),
                    maxValue: new Date(2014, 10, 1),
                    rangeSelector: {
                        serieType: 'area',
                        padding: { left: 25, right: 10, top: 10, bottom: 10 },
                        backgroundColor: 'white',
                        dataField: 'SPClose',
                        baseUnit: 'month',
                        gridLines: { visible: false },
                        labels:
                            {
                                formatFunction: (value) => {
                                    return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                                }
                            }
                    }
                },
                seriesGroups: [
                    {
                        type: 'ohlc',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                description: 'S&P 500<br>'
                            },
                        series: [
                            {
                                dataFieldClose: 'SPClose',
                                displayTextClose: 'S&P Close price',
                                dataFieldOpen: 'SPOpen',
                                displayTextOpen: 'S&P Open price',
                                dataFieldHigh: 'SPHigh',
                                displayTextHigh: 'S&P High price',
                                dataFieldLow: 'SPLow',
                                displayTextLow: 'S&P Low price',
                                displayText: 'S&P 500',
                                lineWidth: 1
                            }
                        ]
                    },
                    {
                        type: 'line',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                position: 'right',
                                title: { text: '<br>NASDAQ' },
                                gridLines: { visible: false }
                            },
                        series: [
                            {
                                dataField: 'NQClose',
                                dataFieldClose: 'NQClose',
                                displayTextClose: 'Nasdaq Close price',
                                dataFieldOpen: 'NQOpen',
                                displayTextOpen: 'Nasdaq Open price',
                                dataFieldHigh: 'NQHigh',
                                displayTextHigh: 'Nasdaq High price',
                                dataFieldLow: 'NQLow',
                                displayTextLow: 'Nasdaq Low price',
                                displayText: 'NASDAQ',
                                lineWidth: 1
                            }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            this.source =
                {
                    datatype: 'tsv',
                    datafields: [
                        { name: 'Date' },
                        { name: 'SPOpen' },
                        { name: 'SPHigh' },
                        { name: 'SPLow' },
                        { name: 'SPClose' },
                        { name: 'SPVolume' },
                        { name: 'SPAdjClose' },
                        { name: 'NQOpen' },
                        { name: 'NQHigh' },
                        { name: 'NQLow' },
                        { name: 'NQClose' },
                        { name: 'NQVolume' },
                        { name: 'NQAdjClose' }
                    ],
                    url: 'nasdaq_vs_sp500_detailed.txt'
                };
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                var dataItem = this.dataAdapter.records[itemIndex];
                var volume = serie == 0 ? dataItem.SPVolume : dataItem.NQVolume;
                return '<DIV style="text-align:left"><b>Date: ' +
                    categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                    '</b><br />Open price: $' + value.open +
                    '</b><br />Close price: $' + value.close +
                    '</b><br />Low price: $' + value.low +
                    '</b><br />High price: $' + value.high +
                    '</b><br />Daily volume: ' + volume +
                    '</DIV>';
            }
        }
    };
</script>

<style>
</style>