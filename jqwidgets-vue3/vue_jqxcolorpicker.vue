<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxdropdownbutton.js';
    import '../jqwidgets/jqxradiobutton.js';
    import '../jqwidgets/jqxcolorpicker.js';

    export default {
        props: {
            color: String,
            colorMode: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            showTransparent: {
                default: false,
                type: Boolean
            },
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["colorchange"],
        setup(props, context) {
			const id = "jqxColorPicker" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxColorPicker(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxColorPicker(usedProps[i]);
                }
                return resultToReturn;
            }
            function getColor() {
                return JQXLite(componentSelector).jqxColorPicker('getColor');  
            }
            function setColor(color) {
                JQXLite(componentSelector).jqxColorPicker('setColor', color);  
            }
            function _color (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('color', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('color');
                }
            }
            function _colorMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('colorMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('colorMode');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('height');
                }
            }
            function _showTransparent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('showTransparent', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('showTransparent');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxColorPicker(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['color','colorMode','disabled','height','showTransparent','width'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get color() {
                     return _color();
                 },
                 set color(newValue) {
                     _color(newValue);
                 },
                 get colorMode() {
                     return _colorMode();
                 },
                 set colorMode(newValue) {
                     _colorMode(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get showTransparent() {
                     return _showTransparent();
                 },
                 set showTransparent(newValue) {
                     _showTransparent(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('colorchange', function (event) { that.emit('colorchange', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxColorPicker(widgetOptions);
			})
			return {id, componentSelector, getColor,setColor, setOptions, options, getOptions, createComponent};
        },
    }
</script>
