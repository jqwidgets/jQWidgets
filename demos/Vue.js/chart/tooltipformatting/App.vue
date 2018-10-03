<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Stock Market Index Performance (2014)'"
              :description="'NASDAQ Composite compared to S&P 500'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme05'" :enableCrosshairs="true">
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
                padding: { left: 10, top: 5, right: 30, bottom: 5 },
                titlePadding: { left: 10, top: 0, right: 30, bottom: 10 },
                xAxis: {
                    type: 'date',
                    baseUnit: 'month',
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    dataField: 'Date',
                    valuesOnTicks: true,
                    formatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    gridLines: {
                        visible: true,
                        interval: 3,
                    },
                    labels:
                        {
                            angle: -45,
                            offset: { x: -20, y: 0 }
                        }
                },
                seriesGroups: [
                    {
                        type: 'spline',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                title: { text: 'Daily Closing Price<br>' }
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

            this.source =
                {
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
                return '<DIV style="text-align:left"><b>Date: </b>' +
                    categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
                    this.dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
                    this.dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
            }
        }
    };
</script>

<style>
</style>