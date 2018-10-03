<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Electricity prices in Europe between 2004 and 2014'" :description="'Source: Eurostat'"
                  :enableAnimations="true" :showLegend="true" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme04'">
        </JqxChart>

        <table style="padding-left: 30px; padding-top: 10px">
            <tr style="height: 50px">
                <td style="width: 300px"><b>[value] axis properties:</b></td>
                <td><b>xAxis properties:</b></td>
            </tr>
            <tr>
                <td>
                    Left padding:
                    <JqxSlider @change="sliderValueAxisLeftPaddingOnChange($event)"
                               :width="250" :min="0" :max="50" :step="1"
                               :value="0" :ticksFrequency="5" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Top padding:
                    <JqxSlider @change="sliderXAxisTopPaddingOnChange($event)"
                               :width="250" :min="0" :max="50" :step="1"
                               :value="0" :ticksFrequency="5" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Right padding:
                    <JqxSlider @change="sliderValueAxisRightPaddingOnChange($event)"
                               :width="250" :min="0" :max="50" :step="1"
                               :value="0" :ticksFrequency="5" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Bottom padding:
                    <JqxSlider @change="sliderXAxisBottomPaddingOnChange($event)"
                               :width="250" :min="0" :max="50" :step="1"
                               :value="0" :ticksFrequency="5" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Labels angle:
                    <JqxSlider @change="sliderValueAxisAngleOnChange($event)"
                               :width="250" :min="0" :max="360" :step="1"
                               :value="0" :ticksFrequency="30" :mode="'fixed'">
                    </JqxSlider>
                </td>
                <td>
                    Labels angle:
                    <JqxSlider @change="sliderXAxisAngleOnChange($event)"
                               :width="250" :min="0" :max="360" :step="1"
                               :value="0" :ticksFrequency="30" :mode="'fixed'">
                    </JqxSlider>
                </td>
            </tr>
            <tr>
                <td>
                    Position:
                    <table>
                        <tr>
                            <td>
                                <JqxRadioButton style="margin-left: 10px" @change="btnLeftOnChange($event)"
                                                :width="60" :height="25" :groupName="'valueAxis'">
                                    Left
                                </JqxRadioButton>
                            </td>
                            <td>
                                <JqxRadioButton style="margin-left: 10px" @change="btnRightOnChange($event)"
                                                :width="62" :height="25" :checked="true" :groupName="'valueAxis'">
                                    Right
                                </JqxRadioButton>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    Position:
                    <table>
                        <tr>
                            <td>
                                <JqxRadioButton style="margin-left: 10px" @change="btnTopOnChange($event)"
                                                :width="60" :height="25" :groupName="'xAxis'">
                                    Top
                                </JqxRadioButton>
                            </td>
                            <td>
                                <JqxRadioButton style="margin-left: 10px" @change="btnBottomOnChange($event)"
                                                :width="80" :height="25" :checked="true" :groupName="'xAxis'">
                                    Bottom
                                </JqxRadioButton>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <JqxCheckBox :height="25" @change="btnValueAxisFlipOnChange($event)">
                        Flip valueAxis Positions
                    </JqxCheckBox>
                </td>
                <td>
                    <JqxCheckBox :height="25" @change="btnXAxisFlipOnChange($event)">
                        Flip xAxis Positions
                    </JqxCheckBox>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxSlider from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue';
    import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

    export default {
        components: {
            JqxChart,
            JqxSlider,
            JqxRadioButton,
            JqxCheckBox
        },
        data: function () {
            return {
                data: [
                    { year: 2004, price: 0.1437 },
                    { year: 2005, price: 0.1470 },
                    { year: 2006, price: 0.1510 },
                    { year: 2007, price: 0.1605 },
                    { year: 2008, price: 0.1647 },
                    { year: 2009, price: 0.1736 },
                    { year: 2010, price: 0.1766 },
                    { year: 2011, price: 0.1902 },
                    { year: 2012, price: 0.1978 },
                    { year: 2013, price: 0.2113 },
                    { year: 2014, price: 0.2178 }
                ],
                padding: { left: 5, top: 5, right: 15, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    padding: { top: 0, bottom: 0 },
                    labels: { angle: 0 },
                    dataField: 'year',
                    displayText: 'Year',
                    valuesOnTicks: false,
                    gridLines: { color: '#CDCDCD' },
                    tickMarks: { color: '#CDCDCD' }
                },
                valueAxis: {
                    position: 'right',
                    padding: { left: 0, right: 0 },
                    title: { text: '<br><br>Price EUR / kWh' },
                    labels: {
                        visible: true,
                        angle: 0,
                        formatSettings: { decimalPlaces: 4, sufix: ' €' }
                    },
                    tickMarks: {
                        visible: true,
                        color: '#CDCDCD',
                        size: 5
                    },
                    gridLines: {
                        visible: true,
                        color: '#CDCDCD',
                    },
                    alternatingBackgroundColor: '#EFEFEF',
                    alternatingBackgroundColor2: '#CECECE',
                    alternatingBackgroundOpacity: 0.2
                },
                seriesGroups: [
                    {
                        type: 'stepline',
                        series: [
                            { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', showLabels: true, symbolType: 'circle' }
                        ]
                    }
                ]
            }
        },
        methods: {
            sliderValueAxisLeftPaddingOnChange: function (event) {
                this.$refs.myChart.valueAxis.padding.left = event.args.value;
                this.$refs.myChart.refresh();
            },
            sliderValueAxisRightPaddingOnChange: function (event) {
                this.$refs.myChart.valueAxis.padding.right = event.args.value;
                this.$refs.myChart.refresh();
            },
            sliderValueAxisAngleOnChange: function (event) {
                this.$refs.myChart.valueAxis.labels.angle = event.args.value;
                this.$refs.myChart.refresh();
            },
            sliderXAxisTopPaddingOnChange: function (event) {
                this.$refs.myChart.xAxis.padding.top = event.args.value;
                this.$refs.myChart.refresh();
            },
            sliderXAxisBottomPaddingOnChange: function (event) {
                this.$refs.myChart.xAxis.padding.bottom = event.args.value;
                this.$refs.myChart.refresh();
            },
            sliderXAxisAngleOnChange: function (event) {
                this.$refs.myChart.xAxis.labels.angle = event.args.value;
                this.$refs.myChart.refresh();
            },
            btnLeftOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myChart.valueAxis.position = 'left';
                    this.$refs.myChart.refresh();
                }
            },
            btnRightOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myChart.valueAxis.position = 'right';
                    this.$refs.myChart.refresh();
                }
            },
            btnTopOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myChart.xAxis.position = 'top';
                    this.$refs.myChart.refresh();
                }
            },
            btnBottomOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myChart.xAxis.position = 'bottom';
                    this.$refs.myChart.refresh();
                }
            },
            btnValueAxisFlipOnChange: function (event) {
                this.$refs.myChart.valueAxis.flip = event.args.checked;
                this.$refs.myChart.refresh();
            },
            btnXAxisFlipOnChange: function (event) {
                this.$refs.myChart.xAxis.flip = event.args.checked;
                this.$refs.myChart.refresh();
            }
        }
    }
</script>

<style>
</style>