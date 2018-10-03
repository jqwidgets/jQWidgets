<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Stock Market Index Performance'"
              :description="'NASDAQ Composite compared to S&P 500'"
              :showLegend="true" :enableAnimation="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme04'"
              :backgroundImage="'../images/chart_background.jpg'">
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
                padding: { left: 10, top: 5, right: 30, bottom: 5 },
                titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    type: 'date',
                    baseUnit: 'month',
                    unitInterval: 1,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#FFFFFF',
                        dashStyle: '2,1'
                    },
                    gridLines: {
                        visible: true,
                        interval: 1,
                        color: '#FFFFFF',
                        dashStyle: '2,1'
                    },
                    labels:
                        {
                            angle: -45,
                            rotationPoint: 'topright',
                            offset: { x: 0, y: -25 },
                            formatFunction: (value) => {
                                return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                            }
                        }
                },
                valueAxis: {
                    displayValueAxis: true,
                    title: { text: 'Daily Closing Price<br>' },
                    gridLines: {
                        dashStyle: '2,1',
                        color: '#FFFFFF'
                    },
                    tickMarks: {
                        dashStyle: '2,1',
                        color: '#FFFFFF'
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500', lineColor: '#FFFFFF', lineColorSelected: '#DDDDDD', fillColor: '#FFFFFF' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ', lineColor: '#0FF0FF', lineColorSelected: '#2EE2EE', fillColor: '#0FF0FF' }
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
        }
    };
</script>

<style>
    .jqx-chart-axis-text, .jqx-chart-label-text, .jqx-chart-legend-text, .jqx-chart-axis-description, .jqx-chart-title-text, .jqx-chart-title-description {
        fill: #ffffff;
        color: #ffffff;
    }

    .myChart div {
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>