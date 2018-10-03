<template>
    <div>
        <JqxToolbar ref="myToolbar"
            :width="getWidth" :height="35"
            :tools="tools" :initTools="initTools">
        </JqxToolbar>

        <div class="text">
            Modify the shape by changing the options in the toolbar
        </div>

        <div ref="shape" class="shape"></div>
    </div>
</template>

<script>
    import JqxToolbar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtoolbar.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';

    export default {
        components: {
            JqxToolbar,
            JqxColorPicker
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'input | input | dropdownlist | custom'
            }
        },
        methods: {
            initTools: function (type, index, tool, menuToolIninitialization) {
                switch (index) {
                    case 0:
                        tool.jqxInput({ width: 130, placeHolder: 'Enter width...' });
                        tool.on('change', () => {
                            this.$refs.shape.style.width = tool.val() + 'px';
                        });
                        break;
                    case 1:
                        tool.jqxInput({ width: 130, placeHolder: 'Enter height...' });
                        tool.on('change', () => {
                            this.$refs.shape.style.height = tool.val() + 'px';
                        });
                        break;
                    case 2:
                        tool.jqxDropDownList({ width: 130, source: ['square', 'circle'], placeHolder: 'Choose shape...' });
                        tool.on('change', (event) => {
                            const args = event.args;
                            if (args) {
                                let label = args.item.label;
                                if (label == 'square') {
                                    this.$refs.shape.style.borderRadius = 0;
                                } else {
                                    this.$refs.shape.style.borderRadius = '50%';
                                }
                            }
                        });
                        break;
                    case 3:
                        tool.append("<div style='padding: 3px;'><div></div></div>");
                        const colorPicker = tool.children().children();
                        colorPicker.on('colorchange', (event) => {
                            tool.jqxDropDownButton('setContent', this.getTextElementByColor(event.args.color));
                            this.$refs.shape.style.backgroundColor = '#' + event.args.color.hex;
                        });
                        colorPicker.jqxColorPicker({ color: '0F2B70', colorMode: 'hue', width: 220, height: 220 });
                        tool.jqxDropDownButton({ width: 130, height: 21 });
                        tool.jqxDropDownButton('setContent', this.getTextElementByColor(new jqx.color({ hex: '0F2B70' })));
                        break;
                }
            },
            getTextElementByColor: function (color) {
                if (color == 'transparent' || color.hex == '') {
                    return $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>transparent</div>");
                }
                const element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + color.hex + "</div>");
                const nThreshold = 105;
                const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                element.css('color', foreColor);
                element.css('background', '#' + color.hex);
                element.addClass('jqx-rc-all');

                return element;
            }
        }
    }
</script>

<style>
    .text {
        margin-top: 20px;
        margin-bottom: 50px;
        font-size: small;
        font-family: Verdana;
    }
    .shape {
        width: 200px;
        height: 200px;
        border: 1px solid #222222;
        border-radius: 50%;
        background-color: #0F2B70;
    }
</style>