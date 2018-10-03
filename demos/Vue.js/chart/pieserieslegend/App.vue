<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Mobile browsers share'"
              :description="'(source: wikipedia.org)'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :showBorderLine="true"
              :seriesGroups="seriesGroups" :colorScheme="'scheme03'" :legendLayout="legendLayout">
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
                legendLayout: { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' },
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                seriesGroups: [
                    {
                        type: 'pie',
                        showLabels: true,
                        series:
                            [
                                {
                                    dataField: 'Share',
                                    displayText: 'Browser',
                                    labelRadius: 170,
                                    initialAngle: 15,
                                    radius: 145,
                                    centerOffset: 0,
                                    formatFunction: (value) => {
                                        if (isNaN(value))
                                            return value;
                                        return parseFloat(value) + '%';
                                    },
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
                        { name: 'Browser' },
                        { name: 'Share' }
                    ],
                    url: 'mobile_browsers_share_dec2011.txt'
                };
        }
    };
</script>

<style>
</style>