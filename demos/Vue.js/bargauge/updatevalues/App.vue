<template>
    <div>
        <JqxBarGauge ref="myBarGauge" style="float: left"
                     :width="getWidth" :height="570" :relativeInnerRadius="0.5" :max="255"
                     :values="[187, 255, 170]" :startAngle="0" :endAngle="90"
                     :customColorScheme="customColorScheme" :colorScheme="'rgb'"
                     :title="title" :labels="labels">
        </JqxBarGauge>

        <div style="float: left">

            <span style="font-style: italic;">Red</span>

            <JqxSlider ref="redSlider" @change="updateValues()"
                       :theme="'artic'" :mode="'fixed'" :min="0" :max="255"
                       :ticksFrequency="25.5" :value="170" :step="25.5">
            </JqxSlider>

            <span style="font-style: italic;">Green</span>

            <JqxSlider ref="greenSlider" @change="updateValues()"
                       :theme="'artic'" :mode="'fixed'" :min="0" :max="255"
                       :ticksFrequency="25.5" :value="255" :step="25.5">
            </JqxSlider>

            <span style="font-style: italic;">Blue</span>

            <JqxSlider ref="blueSlider" @change="updateValues()"
                       :theme="'artic'" :mode="'fixed'" :min="0" :max="255"
                       :ticksFrequency="25.5" :value="187" :step="25.5">
            </JqxSlider>

        </div>
    </div>
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';
    import JqxSlider from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue';

    export default {
        components: {
            JqxBarGauge,
            JqxSlider
        },
        data: function () {
            return {
                getWidth: '90%',
                customColorScheme: {
                    name: 'rgb',
                    colors: ['#307DD7', '#89A54E', '#AA4643']
                },
                title: {
                    text: 'jqxBarGauge',
                    font: {
                        size: 40
                    },
                    verticalAlignment: 'top',
                    margin: 0,
                    subtitle: {
                        text: '( visualization of "RGB" color proportions )',
                        font: {
                            size: 20
                        }
                    }
                },
                labels: { precision: 0, indent: 10 }
            }
        },
        methods: {
            updateValues: function () {
                const red = this.$refs.redSlider.val();
                const green = this.$refs.greenSlider.val();
                const blue = this.$refs.blueSlider.val();
                this.$refs.myBarGauge.val([blue, green, red]);
            }
        }
    }
</script>

<style>
</style>