<template>
    <div>
        <label style="margin-left: 250px; font-size: 18px; font-weight: bold;">Weather in Geneva, Switzerland</label>

        <br />

        <label style="margin-left: 250px; font-size: 14px; font-weight: bold;">Climatological Information about Geneva</label>

        <JqxRangeSelector :width="getWidth" :height="200" :min="0" :max="12"
                          :range="{ from: 3, to: 9 }" :majorTicksInterval="1"
                          :minorTicksInterval="1" :labelsOnTicks="false"
                          :labelsFormatFunction="labelsFormatFunction"
                          :markersFormatFunction="markersFormatFunction">

            <JqxChart style="width: 750px; height: 200px" 
                      :title="''" :description="''" :showBorderLine="false"
                      :showLegend="false" :enableAnimations="true" :padding="padding"
                      :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
                      :colorScheme="'scheme05'" :seriesGroups="seriesGroups">
            </JqxChart>

        </JqxRangeSelector>
    </div>
</template>

<script>
    import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrangeselector.vue';
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxRangeSelector,
            JqxChart
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source, {
                    async: false,
                    autoBind: true,
                    loadComplete: (data, status, xhr, records) => {
                        this.recordsArray = records;
                    },
                    loadError: (xhr, status, error) => {
                        alert('Error loading "' + this.source.url + '" : ' + error);
                    }
                }),
                padding: { left: 5, top: 0, right: 0, bottom: 0 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
                xAxis: {
                    text: 'Category Axis',
                    textRotationAngle: 0,
                    dataField: 'month',
                    showTickMarks: false,
                    showLabels: false,
                    tickMarksInterval: 1,
                    tickMarksColor: '#888888',
                    valuesOnTicks: true,
                    unitInterval: 1,
                    visible: false,
                    showGridLines: false,
                    gridLinesInterval: 3,
                    gridLinesColor: '#888888',
                    axisSize: 'auto'
                },
                seriesGroups: [
                    {
                        type: 'line',
                        showLabels: false,
                        valueAxis:
                            {
                                unitInterval: 5,
                                visible: false,
                                description: 'Temperature [C]',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                        series: [
                            { dataField: 'max', lineColor: 'green', displayText: 'Max Temperature' },
                            { dataField: 'min', lineColor: 'red', displayText: 'Min Temperature' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'month' },
                    { name: 'min' },
                    { name: 'max' },
                ],
                url: 'weather_geneva.txt'
            };

            this.recordsArray = [];
        },
        methods: {
            labelsFormatFunction: function (data) {
                if (this.recordsArray[data]) {
                    return "1 " + this.recordsArray[data].month;
                }
                else return "31 " + this.recordsArray[data - 1].month;
            },
            markersFormatFunction: function (data) {
                if (this.recordsArray[data]) {
                    return "1 " + this.recordsArray[data].month;
                }
                else return "31 " + this.recordsArray[data - 1].month;
            }
        }
    }
</script>

<style>
</style>