<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Top 5 most populated countries'" :description="'Statistics for 2011'"
              :enableAnimations="true" :showLegend="true" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
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
                sampleData: [
                    { Country: 'China', Population: 1347350000, Percent: 19.18 },
                    { Country: 'India', Population: 1210193422, Percent: 17.22 },
                    { Country: 'USA', Population: 313912000, Percent: 4.47 },
                    { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
                    { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
                ],
                padding: { left: 20, top: 5, right: 20, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Country',
                    gridLines: { visible: true },
                    flip: false
                },
                valueAxis: {
                    flip: true,
                    labels: {
                        visible: true,
                        formatFunction: (value) => {
                            return parseInt(value) / 1000000;
                        }
                    }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        orientation: 'horizontal',
                        columnsGapPercent: 50,
                        toolTipFormatSettings: { thousandsSeparator: ',' },
                        series: [
                            { dataField: 'Population', displayText: 'Population (millions)' }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
</style>