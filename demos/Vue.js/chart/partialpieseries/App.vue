<template>
    <div>
        <JqxChart style="width: 400px; height: 250px; float: left"
                  :title="''"
                  :description="charts[0].title"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="charts[0].dataSource" :showBorderLine="true"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>

        <JqxChart style="width: 400px; height: 250px; float: left"
                  :title="''"
                  :description="charts[1].title"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="charts[1].dataSource" :showBorderLine="true"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>

        <JqxChart style="width: 400px; height: 250px; float: left"
                  :title="''"
                  :description="charts[2].title"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="charts[2].dataSource" :showBorderLine="true"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>

        <JqxChart style="width: 400px; height: 250px; float: left"
                  :title="''"
                  :description="charts[3].title"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="charts[3].dataSource" :showBorderLine="true"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
        </JqxChart>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                charts: [
                    { title: 'Stat counter', label: 'Stat', dataSource: this.dataStatCounter },
                    { title: 'W3C counter', label: 'W3C', dataSource: this.dataW3CCounter },
                    { title: 'Wikimedia', label: 'Wikimedia', dataSource: this.dataWikimedia },
                    { title: 'Net Applications', label: 'NetApp', dataSource: this.dataNetApplications }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                seriesGroups: [
                    {
                        type: 'pie',
                        showLegend: true,
                        enableSeriesToggle: true,
                        series:
                            [
                                {
                                    dataField: 'Share',
                                    displayText: 'Browser',
                                    showLabels: true,
                                    labelRadius: 160,
                                    labelLinesEnabled: true,
                                    labelLinesAngles: true,
                                    labelsAutoRotate: false,
                                    initialAngle: 0,
                                    radius: 125,
                                    minAngle: 0,
                                    maxAngle: 180,
                                    centerOffset: 0,
                                    offsetY: 170,
                                    formatFunction: (value, itemIdx, serieIndex, groupIndex) => {
                                        if (isNaN(value))
                                            return value;
                                        return value + '%';
                                    }
                                }
                            ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.dataStatCounter = [
                { Browser: 'Chrome', Share: 45.6 },
                { Browser: 'IE', Share: 24.6 },
                { Browser: 'Firefox', Share: 20.4 },
                { Browser: 'Safari', Share: 5.1 },
                { Browser: 'Opera', Share: 1.3 },
                { Browser: 'Other', Share: 3.0 }
            ];

            this.dataW3CCounter = [
                { Browser: 'Chrome', Share: 34.1 },
                { Browser: 'IE', Share: 20.3 },
                { Browser: 'Firefox', Share: 18.3 },
                { Browser: 'Safari', Share: 17.8 },
                { Browser: 'Opera', Share: 2.7 },
                { Browser: 'Other', Share: 6.8 }
            ];

            this.dataWikimedia = [
                { Browser: 'Chrome', Share: 42.7 },
                { Browser: 'IE', Share: 18.0 },
                { Browser: 'Firefox', Share: 15.3 },
                { Browser: 'Safari', Share: 6.1 },
                { Browser: 'Opera', Share: 2.4 },
                { Browser: 'Other', Share: 15.6 }
            ];

            this.dataNetApplications = [
                { Browser: 'Chrome', Share: 16.4 },
                { Browser: 'IE', Share: 55.2 },
                { Browser: 'Firefox', Share: 18.0 },
                { Browser: 'Safari', Share: 5.8 },
                { Browser: 'Opera', Share: 1.3 },
                { Browser: 'Other', Share: 3.4 }
            ];
        }
    };
</script>

<style>
</style>