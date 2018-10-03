<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Tesla Motors Stock Price'"
              :description="'Closing price (June 2013 - March 2014)'"
              :showLegend="true" :enableAnimations="true" :padding="padding" :enableCrosshairs="true"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis" :crosshairsColor="'#0000FF'"
              :crosshairsDashStyle="'1,1'" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
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
                padding: { left: 15, top: 5, right: 30, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    type: 'date',
                    baseUnit: 'month',
                    minValue: new Date(2013, 5, 1),
                    maxValue: new Date(2014, 2, 1),
                    valuesOnTicks: true,
                    dataField: 'Date',
                    labels:
                        {
                            formatFunction: (value) => {
                                return this.months[value.getUTCMonth()] + '-' + value.getFullYear();
                            },
                            angle: 0,
                            horizontalAlignment: 'right'
                        },
                    toolTipFormatFunction: (value) => {
                        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    tickMarks: { visilbe: true }
                },
                seriesGroups: [
                    {
                        type: 'stepline',
                        valueAxis:
                            {
                                flip: false,
                                title: { text: 'Price per share [USD]<br>' },
                                labels: { horizontalAlignment: 'right' }
                            },
                        series: [
                            { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, symbolSize: 6 }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: "csv",
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
        }
    };
</script>

<style>
</style>