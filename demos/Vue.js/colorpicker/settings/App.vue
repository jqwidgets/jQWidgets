<template>
    <div>
        <JqxColorPicker ref="myColorPicker" @colorchange="colorChanged($event)"
                        :width="250" :height="250">
        </JqxColorPicker>

        <div style="font-size: 13px; font-family: Verdana; margin-top: 10px">
            <div style="margin-bottom: 5px">Color Modes</div>

            <JqxRadioButton :width="180" :height="25" :checked="true">
                Saturation Color Mode
            </JqxRadioButton>

            <JqxRadioButton @change="hueModeChanged($event)"
                            :width="180" :height="25">
                Hue Color Mode
            </JqxRadioButton>
        </div>

        <div ref="colorLog" style="font-size: 13px; font-family: Verdana"></div>
    </div>
</template>

<script>
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';
    import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue';

    export default {
        components: {
            JqxColorPicker,
            JqxRadioButton
        },
        methods: {
            colorChanged: function (event) {
                this.$refs.colorLog.innerHTML = `<div>Color: #${event.args.color.hex}</div>`;
            },
            hueModeChanged: function (event) {
                if (event.args.checked) {
                    this.$refs.myColorPicker.colorMode = 'hue';
                }
                else {
                    this.$refs.myColorPicker.colorMode = 'saturation';
                }
            }
        }
    }
</script>

<style>
</style>