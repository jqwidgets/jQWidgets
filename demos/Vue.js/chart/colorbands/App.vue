<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Monthly Project Schedule'"
              :description="'Website update plan'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme03'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxChart,
            JqxTabs
        },
        data: function () {
            return {
                data: [
                    { Person: 'Planning', M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
                    { Person: 'Dev 1', M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
                    { Person: 'Dev 2', M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
                    { Person: 'QA 1', M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 }
                ],
                padding: { left: 5, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Person',
                    unitInterval: 1,
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    }
                },
                seriesGroups: [
                    {
                        orientation: 'horizontal',
                        type: 'rangecolumn',
                        columnsGapPercent: 100,
                        toolTipFormatFunction: this.toolTipCustomFormatFn,
                        valueAxis:
                            {
                                flip: true,
                                minValue: 1,
                                maxValue: 30,
                                unitInterval: 1,
                                title: { text: 'Day' },
                                tickMarks: { color: '#BCBCBC' }
                            },
                        series: [
                            { dataFieldFrom: 'M1_From', dataFieldTo: 'M1_To', displayText: 'Sprint 1', opacity: 1 },
                            { dataFieldFrom: 'M2_From', dataFieldTo: 'M2_To', displayText: 'Sprint 2', opacity: 1 }
                        ],
                        bands:
                            [
                                { minValue: 13, maxValue: 16, color: '#00FF00', opacity: 0.15 },
                                { minValue: 24, maxValue: 27, color: '#0000FF', opacity: 0.20 },
                                { minValue: 29, maxValue: 29, color: '#FF0000', opacity: 0.5, lineWidth: 3 }
                            ]
                    }
                ]
            }
        },
        methods: {
            toolTipCustomFormatFn: function (value, itemIndex, serie, group, categoryValue, categoryAxis) {
                var dataItem = this.data[itemIndex];
                return '<DIV style="text-align:left"><b>Team: ' + categoryValue +
                    '</b><br />Start day: ' + value.from +
                    '<br />End day: ' + value.to;
            }
        }
    }
</script>

<style>
</style>