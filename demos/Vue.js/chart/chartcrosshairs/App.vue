<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Stock Market Index Performance'"
              :description="'NASDAQ Composite compared to S&P 500'"
              :showLegend="true" :enableAnimations="true" :enableCrosshairs="true"
              :crosshairsDashStyle="'2,2'" :crosshairsLineWidth="1.0" :crosshairsColor="'#888888'"
              :padding="padding" :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                padding: { left: 10, top: 5, right: 30, bottom: 5 },
                titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    formatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    unitInterval: 1,
                    valuesOnTicks: true,
                    gridLines: { interval: 3 },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        valueAxis:
                            { title: { text: 'Daily Closing Price<br><br>' } },
                        series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: 'nasdaq_vs_sp500.txt'
            };

            this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        }
    }
</script>

<style>
</style>