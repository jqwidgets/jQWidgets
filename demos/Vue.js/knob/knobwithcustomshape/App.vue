<template>
    <JqxKnob :value="-100" :min="-100" :max="100" :step="'0.5'" :startAngle="120"
             :endAngle="480" :snapToStep="true" :rotation="'clockwise'"
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
                    colorRemaining: '#333',
                    colorProgress: '#17a25d',
                    offset: '75%',
                    thickness: 2,
                    size: '1%',
                    majorSize: '1%',
                    majorInterval: 10,
                    minorInterval: 5
                },
                labels: {
                    offset: '88%',
                    step: 20,
                    visible: true,
                    formatFunction: (label) => {
                        if (label == 0)
                            return 'Off';
                        if (label == -100)
                            return 'Min';
                        if (label == 100)
                            return 'Max';
                        return label;
                    }
                },
                progressBar: {
                    size: '70%',
                    offset: '0%'
                },
                pointer: {
                    type: 'arrow',
                    thickness: 25,
                    style: { fill: '#ff6126', stroke: '#333' },
                    size: '60%',
                    offset: '50%'
                },
                spinner: {
                    style: { fill: '#17a25d', stroke: '#17a25d' },
                    innerRadius: '65%', // specifies the inner Radius of the dial
                    outerRadius: '70%', // specifies the outer Radius of the dial
                    marks: {
                        colorRemaining: '#fff',
                        colorProgress: '#fff',
                        offset: '68%',
                        thickness: 4,
                        type: 'circle',
                        size: '5%',
                        majorSize: '5%',
                        majorInterval: 20,
                        minorInterval: 20
                    }
                },
                dial: {
                    style: { fill: '#17a25d', stroke: '#17a25d' },
                    innerRadius: '0%', // specifies the inner Radius of the dial
                    outerRadius: '50%' // specifies the outer Radius of the dial
                }
            }
        }
    }
</script>

<style>
</style>
