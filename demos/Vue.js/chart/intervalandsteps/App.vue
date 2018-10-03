<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Chart unit interval and steps example'"
                  :description="''"
                  :showLegend="true" :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="data" :xAxis="xAxis" :enableCrosshairs="false"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
        </JqxChart>

        <table>
            <tbody>
                <tr>
                    <td>
                        <table>
                            <tbody>
                                <tr style="height: 50px"><td colspan='2'><b>xAxis Settings:</b></td></tr>
                                <tr>
                                    <td>Labels step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputxAxisLabelsStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="2">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grid lines step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputxAxisGridLinesStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tick marks step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputxAxisTickMarksStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Unit interval</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputxAxisUnitIntervalOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr style="height: 40px">
                                    <td colspan='2'>
                                        <JqxCheckBox :width="200" :height="25" v-on:change="btnValuesBetweenTicksOnChange($event)">
                                            Value's between ticks
                                        </JqxCheckBox>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table style="padding-left: 100px">
                            <tbody>
                                <tr style="height: 50px"><td colspan='2'><b>valueAxis Settings:</b></td></tr>
                                <tr>
                                    <td>Labels step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputvalueAxisLabelsStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grid lines step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputvalueAxisGridLinesStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tick marks step</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputvalueAxisTickMarksStepOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="1">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Unit interval</td>
                                    <td>
                                        <JqxNumberInput v-on:valueChanged="inputvalueAxisUnitIntervalOnValueChange($event)"
                                                        :width="50" :height="25" :min="1" :max="10"
                                                        :inputMode="'simple'" :decimalDigits="0"
                                                        :digits="2" :spinButtons="true" :value="5">
                                        </JqxNumberInput>
                                    </td>
                                </tr>
                                <tr style="height: 40px">
                                    <td colspan='2'>
                                        <JqxCheckBox :width="200" :height="25" v-on:change="btnvalueAxisValuesBetweenTicksOnChange($event)">
                                            Value's between ticks
                                        </JqxCheckBox>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxChart,
            JqxNumberInput,
            JqxCheckBox
        },
        data: function () {
            return {
                data: [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11],
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    unitInterval: 1,
                    gridLines: { step: 1 },
                    tickMarks: { step: 1 },
                    labels: { step: 2 }
                },
                valueAxis: {
                    title: { text: 'Value<br>' },
                    unitInterval: 5,
                    gridLines: { step: 1 },
                    tickMarks: { step: 1 },
                    labels: { step: 1 },
                    minValue: 0
                },
                seriesGroups: [
                    {
                        type: 'line',
                        series:
                            [
                                { displayText: 'value', opacity: 0.7 }
                            ]
                    }
                ]
            }
        },
        methods: {
            inputxAxisLabelsStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.xAxis.labels.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputxAxisGridLinesStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.xAxis.gridLines.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputxAxisTickMarksStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.xAxis.tickMarks.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputxAxisUnitIntervalOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.xAxis.unitInterval = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputvalueAxisLabelsStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.valueAxis.labels.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputvalueAxisGridLinesStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.valueAxis.gridLines.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputvalueAxisTickMarksStepOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.valueAxis.tickMarks.step = parseInt(value);
                this.$refs.myChart.refresh();
            },
            inputvalueAxisUnitIntervalOnValueChange: function (event) {
                let value = event.args.value;
                this.$refs.myChart.valueAxis.unitInterval = parseInt(value);
                this.$refs.myChart.refresh();
            },
            btnValuesBetweenTicksOnChange: function (event) {
                this.$refs.myChart.xAxis.valuesOnTicks = !event.args.checked;
                this.$refs.myChart.refresh();
            },
            btnvalueAxisValuesBetweenTicksOnChange: function (event) {
                this.$refs.myChart.valueAxis.valuesOnTicks = !event.args.checked;
                this.$refs.myChart.refresh();
            }
        }
    };
</script>

<style>
</style>