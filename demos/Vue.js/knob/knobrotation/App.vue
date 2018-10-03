<template>
    <JqxKnob :value="60" :min="0" :max="100" :startAngle="120"
             :endAngle="480" :snapToStep="true" :rotation="'counterclockwise'"
             :marks="marks" :labels="labels" :progressBar="progressBar" :pointer="pointer"
             :spinner="spinner" :dial="dial" :dragStartAngle="120" :dragEndAngle="420">
    </JqxKnob>

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
                    colorRemaining: '#fff',
                    colorProgress: '#fff',
                    type: 'line',
                    offset: '75%',
                    thickness: 2,
                    size: '15%',
                    majorSize: '15%',
                    drawAboveProgressBar: true,
                    majorInterval: 10,
                    minorInterval: 2
                },
                labels: {
                    offset: '50%',
                    rotate: true,
                    step: 10
                },
                progressBar: {
                    size: '15%',
                    offset: '75%',
                    style: {
                        stroke: '#a2da39', strokeWidth: 1, fill: '#a2da39'
                    },
                    background: {
                        stroke: '#d1d2d4', strokeWidth: 1, fill: '#d1d2d4'
                    }
                },
                pointer: {
                    type: 'arrow',
                    style: { fill: '#a2da39' },
                    size: '55%',
                    thickness: 5,
                    offset: '0%'
                },
                spinner: {
                    size: '70%',
                    innerRadius: '60%', // specifies the inner Radius of the dial
                    outerRadius: '65%', // specifies the outer Radius of the dial
                    marks: {
                        colorRemaining: '#d5d3d4',
                        colorProgress: '#d5d3d4',
                        type: 'line',
                        offset: '60%',
                        thickness: 1,
                        size: '5%',
                        majorSize: '5%',
                        majorInterval: 10,
                        minorInterval: 2
                    },
                    style: {
                        stroke: '#d5d3d4', strokeWidth: 1, fill: { color: '#dfe3e9', gradientType: 'linear', gradientStops: [[0, 0.5], [50, 0.5], [100, 0.5]] }
                    }
                },
                dial: {
                    innerRadius: '0%', // specifies the inner Radius of the dial
                    outerRadius: '65%', // specifies the outer Radius of the dial
                    style: {
                        stroke: '#ff0000', strokeWidth: 1, fill: { color: '#66707e', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.4], [100, 1]] }
                    }
                }
            }
        }
    }
</script>

<style>
    .jqx-knob-label {
        fill: #a2da39;
        font-size: 14px;
        font-weight: bold;
    }
</style>
