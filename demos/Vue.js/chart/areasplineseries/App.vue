<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'U.S. History Home Prices (1950-2010)'" :description="'Source: http://www.econ.yale.edu/~shiller/data.htm'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                  :colorScheme="'scheme05'" :seriesGroups="seriesGroups">
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
                padding: { left: 15, top: 5, right: 20, bottom: 5 },
                titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Year',
                    minValue: 1950,
                    maxValue: 2010,
                    unitInterval: 5,
                    valuesOnTicks: true
                },
                seriesGroups: [
                    {
                        alignEndPointsWithIntervals: false,
                        type: 'splinearea',
                        valueAxis:
                            {
                                visible: true,
                                unitInterval: 20,
                                title: { text: 'Index Value' },
                                labels: {
                                    horizontalAlignment: 'right',
                                    formatSettings: { decimalPlaces: 0 }
                                }
                            },
                        series: [
                            { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7 },
                            { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9 }
                        ]
                    },
                    {
                        type: 'spline',
                        alignEndPointsWithIntervals: false,
                        valueAxis:
                            {
                                title: { text: 'Interest Rate' },
                                position: 'right',
                                unitInterval: 0.01,
                                maxValue: 0.2,
                                labels: { formatSettings: { decimalPlaces: 2 } },
                                tickMarks: {
                                    visible: true,
                                    interval: 0.005,
                                },
                                gridLines: {
                                    visible: false,
                                    interval: 0.01
                                }
                            },
                        series: [
                            { dataField: 'Rate', displayText: 'Interest Rate', opacity: 1.0, lineWidth: 4, dashStyle: '4,4' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
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