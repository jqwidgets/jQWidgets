<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'EU Population between 2003 and 2014'"
              :description="'data source: Eurostat'"
              :showLegend="false" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme06'">
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
                data: this.data,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    type: 'basic',
                    dataField: 'year',
                    displayText: 'Year',
                    labels: { angle: 0 }
                },
                valueAxis: {
                    title: { text: 'Population<br>' },
                    unitInterval: 1000000,
                    labels:
                        {
                            formatFunction: (value) => {
                                return value / 1000000 + ' M';
                            }
                        }
                },
                seriesGroups: [
                    {
                        type: 'waterfall',
                        series:
                            [
                                {
                                    dataField: 'population',
                                    summary: 'summary',
                                    displayText: 'Population change',
                                    colorFunction: (value, itemIndex, serie, group) => {
                                        if (itemIndex === (this.data.length - 1)) {
                                            return '#3F3A3B'; // total
                                        }
                                        return (value < 0) ? '#D30E2F' /* red */ : '#24A037' /*green*/;
                                    }
                                }
                            ]
                    }
                ]
            }
        },
        beforeCreate: function () {

            this.data = [
                { year: 2003, population: 490815046 },
                { year: 2004, population: 492709300 },
                { year: 2005, population: 494774599 },
                { year: 2006, population: 496633373 },
                { year: 2007, population: 498408547 },
                { year: 2008, population: 500418320 },
                { year: 2009, population: 502186144 },
                { year: 2010, population: 503379305 },
                { year: 2011, population: 504961522 },
                { year: 2012, population: 504582506 },
                { year: 2013, population: 505674965 },
                { year: 2014, population: 507416607 },
                { year: 'Total', summary: true }
            ];

            for (var i = this.data.length - 2; i > 0; i--) {
                this.data[i].population -= this.data[i - 1].population;
            }
        }
    };
</script>

<style>
</style>