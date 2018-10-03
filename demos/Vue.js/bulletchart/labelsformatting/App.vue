<template>
    <JqxBulletChart :width="getWidth" :height="500" :barSize="'35%'" :labelsFormat="'c'"
                    :title="'Temperature in Boston, Mass.'" :description="'on 28 May'"
                    :showToolTip="true" :labelsFormatFunction="labelsFormatFunction"
                    :tooltipFormatFunction="tooltipFormatFunction" :ticks="ticks"
                    :ranges="ranges" :pointer="pointer" :target="target" :orientation="'vertical'">
    </JqxBulletChart>
</template>

<script>
    import JqxBulletChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbulletchart.vue';

    export default {
        components: {
            JqxBulletChart
        },
        data: function () {
            return {
                getWidth: '90%',
                ranges: [
                    { startValue: 0, endValue: 10, color: '#0099FF', opacity: 1 },
                    { startValue: 10, endValue: 15, color: '#006600', opacity: 1 },
                    { startValue: 15, endValue: 20, color: '#FF6600', opacity: 1 },
                    { startValue: 20, endValue: 25, color: '#FF4526', opacity: 1 }
                ],
                pointer: { value: 11, size: '25%', color: '#181818' },
                target: { value: 15, size: 4, color: '#181818' },
                ticks: { position: 'both', interval: 5, size: 10 },
            }
        },
        methods: {
            labelsFormatFunction: function (value, position) {
                let labelsColor;
                if (value < 10) {
                    labelsColor = '#0099FF';
                }
                else if (value < 15) {
                    labelsColor = '#006600';
                }
                else if (value < 20) {
                    labelsColor = '#FF6600';
                }
                else {
                    labelsColor = '#FF4526';
                }
                if (position == 'near') {
                    return '<span style="color: ' + labelsColor + ';">' + (value * 1.8 + 32) + '°F</span>';
                }
                else {
                    return value + '°C';
                }
            },
            tooltipFormatFunction: function (value, target) {
                return '<div>Temperature on May 28: <strong>' +
                    (value * 1.8 + 32) + '°F</strong> (' + value +
                    '°C)</div><div>Average temperature in May: <strong>' +
                    (target * 1.8 + 32) + '°F</strong> (' + target + '°C)</div>'
            }
        }
    }
</script>

<style>
</style>