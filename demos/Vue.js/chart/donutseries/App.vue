<template>
    <JqxChart style="width: 800px; height: 500px"
              :title="'Mobile & Desktop browsers share'"
              :description="'(source: wikipedia.org)'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :legendLayout="legendLayout"
              :showBorderLine="true" :seriesGroups="seriesGroups" :colomnSeriesOverlap="false">
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
                legendLayout: { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' },
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                seriesGroups: [
                    {
                        type: 'donut',
                        offsetX: 250,
                        source: this.dataAdapter_mobile,
                        xAxis: {
                            formatSettings: { prefix: 'Mobile ' }
                        },
                        series: [
                            {
                                dataField: 'Share',
                                displayText: 'Browser',
                                labelRadius: 120,
                                initialAngle: 10,
                                radius: 130,
                                innerRadius: 90,
                                centerOffset: 0,
                                formatSettings: { sufix: '%', decimalPlaces: 1 }
                            }
                        ]
                    },
                    {
                        type: 'donut',
                        offsetX: 250,
                        source: this.dataAdapter_desktop,
                        colorScheme: 'scheme02',
                        xAxis: {
                            formatSettings: { prefix: 'Desktop ' }
                        },
                        series: [
                            {
                                dataField: 'Share',
                                displayText: 'Browser',
                                labelRadius: 120,
                                initialAngle: 10,
                                radius: 70,
                                innerRadius: 30,
                                centerOffset: 0,
                                formatSettings: { sufix: '%', decimalPlaces: 1 }
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
                    { name: 'Browser' },
                    { name: 'Share' }
                ],
                url: 'desktop_browsers_share_dec2011.txt'
            };
        }
    };
</script>

<style>
</style>