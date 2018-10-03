<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. GDP Percentage Change'"
              :description="'(source: Bureau of Economic Analysis)'"
              :showLegend="false" :enableAnimations="true" :padding="padding" :borderLineWidth="1"
              :titlePadding="titlePadding" :source="dataAdapter" :categoryAxis="categoryAxis"
              :showBorderLine="true" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
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
                padding: { left: 5, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                categoryAxis: {
                    dataField: 'Quarter',
                    unitInterval: 1,
                    textRotationAngle: -75,
                    formatFunction: (value) => {
                        return value;
                    },
                    valuesOnTicks: false
                },
                xAxis: {
                    dataField: 'Day',
                    unitInterval: 1,
                    tickMarks: { visible: true, interval: 1 },
                    gridLinesInterval: { visible: true, interval: 1 },
                    valuesOnTicks: false,
                    padding: { bottom: 10 }
                },
                seriesGroups: [
                    {
                        type: 'line',
                        valueAxis:
                            {
                                description: 'Percentage Change',
                                formatFunction: (value) => {
                                    return value + '%';
                                }
                            },
                        series:
                            [
                                {
                                    dataField: 'Change',
                                    displayText: 'Change',
                                    // Modify this function to return desired colors.
                                    // jqxChart will call the function for each data point.
                                    // Sequential points that have the same color will be
                                    // grouped automatically in a line segment
                                    colorFunction: (value) => {
                                        return (value < 0) ? '#FF0000' : '#00FF00';
                                    }
                                }
                            ]
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Quarter' },
                        { name: 'Change' }
                    ],
                    url: 'us_gdp_2008-2013.csv'
                };
        }
    };
</script>

<style>
</style>