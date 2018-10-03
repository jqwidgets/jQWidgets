<template>
    <div>
        <JqxBulletChart ref="myBulletChart" style="float: left; margin-left: 10px"
                        :width="getWidth" :height="80" :barSize="'40%'" :ranges="ranges" :ticks="ticks"
                        :title="'Revenue 2014 YTD'" :description="'(U.S. $ in thousands)'" :animationDuration="0"
                        :pointer="pointer" :target="target" :labelsFormat="'c'" :showToolTip="true">
        </JqxBulletChart>
        <JqxExpander style="float: left; margin-left: 60px"
                     :width="210" :height="550" :toggleMode="'none'" :showArrow="false">

            <div>jqxBulletChart Settings</div>
            <div>
                <div style="padding: 5px">
                    <JqxCheckBox ref="showLabelsCheckbox" @change="showLabelsCheckboxChange($event)" :checked="true">Show Labels</JqxCheckBox>
                    <ul style="list-style: none;padding: 0; margin-top: 10px; margin-left: 20px; font-family: Verdana; font-size: 12px">
                        <li>
                            <JqxRadioButton ref="nearRadio" @checked="nearRadioChecked()" :checked="false" :groupName="'position'">Near</JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton ref="farRadio" @checked="farRadioChecked()" :checked="false" :groupName="'position'" style="margin-top: 5px">Far</JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton ref="bothRadio" @checked="bothRadioChecked()" :checked="true" :groupName="'position'" style="margin-top: 5px">Both</JqxRadioButton>
                        </li>
                    </ul>
                    <br />
                    <div>Labels Format:</div>
                    <ul style="list-style: none; padding: 0; margin-top: 10px; margin-left: 20px; font-family: Verdana; font-size: 12px">
                        <li>
                            <JqxRadioButton ref="currencyRadio" @checked="currencyRadioChecked()" :checked="true" :groupName="'format'">Currency</JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton ref="percentRadio" @checked="percentRadioChecked()" :checked="false" :groupName="'format'" style="margin-top: 5px">Percent</JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton ref="noneRadio" @checked="noneRadioChecked()" :checked="false" :groupName="'format'" style="margin-top: 5px">None</JqxRadioButton>
                        </li>
                    </ul>
                    <br />
                    <JqxCheckBox ref="enableAnimationCheckbox" @change="enableAnimationCheckboxChange($event)" :checked="false">Enable Animation</JqxCheckBox>
                    <br />
                    <div>Pointer Value:</div>
                    <JqxSlider ref="valueSlider" @change="valueSliderChange($event)" style="padding-left: 5px"
                               :width="175" :min="0" :max="300" :step="10" :showTicks="false"
                               :mode="'fixed'" :showButtons="false" :value="270">
                    </JqxSlider>
                    <br />
                    <div>Pointer Color:</div>
                    <JqxDropDownList ref="pointerDropDownList" @change="pointerDropDownListChange($event)"
                                     :width="'100%'" :height="25" :selectedIndex="4"
                                     :source="colorChoices" :autoDropDownHeight="true">
                    </JqxDropDownList>
                    <br />
                    <div>Target Color:</div>
                    <JqxDropDownList ref="targetDropDownList" @change="targetDropDownListChange($event)"
                                     :width="'100%'" :height="25" :selectedIndex="4"
                                     :source="colorChoices" :autoDropDownHeight="true">
                    </JqxDropDownList>
                    <br />
                    <JqxCheckBox ref="disabledCheckbox" @change="disabledCheckboxChange($event)" :checked="false" style="margin-bottom: 5px">Disabled</JqxCheckBox>
                    <JqxCheckBox ref="rtlCheckbox" @change="rtlCheckboxChange($event)" :checked="false">Right-to-Left</JqxCheckBox>
                </div>
            </div>
        </JqxExpander>
    </div>
</template>

<script>
    import JqxBulletChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbulletchart.vue';
    import JqxExpander from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';
    import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue';
    import JqxSlider from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxBulletChart,
            JqxExpander,
            JqxCheckBox,
            JqxRadioButton,
            JqxSlider,
            JqxDropDownList
        },
        data: function () {
            return {
                getWidth: '90%',
                ranges: [
                    { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
                    { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
                    { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
                ],
                pointer: { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: '' },
                target: { value: 260, label: 'Revenue 2013 YTD', size: 4, color: '' },
                ticks: { position: 'both', interval: 50, size: 10 },
                colorChoices: ['Black', 'Red', 'Green', 'Blue', 'From theme']
            }
        },
        methods: {
            showLabelsCheckboxChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.nearRadio.enable();
                    this.$refs.farRadio.enable();
                    this.$refs.bothRadio.enable();

                    if (this.$refs.nearRadio.checked === true) {
                        this.$refs.myBulletChart.ticks = { position: 'near' };
                    }
                    else if (this.$refs.farRadio.checked === true) {
                        this.$refs.myBulletChart.ticks = { position: 'far' };
                    }
                    else {
                        this.$refs.myBulletChart.ticks = { position: 'both' };
                    }
                }
                else {
                    this.$refs.myBulletChart.ticks = { position: 'none' };
                    this.$refs.nearRadio.disable();
                    this.$refs.farRadio.disable();
                    this.$refs.bothRadio.disable();
                }
            },

            nearRadioChecked: function () {
                this.$refs.myBulletChart.ticks = { position: 'near' };
            }, farRadioChecked: function () {
                this.$refs.myBulletChart.ticks = { position: 'far' };
            },
            bothRadioChecked: function () {
                this.$refs.myBulletChart.ticks = { position: 'both' };
            },
            currencyRadioChecked: function () {
                this.$refs.myBulletChart.labelsFormat = 'c';
            },
            percentRadioChecked: function () {
                this.$refs.myBulletChart.labelsFormat = 'p';
            },
            noneRadioChecked: function () {
                this.$refs.myBulletChart.labelsFormat = null;
            },
            enableAnimationCheckboxChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.myBulletChart.animationDuration = 400;
                }
                else {
                    this.$refs.myBulletChart.animationDuration = 0;
                }
            },
            valueSliderChange: function (event) {
                let value = event.args.value;
                this.$refs.myBulletChart.val(value);
            },
            pointerDropDownListChange: function (event) {
                let choice = event.args.item.label;
                let newColor;
                if (choice != 'From theme') {
                    newColor = choice;
                }
                else {
                    newColor = '';
                }
                this.$refs.myBulletChart.pointer = { color: newColor };
            },
            targetDropDownListChange: function (event) {
                let choice = event.args.item.label;
                let newColor;
                if (choice != 'From theme') {
                    newColor = choice;
                }
                else {
                    newColor = '';
                }
                this.$refs.myBulletChart.target = { color: newColor };
            },
            disabledCheckboxChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.myBulletChart.disabled = true;
                }
                else {
                    this.$refs.myBulletChart.disabled = false;
                }
            },
            rtlCheckboxChange: function (event) {
                let checked = event.args.checked;
                if (checked) {
                    this.$refs.myBulletChart.rtl = true;
                }
                else {
                    this.$refs.myBulletChart.rtl = false;
                }
            }
        }
    }
</script>

<style>
</style>