<template>
    <JqxRangeSelector 
                  :width="getWidth"
                  :height="90"
                  :min="0"
                  :max="10"
                  :range="{ from: 2, to: 5 }"
                  :labelsOnTicks="false"
                  :minorTicksInterval="0.1"
                  :majorTicksInterval="2.5"
                  :labelsFormatFunction="formatFunction"
                  :markersFormatFunction="formatFunction">
    </JqxRangeSelector>
</template>

<script>
    import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrangeselector.vue';

    export default {
        components: {
            JqxRangeSelector
        },
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        methods: {
            formatFunction: function (value) {
                return jqx.dataFormat.formatNumber(value, 'f1') + " mm";
            }
        }
    }
</script>

<style>
</style>