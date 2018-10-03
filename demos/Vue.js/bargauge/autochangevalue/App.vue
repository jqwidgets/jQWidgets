<template>
    <JqxBarGauge ref="myBarGauge" @drawEnd="onDrawEnd()"
                 :width="getWidth" :height="600" :relativeInnerRadius="0.6"
                 :values="[25]" :formatFunction="formatFunction">
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
                getWidth: '90%'
            }
        },
        methods: {
            formatFunction: function (value, index, color) {
                let barGaugePalette = ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'];

                if (value < 20) {
                    return barGaugePalette[0];
                }
                if (value < 40) {
                    return barGaugePalette[1];
                }
                if (value < 60) {
                    return barGaugePalette[2];
                }
                if (value < 80) {
                    return barGaugePalette[3];
                }
                if (value <= 100) {
                    return barGaugePalette[4];
                }
            },
            onDrawEnd: function () {
                let values = [this.getRandomInt(1, 99)];
                setTimeout(() => {
                    this.$refs.myBarGauge.val(values);
                }, 1000);
            },
            getRandomInt: function (min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    }
</script>

<style scoped>
</style>