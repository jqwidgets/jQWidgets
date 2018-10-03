<template>
    <table cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <JqxChart style="width: 400px; height: 180px"
                          :title="'Cluster capacity'" :description="''"
                          :showLegend="false" :enableAnimations="true" :padding="padding"
                          :titlePadding="titlePadding" :source="data1" :showToolTips="true"
                          :seriesGroups="seriesGroups" :colorScheme="'scheme05'"
                          :backgroundColor="'#FAFAFA'" :drawBefore="drawBefore">
                </JqxChart>
            </td>
            <td>
                <JqxChart style="width: 400px; height: 180px"
                          :title="'Avg. CPU %'" :description="''"
                          :showLegend="false" :enableAnimations="true" :padding="padding"
                          :titlePadding="titlePadding" :source="data2" :showToolTips="true"
                          :seriesGroups="seriesGroups" :colorScheme="'scheme05'"
                          :backgroundColor="'#FAFAFA'" :drawBefore="drawBefore">
                </JqxChart>
            </td>
        </tr>
        <tr>
            <td>
                <JqxChart style="width: 400px; height: 180px"
                          :title="'Storage capacity [TB]'" :description="''"
                          :showLegend="false" :enableAnimations="true" :padding="padding"
                          :titlePadding="titlePadding" :source="data3" :showToolTips="true"
                          :seriesGroups="seriesGroups" :colorScheme="'scheme05'"
                          :backgroundColor="'#FAFAFA'" :drawBefore="drawBefore">
                </JqxChart>
            </td>
            <td>
                <JqxChart style="width: 400px; height: 180px"
                          :title="'Network utilization %'" :description="''"
                          :showLegend="false" :enableAnimations="true" :padding="padding"
                          :titlePadding="titlePadding" :source="data4" :showToolTips="true"
                          :seriesGroups="seriesGroups" :colorScheme="'scheme05'"
                          :backgroundColor="'#FAFAFA'" :drawBefore="drawBefore">
                </JqxChart>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <JqxChart style="width: 800px; height: 300px"
                          :title="'Get request per second & response latencies'" :description="''"
                          :showLegend="false" :enableAnimations="true" :padding="padding"
                          :titlePadding="titlePadding" :source="data5" :showToolTips="true"
                          :seriesGroups="seriesGroups2" :colorScheme="'scheme05'"
                          :backgroundColor="'#FAFAFA'" :drawBefore="drawBefore">
                </JqxChart>
            </td>
        </tr>
    </table>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
        },
        data: function () {
            return {
                data1: [
                    { text: 'Used', value: 55 },
                    { text: 'Available', value: 9 }
                ],
                data2: [
                    { text: 'Used', value: 37 },
                    { text: 'Available', value: 63 }
                ],
                data3: [
                    { text: 'Used', value: 89.3 },
                    { text: 'Available', value: 166.7 }
                ],
                data4: [
                    { text: 'Used', value: 47 },
                    { text: 'Available', value: 53 }
                ],
                data5: [
                    { hour: 0, latency: 235, requests: 3500 },
                    { hour: 1, latency: 231, requests: 3400 },
                    { hour: 2, latency: 217, requests: 3350 },
                    { hour: 3, latency: 215, requests: 3260 },
                    { hour: 4, latency: 225, requests: 3320 },
                    { hour: 5, latency: 235, requests: 3400 },
                    { hour: 6, latency: 239, requests: 3550 },
                    { hour: 7, latency: 255, requests: 4100 },
                    { hour: 8, latency: 251, requests: 4200 },
                    { hour: 9, latency: 259, requests: 4500 },
                    { hour: 10, latency: 265, requests: 4560 },
                    { hour: 11, latency: 257, requests: 4500 },
                    { hour: 12, latency: 265, requests: 4490 },
                    { hour: 13, latency: 261, requests: 4400 },
                    { hour: 14, latency: 258, requests: 4350 },
                    { hour: 15, latency: 257, requests: 4340 },
                    { hour: 16, latency: 255, requests: 4200 },
                    { hour: 17, latency: 245, requests: 4050 },
                    { hour: 18, latency: 241, requests: 4020 },
                    { hour: 19, latency: 239, requests: 3900 },
                    { hour: 20, latency: 237, requests: 3810 },
                    { hour: 21, latency: 236, requests: 3720 },
                    { hour: 22, latency: 235, requests: 3610 },
                    { hour: 23, latency: 239, requests: 3550 },
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 5, top: 5, right: 5, bottom: 5 },
                seriesGroups: [
                    {
                        type: 'donut',
                        useGradientColors: false,
                        series:
                            [
                                {
                                    showLabels: false,
                                    enableSelection: true,
                                    displayText: 'text',
                                    dataField: 'value',
                                    labelRadius: 120,
                                    initialAngle: 90,
                                    radius: 60,
                                    innerRadius: 50,
                                    centerOffset: 0
                                }
                            ]
                    }
                ],
                xAxis: {
                    dataField: 'hour',
                    displayText: 'Hour',
                },
                seriesGroups2: [
                    {
                        type: 'column',
                        valueAxis:
                            {
                                title: { text: 'Request Latency [ms]<br>' },
                                position: 'left'
                            },
                        toolTipFormatSettings: { sufix: ' ms' },
                        series:
                            [
                                {
                                    dataField: 'latency',
                                    displayText: 'Request latency',
                                    colorFunction: (value, itemIndex, serie, group) => {
                                        return (value > this.latencyThreshold) ? '#CC1133' : '#55CC55';
                                    }
                                }
                            ],
                        bands:
                            [
                                {
                                    minValue: this.latencyThreshold,
                                    maxValue: this.latencyThreshold,
                                    lineWidth: 1,
                                    color: 'red'
                                }
                            ]
                    },
                    {
                        type: 'spline',
                        valueAxis:
                            {
                                title: { text: 'Get Requests per second' },
                                position: 'right'
                            },
                        toolTipFormatSettings: { sufix: ' req/s' },
                        series:
                            [
                                {
                                    dataField: 'requests',
                                    displayText: 'Get requests',
                                    lineColor: '#343F9B',
                                    lineWidth: 2
                                }
                            ]
                    },
                ]
            }
        },
        beforeCreate: function () {
            this.counter = 0;
            this.latencyThreshold = 260;
        },
        methods: {
            drawBefore: function (renderer, rect) {
                let value;

                if (this.counter === 0) {
                    value = this.data1[0].value;
                } else if (this.counter === 1) {
                    value = this.data2[0].value;
                } else if (this.counter === 2) {
                    value = this.data3[0].value;
                } else if (this.counter === 3) {
                    value = this.data4[0].value;
                }

                let sz = renderer.measureText(value, 0, { 'class': 'chart-inner-text' });
                renderer.text(
                    value,
                    rect.x + (rect.width - sz.width) / 2,
                    rect.y + rect.height / 2,
                    0,
                    0,
                    0,
                    { 'class': 'chart-inner-text' }
                );

                this.counter++;
            }
        }
    }
</script>

<style>
    .chart-inner-text {
        fill: #00BAFF;
        color: #00BAFF;
        font-size: 30px;
        font-family: Verdana;
    }
</style>