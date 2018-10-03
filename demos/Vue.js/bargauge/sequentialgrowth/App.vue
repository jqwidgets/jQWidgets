<template>
    <JqxBarGauge ref="myBarGauge" @drawEnd="onDrawEnd($event)"
                 :width="getWidth" :height="650" :values="arrayOfValues"
                 :barSpacing="14" :labels="labels" :animationDuration="300"
                 :startAngle="180" :endAngle="-180" :colorScheme="'scheme02'"
                 :relativeInnerRadius="0.2">
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
                arrayOfValues: [20, 0, 0, 0],
                labels: { precision: 0, indent: 15, connectorWidth: 1 }
            }
        },
        beforeCreate: function () {

            this.arrayA = [20, 60, 0, 0];
            this.arrayB = [20, 60, 80, 0];
            this.arrayC = [20, 60, 80, 100];
            this.loop = 0;

        },
        methods: {
            onDrawEnd: function (event) {
                switch (this.loop) {
                    case 0:
                        this.$refs.myBarGauge.val(this.arrayA);
                        break;
                    case 1:
                        this.$refs.myBarGauge.val(this.arrayB);
                        break;
                    case 2:
                        this.$refs.myBarGauge.val(this.arrayC);
                        break;
                    default:
                        console.log('Render time is finished.');
                        break;
                }
                this.loop += 1;
            }
        }
    }
</script>

<style>
</style>