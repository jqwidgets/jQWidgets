<template>
    <JqxChart ref="myChart" style="width: 850px; height: 500px"
              :title="'U.S. Historical Home Prices (1950-2011)'" :description="'Source: http://www.econ.yale.edu/~shiller/data.htm'"
              :enableAnimations="true" :showLegend="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart,
        },
        data: function () {

            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 20, top: 5, right: 20, bottom: 5 },
                titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Year',
                    minValue: 1947,
                    maxValue: 2012,
                    unitInterval: 5,
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        dashStyle: '1,2'
                    },
                    gridLines: {
                        visible: true,
                        interval: 5,
                        dashStyle: '1,3'
                    }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 20,
                                maxValue: 400,
                                title: { text: 'U.S. Population (millions)' },
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
                                title: { text: 'Interest rate' },
                                position: 'right',
                                unitInterval: 0.01,
                                maxValue: 0.2,
                                visible: true,
                                gridLines: { visible: false },
                                labels: {
                                    horizontalAlignment: 'left'
                                }
                            },
                        series: [
                            { dataField: 'Rate', displayText: 'Interest Rate' }
                        ]
                    },
                    {
                        type: 'spline',
                        valueAxis:
                            {
                                title: { text: 'Index Value' },
                                position: 'right',
                                unitInterval: 20,
                                maxValue: 200,
                                gridLines: { visible: false },
                                labels: {
                                    formatSettings:
                                        {
                                            decimalPlaces: 0
                                        },
                                    horizontalAlignment: 'left'
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
            this.source = {
                datatype: 'tab',
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
    }
</script>

<style>
</style>