<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Website audience acquision by source'"
                  :description="'Month over month comparison'"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
        </JqxChart>

        <table style="width: 850px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to rotate:</p>

                        <JqxSlider @change="sliderStartAngle($event)"
                                   :width="240" :min="0" :max="360" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'">
                        </JqxSlider>

                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Select the series type:</p>

                        <JqxDropDownList @change="dropDownListSeries($event)"
                                         :width="200" :height="25" :source="seriesList"
                                         :selectedIndex="1" :dropDownHeight="100">
                        </JqxDropDownList>

                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to change the radius:</p>

                        <JqxSlider @change="sliderRadius($event)"
                                   :width="240" :min="80" :max="140" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'" :value="120">
                        </JqxSlider>

                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Select color scheme:</p>

                        <JqxDropDownList @change="dropDownListColor($event)"
                                         :width="200" :height="25" :source="colorsSchemesList"
                                         :selectedIndex="2" :dropDownHeight="100">
                        </JqxDropDownList>

                    </td>
                </tr>
                <tr style="height: 15px"></tr>
                <tr>
                    <td style="padding-left: 50px">
                        <JqxCheckBox @change="checkBoxAutoRotate($event)"
                                     :width="220" :height="25">
                            Auto-rotate labels
                        </JqxCheckBox>
                    </td>
                    <td>
                        <JqxCheckBox @change="checkBoxTicksBetween($event)"
                                     :width="220" :height="25">
                            Ticks between values
                        </JqxCheckBox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxChart,
            JqxSlider,
            JqxDropDownList,
            JqxCheckBox
        },
        data: function () {
            return {
                data: [
                    {
                        type: 'Organic Search',
                        month1: 1725090,
                        month2: 3136190
                    },
                    {
                        type: 'Paid Search',
                        month1: 925090,
                        month2: 2136190
                    },
                    {
                        type: 'Direct',
                        month1: 425090,
                        month2: 936190
                    },
                    {
                        type: 'Referral',
                        month1: 1250900,
                        month2: 2536190
                    },
                    {
                        type: 'Twitter',
                        month1: 350900,
                        month2: 681900
                    },
                    {
                        type: 'Facebook',
                        month1: 381900,
                        month2: 831500
                    }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
                xAxis: {
                    dataField: 'type',
                    displayText: 'Traffic source',
                    valuesOnTicks: true,
                    labels: { autoRotate: false }
                },
                valueAxis: {
                    unitInterval: 1000000,
                    labels: {
                        formatSettings: { decimalPlaces: 0 },
                        formatFunction: (value, itemIndex, serieIndex, groupIndex) => {
                            return Math.round(value / 1000) + ' K';
                        }
                    }
                },
                seriesGroups: [
                    {
                        spider: true,
                        startAngle: 0,
                        endAngle: 360,
                        radius: 120,
                        type: 'spline',
                        series: [
                            { dataField: 'month1', displayText: 'January 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                            { dataField: 'month2', displayText: 'February 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                        ]
                    }
                ],
                colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
                seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']
            }
        },
        methods: {
            sliderStartAngle: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].startAngle = value;
                this.$refs.myChart.seriesGroups[0].endAngle = value + 360;
                this.$refs.myChart.update();
            },
            sliderRadius: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].radius = value;
                this.$refs.myChart.update();
            },
            dropDownListColor: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.colorScheme = value;
            },
            dropDownListSeries: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.seriesGroups[0].type = value;
                this.$refs.myChart.update();
            },
            checkBoxTicksBetween: function (event) {
                this.$refs.myChart.xAxis.valuesOnTicks = !event.args.checked;
                this.$refs.myChart.update();
            },
            checkBoxAutoRotate: function (event) {
                this.$refs.myChart.xAxis.labels.autoRotate = event.args.checked;
                this.$refs.myChart.valueAxis.labels.autoRotate = event.args.checked;
                this.$refs.myChart.update();
            }
        }
    };
</script>

<style>
</style>