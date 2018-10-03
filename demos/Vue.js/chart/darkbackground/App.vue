<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Stock Market Index Performance'"
              :description="'NASDAQ Composite compared to S&P 500'"
              :showLegend="true" :enableAnimation="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme02'"
              :backgroundColor="'#2e3338'">
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
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    formatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 1,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis: {
                    visible: true,
                    title: { text: 'Daily Closing Price<br>' },
                    tickMarks: { color: '#BCBCBC' }
                },
                seriesGroups: [
                    {
                        type: 'spline',
                        toolTipBackground: '#2e3338',
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
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
                return '<DIV style="background: #2e3338; text-align:left"><b>Date: </b>' +
                    categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
                    this.dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
                    this.dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
            }
        }
    };
</script>

<style>
    .jqx-chart-axis-text,
    .jqx-chart-label-text,
    .jqx-chart-tooltip-text,
    .jqx-chart-legend-text {
        fill: #fafafa;
        color: #fafafa;
        font-size: 12px;
        font-family: Verdana;
    }

    .jqx-chart-axis-description {
        fill: #fafafa;
        color: #fafafa;
        font-size: 12px;
        font-family: Verdana;
    }

    .jqx-chart-title-text {
        fill: #fafafa;
        color: #fafafa;
        font-size: 14px;
        font-weight: bold;
        font-family: Verdana;
    }

    .jqx-chart-title-description {
        fill: #fafafa;
        color: #fafafa;
        font-size: 13px;
        font-weight: normal;
        font-family: Verdana;
    }
</style>