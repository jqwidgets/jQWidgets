<template>
    <div>
        <JqxRangeSelector ref="rangeSelector"
                          :width="500"
                          :height="100"
                          :min="min"
                          :max="max"
                          :range="range"
                          :majorTicksInterval="'week'"
                          :minorTicksInterval="'day'"
                          :labelsFormat="'dd'"
                          :markersFormat="'d'"
                          :showGroupLabels="true">
            <div id="jqxRangeSelectorContent">
                <img id="backgroundImage" />
            </div>
        </JqxRangeSelector>
        <br />

        <JqxButton style="margin-left: 80px;" @click="onClickSubmit()" :width="120">
            Submit vacation
        </JqxButton>

        <div style="margin-left: 80px; margin-top: 10px;" ref="result"></div>
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
        data: function () {
            return {
                min: new Date(2014, 5, 1),
                max: new Date(2014, 9, 1),
                range: { from: new Date(2014, 5, 1), to: new Date(2014, 6, 29), min: { days: 7 } }
            }
        },
        methods: {
            onClickSubmit: function() {
                let months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                let range = this.$refs.rangeSelector.getRange();

                let from = new Date(range.from.toString());
                let to = new Date(range.to.toString());

                let fromDate = from.getDate();
                let fromMonth = from.getMonth();
                let toDate = to.getDate();
                let toMonth = to.getMonth();

                this.$refs.result.innerHTML = "Vacation period selected: from " + months[fromMonth] + " " + fromDate + " to " + months[toMonth] + " " + toDate;
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    #backgroundImage {
        width: 500px;
        height: 100px;
        background: url(../../../images/imageNature5.jpg) -100px -100px;
    }
</style>