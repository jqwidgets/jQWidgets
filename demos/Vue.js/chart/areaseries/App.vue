<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'U.S. Stock Market Index Performance'" :description="'NASDAQ Composite compared to S&P 500'"
                  :showLegend="true" :enableAnimations="true" :enableCrosshairs="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :valueAxis="valueAxis" :colorScheme="'scheme05'" :seriesGroups="seriesGroups">
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
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Date',
                    type: 'date',
                    baseUnit: 'month',
                    minValue: new Date(2014, 0, 1),
                    maxValue: new Date(2014, 11, 1),
                    valuesOnTicks: true,
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -15 },
                        formatFunction: (value) => {
                            return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        },
                    },
                    toolTipFormatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    }
                },
                valueAxis: {
                    title: { text: 'Daily Closing Price<br>' }
                },
                seriesGroups: [
                    {
                        type: 'area',
                        alignEndPointsWithIntervals: true,
                        series: [
                            { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
                            { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
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

        }
    }
</script>

<style>
</style>