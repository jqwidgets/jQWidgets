<template>
    <JqxTabs :width="750" :height="560">
        <ul>
            <li style="margin-left: 30px">
                <div style="height: 20px; margin-top: 5px">
                    <div style="margin-left: 4px; vertical-align: middle; text-align: center; float: left">
                        Candlestick Chart
                    </div>
                </div>
            </li>
            <li>
                <div style="height: 20px; margin-top: 5px">
                    <div style="margin-left: 4px; vertical-align: middle; text-align: center; float: left">
                        Line Chart
                    </div>
                </div>
            </li>
        </ul>
        <div style="overflow: hidden">
            <JqxChart style="width: 100%; height: 100%"
                      :title="'S&P 500 Candlestick Chart'"
                      :description="'(January 2014 - November 2014)'"
                      :enableAnimations="true" :animationDuration="1500" :enableCrosshairs="true" :padding="padding"
                      :source="dataAdapter" :xAxis="xAxis"
                      :seriesGroups="seriesGroups" :colorScheme="'scheme17'">
            </JqxChart>
        </div>
        <div style="overflow: hidden">
            <JqxChart style="width: 100%; height: 100%"
                      :title="'U.S. Stock Market Index Performance (2014)'"
                      :description="'(NASDAQ Composite compared to S&P 500)'"
                      :showLegend="true" :enableAnimations="true" :padding="padding"
                      :animationDuration="1500" :source="dataAdapter2" :xAxis="xAxis2"
                      :seriesGroups="seriesGroups2" :colorScheme="'scheme04'">
            </JqxChart>
        </div>
    </JqxTabs>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxChart,
            JqxTabs
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                dataAdapter2: new jqx.dataAdapter(this.source2, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source2.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    formatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    },
                    type: 'date',
                    valuesOnTicks: true,
                    minValue: new Date(2014, 0, 1),
                    maxValue: new Date(2014, 11, 1)
                },
                xAxis2: {
                    dataField: 'Date',
                    type: 'date',
                    baseUnit: 'month',
                    unitInterval: 1,
                    valuesOnTicks: true,
                    labels: {
                        formatFunction: (value) => {
                            return this.months[value.getMonth()];
                        }
                    },
                    toolTipFormatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    tickMarks: { visible: true, unitInterval: 1 },
                    gridLines: { visible: true, unitInterval: 3 }
                },
                seriesGroups: [
                    {
                        type: 'candlestick',
                        columnsMinWidth: 4,
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                title: { text: 'S&P 500<br>' },
                                minValue: 1500
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
                                tickMarks: { visible: false },
                                labels: {
                                    formatFunction: (value) => {
                                        return value / 1000000 + 'M';
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
                ],
                seriesGroups2: [
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 500,
                                visible: true,
                                title: { text: 'Daily Closing Price' }
                            },
                        series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ' }
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

            this.source2 = {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: 'nasdaq_vs_sp500.txt'
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