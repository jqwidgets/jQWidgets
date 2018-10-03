<template>
    <div>
        <h3>
            House Contract
        </h3>

        <JqxRadioButton @change="firstBtnOnChange($event)"
                        :width="250" :height="25" :checked="true">
            <span>12 Months Contract</span>
        </JqxRadioButton>

        <JqxRadioButton @change="secondBtnOnChange($event)"
                        :width="250" :height="25">
            <span>6 Months Contract</span>
        </JqxRadioButton>

        <JqxRadioButton @change="thirdBtnOnChange($event)"
                        :width="250" :height="25">
            <span>3 Months Contract</span>
        </JqxRadioButton>

        <JqxRadioButton :width="250" :height="25" :disabled="true">
            <span>1 Month Contract</span>
        </JqxRadioButton>

        <div style="margin-top: 10px">
            <div>Events:</div>
            <div ref="eventsLog"></div>
        </div>
    </div>
</template>

<script>
    import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue';
  
    export default {
        components: {
            JqxRadioButton
        },
        beforeCreate: function() {
            this.count = 0;
        },
        methods: {
            clearLog: function() {             
                let log = this.$refs.eventsLog;
                if (this.count >= 2) {
                    log.innerHTML = '';
                    this.count = 0;
                }
                this.count++;
            },
            firstBtnOnChange: function (event) {
                this.clearLog();
                let log = this.$refs.eventsLog;
                let checked = event.args.checked;
                if (checked) {
                    log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
                }
                else {
                    log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
                }
            },
            secondBtnOnChange: function (event) {
                this.clearLog();
                let log = this.$refs.eventsLog;
                let checked = event.args.checked;
                if (checked) {
                    log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
                } else {
                    log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
                }
            },
            thirdBtnOnChange: function (event) {
                this.clearLog();
                let log = this.$refs.eventsLog;
                let checked = event.args.checked;
                if (checked) {
                    log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
                } else {
                    log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
                }
            }
        }
    }
</script>

<style>
</style>