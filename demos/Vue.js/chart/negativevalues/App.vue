<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Weather in Geneva, Switzerland'"
              :description="'Climatological Information about Geneva'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
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
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'month',
                    displayText: 'Month',
                    unitInterval: 1,
                    gridLines: { interval: 3 }
                },
                valueAxis: {
                    unitInterval: 5,
                    title: {
                        visible: true,
                        text: 'Temperature [C]<br>'
                    },
                    labels: {
                        formatSettings: {
                            decimalPlaces: 1,
                            negativeWithBrackets: false
                        },
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        series: [
                            { dataField: 'max', displayText: 'Max Temperature' },
                            { dataField: 'min', displayText: 'Min Temperature' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: 'json',
                    datafields: [
                        { name: 'month' },
                        { name: 'min' },
                        { name: 'max' },
                    ],
                    url: 'weather_geneva.txt'
                };
        }
    };
</script>

<style>
</style>