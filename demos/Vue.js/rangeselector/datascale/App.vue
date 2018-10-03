<template>
    <JqxRangeSelector 
                  :width="getWidth"
                  :height="100"
                  :min="min"
                  :max="max"
                  :range="range"
                  :labelsOnTicks="false"
                  :majorTicksInterval="'month'"
                  :minorTicksInterval="'day'"
                  :labelsFormat="'MMM'"
                  :markersFormat="'d'">
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
                getWidth: '90%',
                min: new Date(2014, 0, 1),
                max: new Date(2014, 11, 31),
                range: { from: new Date(2014, 3, 15), to: new Date(2014, 7, 29) }
            }
        }
    }
</script>

<style>
</style>