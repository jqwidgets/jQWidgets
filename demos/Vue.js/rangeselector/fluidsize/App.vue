<template>
    <div>
        <JqxRangeSelector ref="myRangeSelector"
                          :width="'80%'" :height="100"
                          :min="0" :max="100"
                          :range="{ from: 10, to: 50 }" 
                          :majorTicksInterval="10" 
                          :minorTicksInterval="1">
            <div id="rangeSelectorContent"></div>
        </JqxRangeSelector>

        <div style="margin-left:30px; margin-top: 50px;">
            <JqxButton @click="onClickSet()">
                Set range
            </JqxButton>
            <JqxButton @click="onClickGet()">
                Get range
            </JqxButton>
        </div>
    </div>
</template>

<script>
    import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrangeselector.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxRangeSelector,
            JqxButton
        },
        methods: {
            onClickGet: function() {
                // Get Range.
                let range = this.$refs.myRangeSelector.getRange();
                alert("The selected range is from " + range.from + " to " + range.to);
            },
            onClickSet: function () {
                // Set Range.
                this.$refs.myRangeSelector.setRange(30, 70);
            }
        }
    }
</script>

<style>
    .jqx-button {
        width: fit-content;
        display: inline-block;
        margin-right: 5px;
    }
</style>