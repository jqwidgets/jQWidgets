<template>
        <JqxRangeSelector :width="getWidth" 
                          :height="100"
                          :min="1000" 
                          :max="10000"
                          :range="{ from: 3000, to: 5000 }"
                          :labelsFormat="'c0'"
                          :markersFormat="'c0'"
                          :minorTicksInterval="100"
                          :majorTicksInterval="1500">
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
        }
    }
</script>

<style>
</style>