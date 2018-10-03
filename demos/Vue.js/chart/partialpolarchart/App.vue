<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Sales volume and revenue by city'"
                  :description="'(revenue in thousands)'"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="dataset" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>

        <table style="width: 850px">
            <tbody>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to change start angle:</p>
                        <JqxSlider @change="sliderStartAngle($event)"
                                   :width="240" :min="0" :max="360" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'">
                        </JqxSlider>
                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to change end angle:</p>
                        <JqxSlider @change="sliderEndAngle($event)"
                                   :width="240" :min="0" :max="360" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'" :value="90">
                        </JqxSlider>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 50px">
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to rotate:</p>
                        <JqxSlider @change="sliderRotate($event)"
                                   :width="240" :min="0" :max="360" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'">
                        </JqxSlider>
                    </td>
                    <td>
                        <p style="font-family: Verdana; font-size: 12px">Move the slider to change the radius:</p>
                        <JqxSlider @change="sliderRadius($event)"
                                   :width="240" :min="80" :max="140" :step="1"
                                   :ticksFrequency="20" :mode="'fixed'" :value="120">
                        </JqxSlider>
                    </td>
                </tr>
                <tr style="height: 15px"></tr>
                <tr>
                    <td style="padding-left: 50px">
                        <JqxCheckBox @change="checkBoxTicksBetween($event)"
                                     :width="220" :height="25">
                            Tick marks between values
                        </JqxCheckBox>
                    </td>
                    <td>
                        <JqxCheckBox @change="checkBoxAutoRotate($event)"
                                     :width="220" :height="25" :checked="true">
                            Auto rotate axis text
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
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxChart,
            JqxSlider,
            JqxCheckBox
        },
        data: function () {
            return {
                dataset: [
                    { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
                    { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
                    { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
                    { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
                    { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
                    { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
                ],
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
                xAxis: {
                    dataField: 'City',
                    valuesOnTicks: true,
                    labels: { autoRotate: true }
                },
                valueAxis: {
                    labels: {
                        formatSettings: { decimalPlaces: 0 },
                        autoRotate: true
                    }
                },
                seriesGroups: [
                    {
                        polar: true,
                        endAngle: 270,
                        radius: 120,
                        type: 'line',
                        series: [
                            { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                            { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                        ]
                    }
                ]
            }
        },
        methods: {
            sliderStartAngle: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].startAngle = value;
                this.$refs.myChart.update();
            },
            sliderEndAngle: function (event) {
                let value = 360 - event.args.value;
                this.$refs.myChart.seriesGroups[0].endAngle = value;
                this.$refs.myChart.update();
            },
            sliderRotate: function (event) {
                let value = event.args.value;
                let endAngle = this.$refs.myChart.seriesGroups[0].endAngle;
                if (isNaN(endAngle))
                    endAngle = 360;
                let startAngle = this.$refs.myChart.seriesGroups[0].startAngle;
                if (isNaN(startAngle))
                    startAngle = 0;
                let diff = endAngle - startAngle;
                this.$refs.myChart.seriesGroups[0].startAngle = value;
                this.$refs.myChart.seriesGroups[0].endAngle = value + diff;
                this.$refs.myChart.update();
            },
            sliderRadius: function (event) {
                let value = event.args.value;
                this.$refs.myChart.seriesGroups[0].radius = value;
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