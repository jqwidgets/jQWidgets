<template>
        <JqxRangeSelector :width="getWidth" 
                          :height="100"
                          :min="-1000" 
                          :max="-100"
                          :range="{ from: -500, to: -300 }"
                          :minorTicksInterval="10"
                          :majorTicksInterval="100">
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