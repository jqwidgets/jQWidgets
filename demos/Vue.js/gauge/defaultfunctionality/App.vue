<template>
    <div>
        <div style="float: left">
            <JqxGauge ref="myGauge" @valueChanging="onValueChanging($event)"
                      :ranges="ranges" :ticksMinor="ticksMinor" :ticksMajor="ticksMajor"
                      :value="0" :colorScheme="'scheme05'" :animationDuration="1200">
            </JqxGauge>

            <div ref="gaugeValue" class="gaugeValue"></div>
        </div>


        <JqxLinearGauge ref="myLinearGauge" style="margin-left: 60px; float: left;"
                        :width="100" :height="350" :max="60" :orientation="'vertical'"
                        :ticksMajor="ticksMajorLinear" :ticksMinor="ticksMinorLinear"
                        :pointer="{ size: '5%' }" :colorScheme="'scheme05'" :labels="labels"
                        :ranges="rangesLinear" :animationDuration="1500">
        </JqxLinearGauge>
    </div>
</template>

<script>
    import JqxGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgauge.vue";
    import JqxLinearGauge from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlineargauge.vue";

    export default {
        components: {
            JqxGauge,
            JqxLinearGauge
        },
        data: function () {
            return {
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '9%' },
                ranges: [
                    { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                    { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                    { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                    { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
                ],
                ticksMinorLinear: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
                ticksMajorLinear: { size: '10%', interval: 10 },
                labels: {
                    interval: 20,
                    formatValue: (value, position) => {
                        if (position === 'far') {
                            value = (9 / 5) * value + 32;
                            if (value === -76) {
                                return '°F';
                            }
                            return value + '°';
                        }
                        if (value === -60) {
                            return '°C';
                        }
                        return value + '°';
                    }
                },
                rangesLinear: [
                    { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
                    { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
                    { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
                ]
            }
        },
        mounted: function () {
            this.$refs.myGauge.value = 140;
            this.$refs.myLinearGauge.value = 40;
        },
        methods: {
            onValueChanging: function (event) {
                this.$refs.gaugeValue.innerHTML = Math.round(event.args.value) + ' kph';
            }
        }
    }
</script>

<style>
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
        top: 290px;
        left: 140px;
        font-family: Sans-Serif;
        text-align: center;
        font-size: 17px;
        width: 70px;
    }
</style>