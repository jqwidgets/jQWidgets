<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Stock Market Index Performance'"
              :description="'NASDAQ Composite compared to S&P 500'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
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
                        type: 'line',
                        series:
                            [
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
                datatype: "csv",
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: 'nasdaq_vs_sp500.txt'
            };
        }
    }
</script>

<style>
</style>