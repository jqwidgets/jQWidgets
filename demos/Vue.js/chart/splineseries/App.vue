<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. Historical Home Prices (1950-2011)'"
              :description="'Source: http://www.econ.yale.edu/~shiller/data.htm'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
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
                padding: { left: 5, top: 5, right: 25, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Year',
                    minValue: 1947,
                    maxValue: 2012,
                    unitInterval: 5,
                    tickMarks: {
                        visible: true,
                        interval: 1
                    },
                    gridLines: {
                        visible: true,
                        interval: 5
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 10,
                                padding: { left: 10 },
                                title: { text: 'U.S. Population (millions)<br>' },
                                gridLines: { visible: false }
                            },
                        series: [
                            { dataField: 'Population', displayText: 'Population' }
                        ]
                    },
                    {
                        type: 'spline',
                        valueAxis:
                            {
                                unitInterval: 1,
                                visible: false
                            },
                        series: [
                            { dataField: 'Rate', displayText: 'Interest Rate' }
                        ]
                    },
                    {
                        type: 'spline',
                        valueAxis:
                            {
                                unitInterval: 20,
                                title: { text: 'Index Value<br>' },
                                labels: {
                                    horizontalAlignment: 'right',
                                    formatSettings: { decimalPlaces: 0 }
                                }
                            },
                        series: [
                            { dataField: 'HPI', displayText: 'Real Home Price Index' },
                            { dataField: 'BuildCost', displayText: 'Building Cost Index' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: "tab",
                    datafields: [
                        { name: 'Year' },
                        { name: 'HPI' },
                        { name: 'BuildCost' },
                        { name: 'Population' },
                        { name: 'Rate' }
                    ],
                    url: 'homeprices.txt'
                };
        }
    };
</script>

<style>
</style>