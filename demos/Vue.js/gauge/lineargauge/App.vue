<template>
    <div>
        <JqxLinearGauge ref="myLinearGauge" style="margin-left: 20px; float: left;"
                        :max="60" :value="-60" :pointer="pointer"
                        :colorScheme="'scheme05'" :orientation="'vertical'"
                        :labels="labels" :ticksMajor="ticksMajor"
                        :ticksMinor="ticksMinor" :ranges="ranges">
        </JqxLinearGauge>

        <div style="margin-left: 330px">
            <JqxExpander :width="280" :height="320" :toggleMode="'none'" :showArrow="false">
                <div>Options</div>
                <div class="demo-options">
                    <JqxCheckBox @change="isVerticalCheckboxOnChange($event)" :checked="true">Is Vertical</JqxCheckBox>
                    <br />
                    <div>
                        <table style="float: left; margin-left: 10px">
                            <tbody>
                                <tr>
                                    <td>Labels position:</td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="labelsNearRadioOnChecked()" :groupName="'labels-position'">Near</JqxRadioButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="labelsFarRadioOnChecked()" :groupName="'labels-position'">Far</JqxRadioButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="labelsBothRadioOnChecked()" :groupName="'labels-position'" :checked="true">Both</JqxRadioButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style="float: right; margin-right: 10px">
                            <tbody>
                                <tr>
                                    <td>Ticks position:</td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="ticksNearRadioOnChecked()" :groupName="'ticks-position'">Near</JqxRadioButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="ticksFarRadioOnChecked()" :groupName="'ticks-position'">Far</JqxRadioButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxRadioButton @checked="ticksBothRadioOnChecked()" :groupName="'ticks-position'" :checked="true">Both</JqxRadioButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="clear: both"></div>
                    </div>
                    <br />
                    <JqxCheckBox @change="showTicksCheckboxOnChange($event)" :checked="true">Show Ticks</JqxCheckBox>
                    <JqxCheckBox @change="showLabelsCheckboxOnChange($event)" :checked="true">Show Labels</JqxCheckBox>
                    <JqxCheckBox @change="showRangesCheckboxOnChange($event)" :checked="true">Show Ranges</JqxCheckBox>
                    <JqxCheckBox @change="showBackgroundCheckboxOnChange($event)" :checked="true">Show Background</JqxCheckBox>
                    <br />
                    <JqxButton style="margin-left: 90px; text-align: center" @click="showAnimationButtonOnClick()" :width="100" :height="20">Reset Value</JqxButton>
                </div>
            </JqxExpander>
        </div>
    </div>
</template>

<script>
    import JqxLinearGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlineargauge.vue";
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxLinearGauge,
            JqxExpander,
            JqxCheckBox,
            JqxButton,
            JqxRadioButton
        },
        data: function () {
            return {
                pointer: { size: '6%' },
                labels: { interval: 20 },
                ticksMinor: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
                ticksMajor: { size: '10%', interval: 10 },
                ranges: [
                    { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
                    { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
                    { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
                ]
            }
        },
        mounted: function () {
            this.$refs.myLinearGauge.value = 50;
        },
        methods: {
            isVerticalCheckboxOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myLinearGauge.width = '100px';
                    this.$refs.myLinearGauge.height = '300px';
                    this.$refs.myLinearGauge.orientation = 'vertical';
                } else {
                    this.$refs.myLinearGauge.width = '300px';
                    this.$refs.myLinearGauge.height = '100px';
                    this.$refs.myLinearGauge.orientation = 'horizontal';
                }
            },
            showTicksCheckboxOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myLinearGauge.ticksMajor = { visible: true, size: '10%', interval: 10 };
                    this.$refs.myLinearGauge.ticksMinor = { visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } };
                } else {
                    this.$refs.myLinearGauge.ticksMajor = { visible: false };
                    this.$refs.myLinearGauge.ticksMinor = { visible: false };
                }

            },
            showLabelsCheckboxOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myLinearGauge.labels = { visible: true, interval: 20 };
                } else {
                    this.$refs.myLinearGauge.labels = { visible: false };
                }
            },
            showRangesCheckboxOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myLinearGauge.showRanges = true;
                } else {
                    this.$refs.myLinearGauge.showRanges = false;
                }
            },
            showBackgroundCheckboxOnChange: function (event) {
                if (event.args.checked) {
                    this.$refs.myLinearGauge.background = { visible: true };
                } else {
                    this.$refs.myLinearGauge.background = { visible: false };
                }
            },
            labelsNearRadioOnChecked: function () {
                this.$refs.myLinearGauge.labels = { interval: 20, position: 'near' };
            },
            labelsFarRadioOnChecked: function () {
                this.$refs.myLinearGauge.labels = { interval: 20, position: 'far' };
            },
            labelsBothRadioOnChecked: function () {
                this.$refs.myLinearGauge.labels = { interval: 20, position: 'both' };
            },
            ticksNearRadioOnChecked: function () {
                this.$refs.myLinearGauge.ticksPosition = 'near';
            },
            ticksFarRadioOnChecked: function () {
                this.$refs.myLinearGauge.ticksPosition = 'far';
            },
            ticksBothRadioOnChecked: function () {
                this.$refs.myLinearGauge.ticksPosition = 'both';
            },
            showAnimationButtonOnClick: function () {
                this.$refs.myLinearGauge.animationDuration = 0;
                this.$refs.myLinearGauge.value = -60;
                this.$refs.myLinearGauge.animationDuration = 1000;
                this.$refs.myLinearGauge.value = 50;
            }
        }
    }
</script>

<style>
    .demo-options {
        margin-top: 5px;
    }
</style>