<template>
    <JqxChart ref="myChart" style="width: 850px; height: 500px"
              :title="'Custom labels, grid lines and tick marks offsets'"
              :description="'This example demonstrates how to use labels, tick marks and grid lines at custom offsets'"
              :enableAnimations="false" :padding="padding"
              :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
              :valueAxis="valueAxis" :seriesGroups="seriesGroups">
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
                    { a: 0.1535, b: 0.5 },
                    { a: 0.48, b: 20.5 },
                    { a: 10, b: 60 },
                    { a: 100, b: 80 },
                    { a: 200, b: 90 },
                    { a: 245.11, b: 100.13 },
                    { a: 300.13, b: 150.13 },
                    { a: 340, b: 200 }
                ],
                padding: { left: 5, top: 5, right: 15, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'a',
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    labels: {
                        visible: 'custom', // show only custom labels. Change to true to show all labels or false to hide all
                        custom: [{ value: 10 }, { value: 20 }, { value: 'custom label at offset 100', offset: 100 }], // an array of items representing custom labels
                        // if the item has an offset property, the item is rendered at that offset, otherwise the value is mapped to an offset
                        // corresponding to its position on the axis scale. If an item has both a value and an offset property, the value
                        // property is not mappped to an offset, and instead it's just used to display the label
                        // the format function shows how to format the labels before they are displayed
                        formatFunction: (value) => {
                            return "{" + value + "}";
                        }
                    },
                    gridLines:
                        {
                            visible: 'custom', // show only custom grid lines. Change to true to show all grid lines or false to hide all
                            custom: [{ value: 10 }, { value: 20 }, { offset: 100 }]
                        },
                    tickMarks:
                        {
                            visible: 'custom', // show only custom tick marks. Change to true to show all tick marks or false to hide all
                            custom: [{ value: 10 }, { value: 20 }, { offset: 100 }]
                        },
                    flip: false
                },
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    title: { text: 'Value' },
                    labels: {
                        horizontalAlignment: 'right',
                        custom: [{ value: 10 }, { value: 20 }, { offset: 90, value: 'custom' }]
                    },
                    gridLines: {
                        custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
                    },
                    tickMarks: {
                        custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
                    },
                    flip: false
                },
                seriesGroups: [
                    {
                        type: 'scatter',
                        series: [
                            { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                            { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                        ],
                        bands: [{ from: 64, to: 256, color: 'red', opacity: 0.2 }]
                    }
                ]
            }
        }
    }
</script>

<style>
</style>