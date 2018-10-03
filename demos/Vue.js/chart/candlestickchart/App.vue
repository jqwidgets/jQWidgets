<template>
    <div>
        <JqxChart style="width: 850px; height: 500px"
                  :title="'S&P 500 Candlestick Chart'"
                  :description="'(June 2010 - November 2014)'"
                  :enableAnimations="true" :enableCrosshairs="true" :animationDuration="1500"
                  :source="dataAdapter" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme17'" :padding="padding">
        </JqxChart>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart
        },
        data: function () {

            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                xAxis: {
                    dataField: 'Date',
                    labels: {
                        formatFunction: (value) => {
                            return value.getDate() + '-' + this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    },
                    type: 'date',
                    valuesOnTicks: true,
                    minValue: new Date(2014, 1, 1),
                    maxValue: new Date(2014, 10, 1),
                    rangeSelector: {
                        padding: { left: 25, right: 10, top: 10, bottom: 10 },
                        backgroundColor: 'white',
                        dataField: 'SPClose',
                        baseUnit: 'month',
                        serieType: 'area',
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
                        type: 'candlestick',
                        columnsMaxWidth: 15,
                        columnsMinWidth: 5,
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
                        valueAxis:
                            {
                                position: 'right',
                                title: { text: '<br>Daily Volume' },
                                gridLines: { visible: false },
                                labels: {
                                    formatFunction: (value) => {
                                        return (parseInt(value) / 1000000) + 'M';
                                    }
                                }
                            },
                        series: [
                            {
                                dataField: 'SPVolume',
                                displayText: 'Volume',
                                lineWidth: 1
                            }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            this.source = {
                datatype: 'tsv',
                datafields: [
                    { name: 'Date' },
                    { name: 'SPOpen' },
                    { name: 'SPHigh' },
                    { name: 'SPLow' },
                    { name: 'SPClose' },
                    { name: 'SPVolume' },
                    { name: 'SPAdjClose' }
                ],
                url: 'nasdaq_vs_sp500_detailed.txt'
            };
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                let dataItem = this.dataAdapter.records[itemIndex];
                let volume = dataItem.SPVolume;
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
    }
</script>

<style>
</style>