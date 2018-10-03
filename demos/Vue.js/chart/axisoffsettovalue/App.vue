<template>
    <div>
        <div style="width: 850px; height: 500px" @mousemove="myChartOnMousemove($event)">
            <JqxChart ref="myChart" style="width: 850px; height: 500px"
                      @click="myChartOnClick($event)"
                      :title="'Custom labels, grid lines and tick marks offsets'"
                      :description="'This example demonstrates how to use labels, tick marks and grid lines at custom offsets'"
                      :enableAnimations="false" :padding="padding"
                      :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                      :valueAxis="valueAxis" :seriesGroups="seriesGroups">
            </JqxChart>
        </div>

        <div ref="eventText" style="width:600px; height: 30px"></div>
    </div>
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
                    valuesOnTicks: true
                },
                valueAxis: {
                    padding: { right: 0 },
                    flip: false,
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    title: { text: 'Value' },
                    labels: {
                        horizontalAlignment: 'right'
                    }
                },
                seriesGroups:
                    [
                        {
                            type: 'line',
                            radius: 200,
                            series: [
                                { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                                { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                            ]
                        }
                    ]
            }
        },
        beforeCreate: function () {
            this.cursorRedDotElement = null;
        },
        methods: {
            myChartOnMousemove: function (event) {
                let position = this.cursorPositionRelativeToChart(event);
                // get the xAxis value
                let xvalue = this.$refs.myChart.getXAxisValue(position.x, 0);
                // get the valueAxis value
                let yvalue = this.$refs.myChart.getValueAxisValue(position.y, 0);
                // prepare event data text
                let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
                // display the event data text
                this.$refs.eventText.innerHTML = eventData;
                // display a small dot at the cursor position
                let instance = this.$refs.myChart.getInstance();
                let renderer = instance.renderer;
                if (this.cursorRedDotElement)
                    renderer.attr(this.cursorRedDotElement, { cx: position.x - 13, cy: position.y - 42 });
                else
                    this.cursorRedDotElement = renderer.circle(position.x, position.y, 1, { fill: 'red', stroke: 'red' });
            },
            myChartOnClick: function (event) {
                let position = this.cursorPositionRelativeToChart(event);
                // get the xAxis value
                let xvalue = this.$refs.myChart.getXAxisValue(position.x, 0);
                // get the valueAxis value
                let yvalue = this.$refs.myChart.getValueAxisValue(position.y, 0);
                // prepare event data text
                let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
                alert(eventData);
            },
            cursorPositionRelativeToChart: function (event) {
                // get the x/y coordinates of the mouse cursor relative to the chart element
                let x = event.pageX || event.clientX || event.screenX;
                let y = event.pageY || event.clientY || event.screenY;

                return { x: x, y: y };
            }
        }
    }
</script>

<style>
</style>