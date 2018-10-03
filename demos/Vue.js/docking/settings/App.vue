<template>
    <div>
        <div style="float: left">
            <JqxDocking ref="myDocking"
                        :width="420" :orientation="'horizontal'" :mode="'default'"
                        :windowsMode="{ window0: 'floating' }">
                <div id='panel0'>
                    <div id='window0' style="height: 70px; width: 220px">
                        <div>VueDock2</div>
                        <div>You cannot drop this object.</div>
                    </div>
                    <div id='window1' style="height: 70px; width: 100px">
                        <div>VueDock1</div>
                        <div>You cannot drag this object.</div>
                    </div>
                </div>
                <div id='panel1'>
                    <div id='window2' style="height: 70px; width: 100px">
                        <div>VueDock3</div>
                        <div>You can drag and drop this object.</div>
                    </div>
                    <div id='window3' style="height: 70px; width: 100px">
                        <div>VueDock4</div>
                        <div>You can drag and drop this object.</div>
                    </div>
                </div>
            </JqxDocking>
        </div>

        <div style="float: left; margin-top: 30px">
            <span style="margin-left: 20px; margin-top: 20px; margin-bottom: 30px">Settings</span>
            <table style="margin-left: 20px; margin-top: 20px; margin-bottom: 30px">
                <tr>
                    <td>
                        <JqxCheckBox ref="collapseButtonsCheckbox" @change="collapseButtonsCheckboxOnChange()"
                                     :width="200" :checked="true">
                            Collapse Buttons
                        </JqxCheckBox>
                    </td>
                    <td>
                        <JqxButton @click="moveButtonOnClick()">Move VueDock4 To Left Zone</JqxButton>
                    </td>
                </tr>
                <tr>
                    <td>
                        <JqxCheckBox ref="closeButtonsCheckbox" @change="closeButtonsCheckboxOnChange()"
                                     :width="200">
                            Close Buttons
                        </JqxCheckBox>
                    </td>
                    <td>
                        <JqxButton @click="collapseButtonOnClick()">Collapse VueDock1</JqxButton>
                    </td>
                </tr>
                <tr>
                    <td>
                        <JqxCheckBox @change="disabledCheckboxOnChange()" :width="200">Disabled</JqxCheckBox>
                    </td>
                    <td>
                        <JqxButton @click="expandButtonOnClick()">Expand VueDock1</JqxButton>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100px">
                        <span style="font-family: Verdana; font-size: 13px">Windows Margin</span>
                        <JqxSlider @change="mySliderOnChange($event)"
                                   :width="200" :max="9" :value="5" :mode="'fixed'" :ticksFrequency="1">
                        </JqxSlider>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import JqxDocking from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdocking.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxDocking,
            JqxCheckBox,
            JqxButton,
            JqxSlider
        },
        mounted: function () {
            this.$refs.myDocking.setWindowPosition('window0', 100, 100);
            this.$refs.myDocking.pinWindow('window1');
            this.$refs.myDocking.hideAllCloseButtons();
            this.$refs.myDocking.showAllCollapseButtons();
        },
        methods: {
            collapseButtonsCheckboxOnChange: function() {
                let checked = this.$refs.collapseButtonsCheckbox.checked;
                if (checked) {
                    this.$refs.myDocking.showAllCollapseButtons();
                } else {
                    this.$refs.myDocking.hideAllCollapseButtons();
                }
            },
            closeButtonsCheckboxOnChange: function() {
                let checked = this.$refs.closeButtonsCheckbox.checked;
                if (checked) {
                    this.$refs.myDocking.showAllCloseButtons();
                } else {
                    this.$refs.myDocking.hideAllCloseButtons();
                }
            },
            disabledCheckboxOnChange: function() {
                let disabled = this.$refs.myDocking.disabled;
                if (disabled) {
                    this.$refs.myDocking.enable();
                } else {
                    this.$refs.myDocking.disable();
                }
            },
            moveButtonOnClick: function() {
                this.$refs.myDocking.move('window3', 0, 1);
            },
            collapseButtonOnClick: function() {
                this.$refs.myDocking.collapseWindow('window1');
            },
            expandButtonOnClick: function() {
                this.$refs.myDocking.expandWindow('window1');
            },
            mySliderOnChange: function (event) {
                this.$refs.myDocking.windowsOffset = event.args.value;
            }
        }
    };
</script>

<style>
</style>