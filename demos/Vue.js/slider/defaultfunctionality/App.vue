<template>
    <div style="width: 550px">
        <div style="height: 180px;">
            <div style="float: left">

                <span style="font-style: italic;">Red</span>
                <JqxSlider ref="redSlider" @change="setColor()"
                    :height="60" :min="0" :max="255" :tickLabelFormatFunction="tickLabelFormatFunction"
                    :value="0" :step="25.5" :mode="'fixed'" :tooltipFormatFunction="tooltipFormatFunction"
                    :showTickLabels="true" :tooltip="true" :ticksFrequency="25.5">
                </JqxSlider>

                <span style="font-style: italic;">Green</span>
                <JqxSlider ref="greenSlider" @change="setColor()"
                    :height="60" :min="0" :max="255" :tickLabelFormatFunction="tickLabelFormatFunction"
                    :value="0" :step="25.5" :mode="'fixed'" :tooltipFormatFunction="tooltipFormatFunction"
                    :showTickLabels="true" :tooltip="true" :ticksFrequency="25.5">
                </JqxSlider>

                <span style="font-style: italic;">Blue</span>
                <JqxSlider ref="blueSlider" @change="setColor()"
                    :height="60" :min="0" :max="255" :tickLabelFormatFunction="tickLabelFormatFunction"
                    :value="255" :step="25.5" :mode="'fixed'" :tooltipFormatFunction="tooltipFormatFunction"
                    :showTickLabels="true" :tooltip="true" :ticksFrequency="25.5">
                </JqxSlider>

            </div>
            <div class="jqx-rc-all colorBlock" id="colorBlock">
                <div id="colorLabel"></div>
            </div>
        </div>

        <JqxCheckBox @change="checkBoxOnChange($event)" :width="200" :checked="false">
            Smooth Thumb Drag
        </JqxCheckBox>
    </div>
</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxSlider,
            JqxCheckBox
        },
        mounted: function () {
            this.setColor();
        },
        methods: {
            checkBoxOnChange: function (event) {
                const checked = event.args.checked;
                const value = checked ? 'default' : 'fixed';

                this.$refs.redSlider.mode = value;
                this.$refs.greenSlider.mode = value;
                this.$refs.blueSlider.mode = value;
            },
            setColor: function () {
                const red = this.fixHex(Math.round(this.$refs.redSlider.value).toString(16)),
                    green = this.fixHex(Math.round(this.$refs.greenSlider.value).toString(16)),
                    blue = this.fixHex(Math.round(this.$refs.blueSlider.value).toString(16));

                document.querySelector('#colorBlock').style.backgroundColor = '#' + red + green + blue;
                document.querySelector('#colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();

                const color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
                document.querySelector('#colorLabel').style.color = color;
            },
            fixHex: function (hex) {
                return (hex.length < 2) ? '0' + hex : hex;
            },
            getTextElement: function (color) {
                const nThreshold = 105;
                const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                return foreColor;
            },
            tickLabelFormatFunction: function (value) {
                if (value == 0) return value;
                if (value == 255) return value;
                return "";
            },
            tooltipFormatFunction: function (value) {
                if (this.$refs.redSlider.mode === 'default') {
                    if (value < 10) return new Number(value.toPrecision(3));
                    if (value > 10 && value < 100) return new Number(value.toPrecision(4));
                    else return new Number(value.toPrecision(5));
                }
                else {
                    if (value < 10) return new Number(value.toPrecision(3));
                    if (value > 10 && value < 256) return new Number(value.toPrecision(4));
                }
            }
        }
    }
</script>

<style>
    .colorBlock {
        border: 1px solid #aaa;
        width: 200px;
        height: 200px;
        float: right;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    .colorLabel {
        padding: 6px;
    }

    .jqx-checkbox {
        position: relative;
        left: 45px;
        top: 20px;
    }
</style>