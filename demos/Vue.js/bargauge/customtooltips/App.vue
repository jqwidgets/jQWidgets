<template>
    <JqxBarGauge :width="getWidth" :height="570" :max="90" :labels="labels"
                 :values="players" :baseValue="33" :startAngle="180" :endAngle="-65"
                 :title="title" :colorScheme="'scheme04'" :tooltip="tooltip">
    </JqxBarGauge>
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';

    export default {
        components: {
            JqxBarGauge,
        },
        data: function () {
            return {
                getWidth: '90%',
                players: [25, 46, 6, 55, 14, 22, 57, 40, 87, 20],
                title: { text: 'Ranking', subtitle: '(boundary - 33 points)' },
                labels: {
                    formatFunction: (value) => {
                        let realVal = parseInt(value);
                        return realVal + ' pts';
                    },
                    font: { size: 12 },
                    indent: 10
                },
                tooltip: {
                    classname: 'myTooltip',
                    formatFunction: (value) => {
                        let realVal = parseInt(value);
                        let player = this.players.indexOf(realVal) + 1;
                        return ('Player ' + player + ': ' + realVal + ' points');
                    },
                    visible: true
                }
            }
        }
    }
</script>

<style>
    .myTooltip {
        padding: 10px;
        font-size: 1.2em;
        border-style: dashed;
        border-width: 3px;
        border-radius: 4px;
    }
</style>