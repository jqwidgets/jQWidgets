<template>
    <div>
        <JqxChart ref="myChart" style="width: 850px; height: 500px"
                  :title="'Custom labels, grid lines and tick marks offsets'" :description="''"
                  :enableAnimations="false" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :valueAxis="valueAxis" :seriesGroups="seriesGroups">
        </JqxChart>

        <table>
            <tbody>
                <tr>
                    <td style="width: 300px"><b>xAxis settings</b></td>
                    <td style="width: 300px"><b>valueAxis settings</b></td>
                </tr>
                <tr>
                    <td>
                        <p>Label, tick marks & grid lines visibility:</p>
                        <JqxDropDownList ref="dropDownLabelsVisibility_xAxis" v-on:change="dropDownLabelsVisibility_xAxisOnChange($event)"
                                         :width="235" :height="25" :selectedIndex="0"
                                         :dropDownHeight="80" :source="visibilityOptions">
                        </JqxDropDownList>
                    </td>
                    <td>
                        <p>Label, tick marks & grid lines visibility:</p>
                        <JqxDropDownList ref="dropDownLabelsVisibility_valueAxis" v-on:change="dropDownLabelsVisibility_valueAxisOnChange($event)"
                                         :width="235" :height="25" :selectedIndex="0"
                                         :dropDownHeight="80" :source="visibilityOptions">
                        </JqxDropDownList>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Custom positions:</p>
                        <JqxInput ref="inputCustomPosition_xAxis" :width="50" :height="22"></JqxInput>
                        <JqxButton ref="btnAddCustomPosition_xAxis" v-on:click="btnAddCustomPosition_xAxisOnClick()">Add</JqxButton>
                        <JqxButton ref="btnRemoveCustomPosition_xAxis" v-on:click="btnRemoveCustomPosition_xAxisOnClick()">Remove</JqxButton>
                        <JqxListBox ref="listboxCustomPositions_xAxis" style="margin-top: 10px"
                                    :width="235" :height="80" :source="[10, 20]">
                        </JqxListBox>
                    </td>
                    <td>
                        <p>Custom positions:</p>
                        <JqxInput ref="inputCustomPosition_valueAxis" :width="50" :height="22"></JqxInput>
                        <JqxButton ref="btnAddCustomPosition_valueAxis" v-on:click="btnAddCustomPosition_valueAxisOnClick()">Add</JqxButton>
                        <JqxButton ref="btnRemoveCustomPosition_valueAxis" v-on:click="btnRemoveCustomPosition_valueAxisOnClick()">Remove</JqxButton>
                        <JqxListBox ref="listboxCustomPositions_valueAxis" style="margin-top: 10px"
                                    :width="235" :height="80" :source="[10, 20]">
                        </JqxListBox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';

    export default {
        components: {
            JqxChart,
            JqxDropDownList,
            JqxInput,
            JqxButton,
            JqxListBox
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
                visibilityOptions: [true, false, 'custom'],
                padding: { left: 5, top: 5, right: 15, bottom: 5 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'a',
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    labels: {
                        visible: true,
                        custom: [{ value: 10 }, { value: 20 }]
                    },
                    gridLines:
                        {
                            visible: true,
                            custom: [{ value: 10 }, { value: 20 }]
                        },
                    tickMarks:
                        {
                            visible: true,
                            custom: [{ value: 10 }, { value: 20 }]
                        },
                    flip: false
                },
                valueAxis: {
                    logarithmicScale: true,
                    logarithmicScaleBase: 2,
                    title: { text: '' },
                    labels: {
                        horizontalAlignment: 'right',
                        custom: [{ value: 10 }, { value: 20 }]
                    },
                    gridLines: {
                        custom: [{ value: 10 }, { value: 20 }]
                    },
                    tickMarks: {
                        custom: [{ value: 10 }, { value: 20 }]
                    },
                    flip: false
                },
                seriesGroups:
                    [
                        {
                            type: 'scatter',
                            series: [
                                { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                                { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                            ]
                        }
                    ]
            }
        },
        methods: {
            dropDownLabelsVisibility_xAxisOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.xAxis.labels.visible = value == 'false' ? false : value;
                this.$refs.myChart.xAxis.gridLines.visible = value == 'false' ? false : value;
                this.$refs.myChart.xAxis.tickMarks.visible = value == 'false' ? false : value;
                this.$refs.myChart.refresh();
            },
            dropDownLabelsVisibility_valueAxisOnChange: function (event) {
                let value = event.args.item.value;
                this.$refs.myChart.valueAxis.labels.visible = value == 'false' ? false : value;
                this.$refs.myChart.valueAxis.gridLines.visible = value == 'false' ? false : value;
                this.$refs.myChart.valueAxis.tickMarks.visible = value == 'false' ? false : value;
                this.$refs.myChart.refresh();
            },
            btnAddCustomPosition_xAxisOnClick: function () {
                let value = this.$refs.inputCustomPosition_xAxis.val();
                if (!isNaN(parseFloat(value))) {
                    this.$refs.listboxCustomPositions_xAxis.addItem(parseFloat(value));
                    let items = this.$refs.listboxCustomPositions_xAxis.getItems();
                    let customOffsets = [];
                    for (let i = 0; i < items.length; i++) {
                        customOffsets.push({ value: parseFloat(items[i].value) });
                    }
                    this.$refs.myChart.xAxis.labels.custom = customOffsets;
                    this.$refs.myChart.xAxis.gridLines.custom = customOffsets;
                    this.$refs.myChart.xAxis.tickMarks.custom = customOffsets;
                    this.$refs.myChart.refresh();
                }
            },
            btnAddCustomPosition_valueAxisOnClick: function () {
                let value = this.$refs.inputCustomPosition_valueAxis.val();
                if (!isNaN(parseFloat(value))) {
                    this.$refs.listboxCustomPositions_valueAxis.addItem(parseFloat(value));
                    let items = this.$refs.listboxCustomPositions_valueAxis.getItems();
                    let customOffsets = [];
                    for (let i = 0; i < items.length; i++) {
                        customOffsets.push({ value: parseFloat(items[i].value) });
                    }
                    this.$refs.myChart.valueAxis.labels.custom = customOffsets;
                    this.$refs.myChart.valueAxis.gridLines.custom = customOffsets;
                    this.$refs.myChart.valueAxis.tickMarks.custom = customOffsets;
                    this.$refs.myChart.refresh();
                }
            },
            btnRemoveCustomPosition_xAxisOnClick: function () {
                let idx = this.$refs.listboxCustomPositions_xAxis.selectedIndex;
                if (idx == -1)
                    return;
                this.$refs.listboxCustomPositions_xAxis.removeAt(idx);
                let items = this.$refs.listboxCustomPositions_xAxis.getItems();
                let customOffsets = [];
                for (let i = 0; i < items.length; i++) {
                    customOffsets.push({ value: parseFloat(items[i].value) });
                }
                this.$refs.myChart.xAxis.labels.custom = customOffsets;
                this.$refs.myChart.xAxis.gridLines.custom = customOffsets;
                this.$refs.myChart.xAxis.tickMarks.custom = customOffsets;
                this.$refs.myChart.refresh();
            },
            btnRemoveCustomPosition_valueAxisOnClick: function () {
                let idx = this.$refs.listboxCustomPositions_valueAxis.selectedIndex;
                if (idx == -1)
                    return;
                this.$refs.listboxCustomPositions_valueAxis.removeAt(idx);
                let items = this.$refs.listboxCustomPositions_valueAxis.getItems();
                let customOffsets = [];
                for (let i = 0; i < items.length; i++) {
                    customOffsets.push({ value: parseFloat(items[i].value) });
                }
                this.$refs.myChart.valueAxis.labels.custom = customOffsets;
                this.$refs.myChart.valueAxis.gridLines.custom = customOffsets;
                this.$refs.myChart.valueAxis.tickMarks.custom = customOffsets;
                this.$refs.myChart.refresh();
            }
        }
    }
</script>

<style>
    .jqx-button {
        width: fit-content;
        display: inline-block;
        margin: 2px;
    }
</style>