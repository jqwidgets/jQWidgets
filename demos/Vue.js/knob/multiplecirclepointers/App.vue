<template>
    <div>
        <JqxKnob @change="myKnobOnChange($event)"
                 :value="[60, 80]" :min="0" :max="100" :startAngle="150"
                 :endAngle="510" :rotation="'clockwise'" :snapToStep="true"
                 :styleProperty="{ fill: '#ebeced' }" :labels="labels" :changing="changing"
                 :marks="marks" :progressBar="progressBar" :pointer="pointer" :spinner="spinner">
        </JqxKnob>

        <br /><br />

        <div ref="myLog"></div>
    </div>
</template>
<script>
    import JqxKnob from "jqwidgets-scripts/jqwidgets-vue/vue_jqxknob.vue";

    export default {
        components: {
            JqxKnob
        },
        data: function () {
            return {
                marks: {
                    colorRemaining: '#333',
                    colorProgress: '#66707e',
                    style: 'line',
                    offset: '71%',
                    thickness: 1,
                    size: '6%',
                    majorSize: '9%',
                    majorInterval: 10,
                    minorInterval: 2
                },
                labels: {
                    offset: '88%',
                    step: 10
                },
                progressBar: {
                    style: [{ fill: '#66707e', stroke: '#66707e', strokeWidth: 0 },
                    { fill: '#66707e', stroke: '#66707e', strokeWidth: 0 }],
                    size: '9%',
                    offset: '58%',
                    background: { fill: '#a2da39', stroke: '#a2da39', strokeWidth: 0 }
                },
                pointer: [
                    { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 },
                    { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 }
                ],
                spinner: {
                    style: { fill: '#66707e', stroke: '#66707e' },
                    innerRadius: '0%', // specifies the inner Radius of the dial
                    outerRadius: '58%', // specifies the outer Radius of the dial
                    marks: {
                        colorRemaining: '#a2da39',
                        colorProgress: '#a2da39',
                        type: 'circle',
                        offset: '55%',
                        thickness: 3,
                        size: '1%',
                        majorSize: '1%',
                        majorInterval: 10,
                        minorInterval: 10
                    }
                }
            }
        },
        methods: {
            changing: function (oldValues, newValues) {
                let range = newValues[1] - newValues[0];
                if (range < 10)
                    return false;
                if (range > 90)
                    return false;
            },
            myKnobOnChange: function(event) {
                this.$refs.myLog.innerHTML = 'Values: ' + event.args.value;
            }
        }
    }
</script>

<style>
</style>
