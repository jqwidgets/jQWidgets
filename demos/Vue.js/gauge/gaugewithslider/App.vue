<template>
    <div style="position: relative; height: 380px">
        <JqxGauge ref="myGauge"
                  :animationDuration="1500"
                  :ranges="ranges" :cap="cap" :border="border"
                  :ticksMinor="ticksMinor" :ticksMajor="ticksMajor"
                  :labels="labels" :pointer="pointer">
        </JqxGauge>

        <JqxSlider ref="mySlider" style="position: absolute; top: 250px; left: 93px"
                   @change="mySliderOnChange()"
                   :width="180" :value="120" :min="0" :max="220"
                   :ticksFrequency="20" :mode="'fixed'" :showButtons="false">
        </JqxSlider>
    </div>
</template>

<script>
    import JqxGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgauge.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxGauge,
            JqxSlider
        },
        data: function () {
            return {
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 20, size: '10%' },
                labels: { position: 'outside', interval: 20 },
                cap: { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb' } },
                border: { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } },
                pointer: { style: { fill: '#2e79bb' }, width: 5 },
                ranges: [
                    { startValue: 0, endValue: 130, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
                    { startValue: 130, endValue: 180, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
                    { startValue: 180, endValue: 220, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0 }
                ]
            }


        },
        mounted: function () {
            this.$refs.myGauge.value = 120;
        },
        methods: {
            mySliderOnChange: function () {
                let val = this.$refs.mySlider.value;
                this.$refs.myGauge.value = val;
            }
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