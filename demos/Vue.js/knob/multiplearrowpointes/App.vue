<template>
    <JqxKnob :value="[40, 80]" :min="0" :max="100" :startAngle="120"
             :endAngle="480" :rotation="'clockwise'" :snapToStep="true" :labels="labels"
             :marks="marks" :progressBar="progressBar" :pointer="pointer" :spinner="spinner"
             :dragStartAngle="120" :dragEndAngle="420">
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
                    colorRemaining: { color: '#373636', border: '#373636' },
                    colorProgress: { color: '#373636', border: '#373636' },
                    type: 'line',
                    offset: '71%',
                    thickness: 1,
                    size: '6%',
                    majorSize: '9%',
                    majorInterval: 10,
                    minorInterval: 2
                },
                labels: {
                    offset: '88%',
                    step: 10,
                    visible: true,
                    formatFunction: (label) => {
                        if (label == 0)
                            return 'Min';
                        if (label == 100)
                            return 'Max';
                        return label;
                    }
                },
                progressBar: {
                    size: '20%',
                    offset: '50%',
                    innerRadius: '50%',
                    outerRadius: '70%',
                    style: [
                        { stroke: '#285a83', strokeWidth: 1, fill: { color: '#285a83', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.5], [100, 1]] } },
                        { stroke: '#285a83', strokeWidth: 1, fill: { color: '#285a83', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.5], [100, 1]] } }
                    ],
                    background: {
                        stroke: '#ff6126', strokeWidth: 1, fill: { color: '#ff6126', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.5], [100, 1]] }
                    }
                },
                pointer: [
                    {
                        type: 'arrow', style: { fill: '#ff6126', stroke: '#ff6126' },
                        size: '50%', offset: '30%', thickness: 30,
                    },
                    {
                        type: 'arrow', style: { fill: '#ff6126', stroke: '#ff6126' },
                        size: '50%', offset: '30%', thickness: 30
                    }
                ],
                spinner: {
                    size: '20%',
                    offset: '30%',
                    innerRadius: '0%',
                    outerRadius: '30%',
                    style: {
                        stroke: '#285a83', strokeWidth: 1, fill: { color: '#285a83', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.5], [100, 1]] }
                    }
                }
            }
        }
    }
</script>

<style>
</style>
