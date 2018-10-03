<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'U.S. GDP Percentage Change'"
              :description="'(source: Bureau of Economic Analysis)'"
              :showLegend="false" :enableAnimations="true" :padding="padding" :borderLineWidth="1"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis" :showBorderLine="true"
              :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
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
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Quarter',
                    unitInterval: 1,
                    textRotationAngle: -75,
                    formatFunction: (value) => {
                        return value;
                    },
                    valuesOnTicks: false
                },
                valueAxis: {
                    visible: true,
                    minValue: 0,
                    maxValue: 200,
                    unitInterval: 50,
                    title: { text: 'Sales ($)<br>' },
                    labels: { horizontalAlignment: 'right' }
                },
                seriesGroups:
                [
                    {
                        type: 'column',
                        valueAxis:
                            {
                                description: 'Percentage Change',
                                formatFunction: (value) => {
                                    return value + '%';
                                },
                                maxValue: 10,
                                minValue: -10,
                                unitInterval: 2
                            },
                        series:
                            [
                                {
                                    dataField: 'Change',
                                    displayText: 'Change',
                                    toolTipFormatFunction: (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
                                        return '<DIV style="text-align:left";><b>Year-Quarter: </b>' + categoryValue
                                            + '<br /><b>GDP Change:</b> ' + value + ' %</DIV>'
                                    },
                                    // Modify this function to return the desired colors.
                                    // jqxChart will call the function for each data point.
                                    // Sequential points that have the same color will be
                                    // grouped automatically in a line segment
                                    colorFunction: (value, itemIndex, serie, group) => {
                                        return (value < 0) ? '#CC1133' : '#55CC55';
                                    }
                                }
                            ]
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                datatype: 'csv',
                datafields: [
                    { name: 'Quarter' },
                    { name: 'Change' }
                ],
                url: 'us_gdp_2008-2013.csv'
            };
        }
    }
</script>

<style>
</style>