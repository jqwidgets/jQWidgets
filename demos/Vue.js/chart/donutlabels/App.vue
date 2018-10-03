<template>
    <JqxChart style="width: 800px; height: 500px"
              :title="'Desktop browsers share'"
              :description="'(source: wikipedia.org)'"
              :showLegend="false" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter"
              :showBorderLine="true" :seriesGroups="seriesGroups" :colorScheme="'scheme02'">
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
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                seriesGroups: [
                    {
                        type: 'donut',
                        showLabels: true,
                        series:
                            [
                                {
                                    dataField: 'Share',
                                    displayText: 'Browser',
                                    labelRadius: 120,
                                    initialAngle: 15,
                                    radius: 170,
                                    innerRadius: 70,
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