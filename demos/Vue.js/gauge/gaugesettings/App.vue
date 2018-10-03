<template>
    <div style="width: 600px">
        <div style="float: left">
            <JqxGauge ref="myGauge"
                      :value="0" :colorScheme="'scheme04'" :animationDuration="1500"
                      :ranges="ranges" :ticksMinor="ticksMinor" :ticksMajor="ticksMajor"
                      :labels="labels" :styleProperty="style" :caption="caption" :cap="'radius: 0.04'">
            </JqxGauge>
        </div>

        <JqxExpander style="float: right"
                     :width="200" :showArrow="false" :toggleMode="'none'">
            <div>Options</div>
            <div>
                <ul style="list-style: none; padding: 0px; margin: 10px">
                    <li style="padding: 3px; font-family: Verdana; font-size: 12px">

                        <JqxCheckBox @change="showLabelsCheckboxOnChange($event)"
                                     :width="150" :checked="true">
                            Show Labels
                        </JqxCheckBox>

                        <ul style="list-style: none; padding: 0; margin-top: 10px; margin-left: 20px; font-family: Verdana; font-size: 12px">
                            <li>
                                <JqxRadioButton @change="insideRadioOnChange($event)"
                                                :width="150" :checked="true">
                                    Inside the Gauge
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton style="margin-top: 5px" @change="outsideRadioOnChange($event)"
                                                :width="150">
                                    Outside the Gauge
                                </JqxRadioButton>
                            </li>
                        </ul>
                    </li>
                    <li style="padding: 3px; font-family: Verdana; font-size: 12px">

                        <JqxCheckBox @change="showRangesCheckboxOnChange($event)"
                                     :width="150" :checked="true">
                            Show Ranges
                        </JqxCheckBox>

                    </li>
                    <li style="padding: 3px; font-family: Verdana; font-size: 12px">

                        <JqxCheckBox @change="showBorderCheckboxOnChange($event)"
                                     :width="150" :checked="true">
                            Show Border
                        </JqxCheckBox>

                    </li>
                </ul>
            </div>
        </JqxExpander>
    </div>
</template>

<script>
    import JqxGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgauge.vue";
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxGauge,
            JqxExpander,
            JqxCheckBox,
            JqxRadioButton
        },
        beforeCreate: function () {

            this.ticksMinor = { interval: 5, size: '5%' };

            this.ticksMajor = { interval: 10, size: '10%' };

            this.labels = { visible: true, position: 'inside' };

            this.style = { stroke: '#ffffff', 'stroke-width': '1px', fill: '#eeeee' };

            this.caption = { offset: [0, -25], value: 'jQWidgets', position: 'bottom' };

            this.ranges =
                [
                    { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                    { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                    { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                    { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
                ];

            this.showLabelsCheckboxOnChange = (event) => {
                this.labels.visible = event.args.checked;
                this.$refs.myGauge.labels = this.labels;
            };

            this.showRangesCheckboxOnChange = (event) => {
                this.$refs.myGauge.showRanges = event.args.checked;
            };

            this.showBorderCheckboxOnChange = (event) => {
                this.$refs.myGauge.border = { visible: event.args.checked };
            };

            this.insideRadioOnChange = (event) => {
                if(event.args.checked) {
                    this.labels.position = 'inside';
                    this.$refs.myGauge.labels = this.labels;
                }
            };

            this.outsideRadioOnChange = (event) => {
                if(event.args.checked) {
                    this.labels.position = 'outside';
                    this.$refs.myGauge.labels = this.labels;
                }
            };   
        },
        mounted: function () {
            this.$refs.myGauge.value = 220;
        }
    }
</script>

<style>
    body, html {
        height: 100%;
    }

    .gaugeValue {
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #fafafa), color-stop(100%, #f3f3f3));
        background-image: -webkit-linear-gradient(#fafafa, #f3f3f3);
        background-image: -moz-linear-gradient(#fafafa, #f3f3f3);
        background-image: -o-linear-gradient(#fafafa, #f3f3f3);
        background-image: linear-gradient(#fafafa, #f3f3f3);
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        -webkit-box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
        padding: 10px;
        position: absolute;
        top: 235px;
        left: 132px;
        font-family: Sans-Serif;
        text-align: center;
        font-size: 17px;
        width: 70px;
    }
</style>