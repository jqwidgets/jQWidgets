<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'EU Employment rate trends by gender'"
              :description="'data source: Eurostat'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
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
                    title: { text: 'Employment rate<br>' },
                    labels:
                        {
                            formatSettings:
                                {
                                    decimalPlaces: 1,
                                    sufix: '%'
                                }
                        }
                },
                seriesGroups: [
                    {
                        type: 'waterfall',
                        toolTipFormatFunction: (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
                            var dataItem = this.data[itemIndex];
                            var val = Math.round(value * 100) / 100;
                            return '<DIV style="text-align:left"><b>' +
                                ((itemIndex == this.data.length - 1) ? 'Summary:' : 'Year: ' + dataItem.year) + '</b>' +
                                '<br />' + serie.displayText + ' ' + ((itemIndex != 0 && itemIndex != this.data.length - 1) ? 'change: ' : 'rate: ') + val + ' %' +
                                '</DIV>';
                        },
                        series: [
                            {
                                dataField: 'male',
                                summary: 'summary',
                                displayText: 'Male employment',
                                colorFunction: (value, itemIndex, serie, group) => {
                                    if (itemIndex == this.data.length - 1)
                                        return '#3F3A3B'; // total
                                    return (value < 0) ? '#C30E1F' /* red */ : '#117406' /*green*/;
                                }
                            },
                            {
                                dataField: 'female',
                                summary: 'summary',
                                displayText: 'Female employment',
                                colorFunction: (value, itemIndex, serie, group) => {
                                    if (itemIndex == this.data.length - 1)
                                        return '#4F4A4B'; // total
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
                { year: 2002, male: 75.4, female: 58.1 },
                { year: 2003, male: 75.4, female: 58.7 },
                { year: 2004, male: 75.5, female: 59.4 },
                { year: 2005, male: 76.0, female: 60.0 },
                { year: 2006, male: 76.8, female: 61.1 },
                { year: 2007, male: 77.7, female: 62.1 },
                { year: 2008, male: 77.8, female: 62.8 },
                { year: 2009, male: 75.7, female: 62.3 },
                { year: 2010, male: 75.0, female: 62.0 },
                { year: 2011, male: 74.9, female: 62.2 },
                { year: 2012, male: 74.5, female: 62.4 },
                { year: 2013, male: 74.3, female: 62.6 },
                { year: 'Summary', male: 74.3, female: 62.6, summary: true }
            ];

            for (let i = this.data.length - 2; i > 0; i--) {
                this.data[i].male -= this.data[i - 1].male;
                this.data[i].female -= this.data[i - 1].female;
            }
        }
    };
</script>

<style>
</style>