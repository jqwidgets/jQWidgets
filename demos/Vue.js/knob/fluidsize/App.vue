<template>
    <JqxKnob ref="myKnob" 
        :width="'75%'" :height="'75%'" :value="60" :min="0" :max="100" :startAngle="120"
        :endAngle="480" :snapToStep="true" :rotation="'clockwise'"
        :marks="marks" :labels="labels" :progressBar="progressBar" :pointer="pointer">
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
                    stroke: '#dfe3e9', strokeWidth: 3,
                    fill: {
                        color: '#fefefe', gradientType: "linear",
                        gradientStops: [[0, 1], [50, 0.9], [100, 1]]
                    }
                },
                marks: {
                    colorRemaining: { color: 'grey', border: 'grey' },
                    colorProgress: { color: '#00a4e1', border: '#00a4e1' },
                    type: 'line',
                    offset: '71%',
                    thickness: 3,
                    size: '6%',
                    majorSize: '9%',
                    majorInterval: 10,
                    minorInterval: 2
                },
                labels: {
                    offset: '88%',
                    step: 10,
                    visible: true
                },
                progressBar: {
                    style: { fill: '#00a4e1', stroke: 'grey' },
                    size: '9%',
                    offset: '60%',
                    background: { fill: 'grey', stroke: 'grey' }
                },
                pointer: {
                    type: 'arrow',
                    style: { fill: '#00a4e1', stroke: 'grey' },
                    size: '59%',
                    offset: '49%',
                    thickness: 20
                }
            }
        },
        mounted: function () {
            this.$refs.myKnob.style = this.style;
        }
    }
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
