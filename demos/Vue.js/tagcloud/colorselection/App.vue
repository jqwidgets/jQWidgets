<template>
    <div>
        <JqxTagCloud ref="myTagCloud"
            :width="600" :source="dataAdapter" :urlBase="'http://localhost/'"
            :displayMember="'country'" :valueMember="'rate'"
            :fontSizeUnit="'px'" :minFontSize="12" :maxFontSize="20"
            :minColor="'#00AA99'" :maxColor="'#FF0000'">
        </JqxTagCloud>

        <div style="float: left; margin-right: 10px;">
            <label style="margin-left: 5px; font-size: 12px; font-family: Verdana">Select Min Color</label>

            <JqxDropDownButton ref="myDropDownButton1"
                               :width="150" :height="22">
                <div style="padding: 3px">

                    <JqxColorPicker @colorchange="myColorPickerOnColorChange($event)"
                                    :width="220" :height="220" :color="'00AA99'" :colorMode="'hue'">
                    </JqxColorPicker>

                </div>
            </JqxDropDownButton>
        </div>
    
        <div style="float: left;">
            <label style="margin-left: 5px; font-size: 12px; font-family: Verdana">Select Max Color</label>

            <JqxDropDownButton ref="myDropDownButton2"
                               :width="150" :height="22">
                <div style="padding: 3px">

                    <JqxColorPicker @colorchange="myColorPicker2OnColorChange($event)"
                                    :width="220" :height="220" :color="'FF0000'" :colorMode="'hue'">
                    </JqxColorPicker>

                </div>
            </JqxDropDownButton>
        </div>
     
    </div>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';
    import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';

    export default {
        components: {
            JqxTagCloud,
            JqxDropDownButton,
            JqxColorPicker
        },
        beforeCreate: function () {
            const unemploymentRate =
                [
                    { 'country': 'Namibia', 'rate': 37.6 },
                    { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                    { 'country': 'Latvia', 'rate': 18.7 },
                    { 'country': 'Lithuania', 'rate': 17.8 },
                    { 'country': 'Estonia', 'rate': 16.9 },
                    { 'country': 'Serbia', 'rate': 16.6 },
                    { 'country': 'Georgia', 'rate': 16.5 },
                    { 'country': 'Yemen, Rep.', 'rate': 14.6 },
                    { 'country': 'Slovak Republic', 'rate': 14.4 },
                    { 'country': 'Dominican Republic', 'rate': 14.2 },
                    { 'country': 'Tunisia', 'rate': 14.2 },
                    { 'country': 'Armenia', 'rate': 28.6 },
                    { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                    { 'country': 'Lesotho', 'rate': 25.3 },
                    { 'country': 'South Africa', 'rate': 24.7 },
                    { 'country': 'Spain', 'rate': 20.1 },
                    { 'country': 'Albania', 'rate': 13.8 },
                    { 'country': 'Ireland', 'rate': 13.6 },
                    { 'country': 'Jordan', 'rate': 12.9 },
                    { 'country': 'Greece', 'rate': 12.5 }
                ];

            const source = 
                {
                    datatype: 'array',
                    localdata: unemploymentRate,
                    datafields: [
                        { name: 'country' },
                        { name: 'rate' }
                    ]
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        },
        mounted: function () {
            this.$refs.myDropDownButton1.setContent(this.getTextElementByColor(new jqx.color({ hex: '00AA99' })));
            this.$refs.myDropDownButton2.setContent(this.getTextElementByColor(new jqx.color({ hex: 'FF0000' })));
        },
        methods: {
            getTextElementByColor: function (color) {
                const colorContainer = document.createElement('div');
                colorContainer.setAttribute('style', 'text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;');

                if (color == 'transparent' || color.hex == '') {
                    return colorContainer.innerText = 'transparent';
                }

                colorContainer.innerText = '#' + color.hex;
                const nThreshold = 105;
                const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';

                colorContainer.style.color = foreColor;
                colorContainer.style.backgroundColor = '#' + color.hex;
                colorContainer.className += ' jqx-rc-all';

                return colorContainer;
            },
            myColorPickerOnColorChange: function (event) {
                this.$refs.myDropDownButton1.setContent(this.getTextElementByColor(event.args.color));
                this.$refs.myTagCloud.minColor = '#' + event.args.color.hex;
            },
            myColorPicker2OnColorChange: function (event) {
                this.$refs.myDropDownButton2.setContent(this.getTextElementByColor(event.args.color));
                this.$refs.myTagCloud.maxColor = '#' + event.args.color.hex;
            }
        }
    }
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-left: 10px;
        user-select: none;
    }
</style>