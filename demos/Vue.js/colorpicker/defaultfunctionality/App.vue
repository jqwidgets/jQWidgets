<template>
    <div>
        <JqxScrollView :width="500" :height="350" :slideShow='true' :showButtons='false'>
            <div>
                <div class="photo" style="background-image: url(../../../images/imageNature1.jpg)"></div>
            </div>
            <div>
                <div class="photo" style="background-image: url(../../../images/imageNature2.jpg)"></div>
            </div>
            <div>
                <div class="photo" style="background-image: url(../../../images/imageNature3.jpg)"></div>
            </div>
            <div>
                <div class="photo" style="background-image: url(../../../images/imageNature4.jpg)"></div>
            </div>
            <div>
                <div class="photo" style="background-image: url(../../../images/imageNature5.jpg)"></div>
            </div>
        </JqxScrollView>

        <br />
        <label style="margin-left: 5px; font-size: 12px; font-family: Verdana;">
            Select Frame color
        </label>
        <br />

        <JqxDropDownButton ref="myDropDown" style="margin: 3px; float: left"
                           :width="150" :height="22">
            <div style="padding: 3px;">

                <JqxColorPicker @colorchange="colorPickerEvent($event)"
                                :width="220" :height="220" :colorMode='"hue"'>
                </JqxColorPicker>

            </div>
        </JqxDropDownButton>
    </div>
</template>

<script>
    import JqxScrollView from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxscrollview.vue';
    import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';

    export default {
        components: {
            JqxScrollView,
            JqxDropDownButton,
            JqxColorPicker
        },
        mounted: function () {
            this.$refs.myDropDown.setContent(this.getTextElementByColor({ hex: "FFAABB" }));
        },
        methods: {
            getTextElementByColor: function (color) {
                if (color == 'transparent' || color.hex == "") {
                    return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
                }
                let nThreshold = 105;
                let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                let element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
                return element;
            },
            colorPickerEvent: function (event) {
                this.$refs.myDropDown.setContent(this.getTextElementByColor(event.args.color));
                this.$el.querySelector('.jqx-scrollview').style.borderColor = '#' + event.args.color.hex;
            }
        }
    }
</script>

<style>
    .photo {
        width: 500px;
        height: 350px;
        background-color: #000;
        background-position: center;
        background-repeat: no-repeat;
    }

    .jqx-scrollview {
        border: 15px solid #ffaabb;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
</style>