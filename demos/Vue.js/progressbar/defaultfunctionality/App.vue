<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <div style="margin-top: 10px;">Horizontal</div>

        <JqxProgressBar ref="myHorizontalProgressBar"
                        :width="250" :height="30" :value="50">
        </JqxProgressBar>

        <div style="margin-top: 10px;">Vertical</div>

        <JqxProgressBar ref="myVerticalProgressBar"
                        :width="30" :height="250" :value="50" :orientation="'vertical'">
        </JqxProgressBar>

        <br />
        <div>Enter a value between 0 and 100</div>

        <JqxInput ref="valueInputElement"></JqxInput>

        <JqxButton @click="onClick()">Update</JqxButton>

        <JqxCheckBox @change="onCheckBox($event)">
            Show Progress Text
        </JqxCheckBox>

        <JqxCheckBox ref="myRenderCheckBox" @change="onCustomTextCheckBox($event)">
            Custom Progress Text
        </JqxCheckBox>
    </div>
</template>

<script>
    import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxprogressbar.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

    export default {
        components: {
            JqxProgressBar,
            JqxInput,
            JqxButton,
            JqxCheckBox
        },
        methods: {
            renderText(text) {
                const isChecked = this.$refs.myRenderCheckBox.checked;

                if (isChecked) {
                    return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
                } else {
                    return text;
                }
            },
            getValueInput: function () {
                return parseInt(this.$refs.valueInputElement.val());
            },
            onClick: function () {
                const value = this.getValueInput();
                if (!isNaN(value)) {
                    this.valueInput = value;
                    this.$refs.myHorizontalProgressBar.val(value);
                    this.$refs.myVerticalProgressBar.val(value);
                    this.isUpdated = true;
                }
            },
            onCheckBox: function (event) {
                const value = this.getValueInput();
                if (value != null && this.isUpdated) {
                    this.$refs.myHorizontalProgressBar.value = this.valueInput;
                    this.$refs.myVerticalProgressBar.value = this.valueInput;
                }

                const isChecked = event.args.checked;
                this.$refs.myHorizontalProgressBar.showText = isChecked;
                this.$refs.myVerticalProgressBar.showText = isChecked;
            },
            onCustomTextCheckBox: function (event) {
                const value = this.getValueInput();

                if (value != null && this.isUpdated) {
                    this.$refs.myHorizontalProgressBar.value = this.valueInput;
                    this.$refs.myVerticalProgressBar.value = this.valueInput;
                }

                this.$refs.myHorizontalProgressBar.renderText = this.renderText;;
                this.$refs.myVerticalProgressBar.renderText = this.renderText;

                // Need to refresh the progressbar
                this.$refs.myHorizontalProgressBar.showText = false;
                this.$refs.myVerticalProgressBar.showText = false;
                this.$refs.myHorizontalProgressBar.showText = true;
                this.$refs.myVerticalProgressBar.showText = true;
            }
        }
    }
</script>

<style>
    .jqx-button {
        display: inline-block;
    }
</style>