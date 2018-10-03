<template>
    <JqxRangeSelector :width="getWidth" :height="100" :min="0" :max="200"
                      :range="{from: 10, to: 50}" :labelsOnTicks="false"
                      :majorTicksInterval="20" :markersFormatFunction="markersFormatFunction">
    
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
            markersFormatFunction: function (value, position) {
                let side;
                if (position == "left") {
                    side = "From";
                } else if (position == "right") {
                    side = "To";
                };
                return side + ": <span>" + value.toFixed(0) + "</span>";
            }
        }
    }
</script>

<style>
</style>