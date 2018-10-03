<template>
    <JqxKnob ref="myKnob" @change="myKnobOnChange($event)"
             :value="60" :min="0" :max="100" :startAngle="150"
             :endAngle="510" :snapToStep="true" :rotation="'clockwise'" :styleProperty="style"
             :marks="marks" :labels="labels" :progressBar="progressBar" :pointer="pointer"
             :spinner="spinner" :dial="dial">
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
                    fill: {
                        color: '#fefefe', gradientType: 'linear',
                        gradientStops: [[0, 1], [50, 0.9], [100, 1]]
                    }
                },
                marks: {
                    colorRemaining: '#333',
                    colorProgress: '#333',
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
                    step: 10
                },
                progressBar: {
                    style: { fill: { color: '#00a644', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#00a644' },
                    background: { fill: { color: '#ff8b1e', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#ff8b1e' },
                    size: '9%',
                    offset: '60%'
                },
                pointer: {
                    type: 'circle',
                    style: { fill: '#ef6100', stroke: '#ef6100' },
                    size: '5%',
                    offset: '38%',
                    thickness: 20
                },
                spinner: {
                    style: { fill: { color: '#00a4e1', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#00a4e1' },
                    innerRadius: '45%', // specifies the inner Radius of the dial
                    outerRadius: '60%', // specifies the outer Radius of the dial
                    marks: {
                        colorRemaining: '#fff',
                        colorProgress: '#fff',
                        type: 'line',
                        offset: '46%',
                        thickness: 2,
                        size: '14%',
                        majorSize: '14%',
                        majorInterval: 10,
                        minorInterval: 10
                    }
                },
                dial: {
                    style: { fill: { color: '#dfe3e9', gradientType: 'linearHorizontal', gradientStops: [[0, 0.9], [50, 1], [100, 1]] }, stroke: '#dfe3e9' },
                    innerRadius: '0%', // specifies the inner Radius of the dial
                    outerRadius: '45%'
                }
            }
        },
        beforeCreate: function () {
            this.lastValue;
            this.newValue = 0;
            this.min = 0;
            this.max = 100;
        },
        methods: {
            myKnobOnChange: function(event) {
                this.lastValue = this.newValue;
                this.newValue = event.args.value;
                if (this.newValue >= this.min && this.newValue <= this.min + 10 && this.lastValue <= this.max && this.lastValue >= this.max - 10) {
                    this.min = this.max;
                    this.max += 100;
                    this.$refs.myKnob.setOptions({ value: this.max, max: this.max, min: this.min });
                } else if (this.newValue >= this.max - 10 && this.newValue <= this.max && this.lastValue >= this.min && this.lastValue <= this.min + 10) {
                    this.max = this.min;
                    this.min -= 100;
                    this.$refs.myKnob.setOptions({ value: this.min, min: this.min, max: this.max });
                }
            }
        }
    }
</script>

<style>
</style>
