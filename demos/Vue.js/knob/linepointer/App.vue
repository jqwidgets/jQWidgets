<template>
    <JqxKnob ref="myKnob" 
             :value="60" :min="0" :max="100" :startAngle="120"
             :endAngle="420" :rotation="'clockwise'" :labels="labels" 
             :marks="marks" :progressBar="progressBar" :pointer="pointer">
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
                style: {
                    stroke: '#dfe3e9',
                    strokeWidth: 3,
                    fill: { color: '#fefefe', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
                },
                marks: {
                    colorRemaining: '#333',
                    colorProgress: '#2db2e4',
                    type: 'circle',
                    offset: '75%',
                    thickness: 2,
                    size: '2%',
                    majorSize: '2%',
                    majorInterval: 10,
                    minorInterval: 2
                },
                labels: {
                    offset: '88%',
                    step: 5,
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
                    size: '70%',
                    offset: '0%'
                },
                pointer: {
                    type: 'line',
                    thickness: 4,
                    style: { fill: '#00a4e1', stroke: '#00a4e1' },
                    size: '70%',
                    offset: '0%'
                }
            }
        },
        mounted: function () {
            this.$refs.myKnob.style = this.style;
        }
    }
</script>

<style>
</style>
