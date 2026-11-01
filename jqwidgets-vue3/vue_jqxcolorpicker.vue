<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxdropdownbutton.js';
    import '../jqwidgets/jqxradiobutton.js';
    import '../jqwidgets/jqxcolorpicker.js';

    export default {
        props: {
            color: String,
            colorMode: String,
            colorBarString: String,
            colorMapString: String,
            disabled: {
                default: false,
                type: Boolean
            },
            hexString: String,
            redString: String,
            greenString: String,
            blueString: String,
            height: [Number, String],
            showTransparent: {
                default: false,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["colorchange"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxColorPicker" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('val');
                }
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
            function _colorBarString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('colorBarString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('colorBarString');
                }
            }
            function _colorMapString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('colorMapString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('colorMapString');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('disabled');
                }
            }
            function _hexString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('hexString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('hexString');
                }
            }
            function _redString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('redString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('redString');
                }
            }
            function _greenString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('greenString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('greenString');
                }
            }
            function _blueString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('blueString', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('blueString');
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
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxColorPicker('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxColorPicker('theme');
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['color','colorMode','colorBarString','colorMapString','disabled','hexString','redString','greenString','blueString','height','showTransparent','theme','width'];
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
                 get colorBarString() {
                     return _colorBarString();
                 },
                 set colorBarString(newValue) {
                     _colorBarString(newValue);
                 },
                 get colorMapString() {
                     return _colorMapString();
                 },
                 set colorMapString(newValue) {
                     _colorMapString(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get hexString() {
                     return _hexString();
                 },
                 set hexString(newValue) {
                     _hexString(newValue);
                 },
                 get redString() {
                     return _redString();
                 },
                 set redString(newValue) {
                     _redString(newValue);
                 },
                 get greenString() {
                     return _greenString();
                 },
                 set greenString(newValue) {
                     _greenString(newValue);
                 },
                 get blueString() {
                     return _blueString();
                 },
                 set blueString(newValue) {
                     _blueString(newValue);
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
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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
			// The props that changed, and only those (arrays and objects by reference): all of
			// them again, on every update, reset the widget (JqxGrid bound its source again and
			// showed "Loading...", JqxDropDownList went back to its selectedIndex).
			watch(__manageProps__, (widgetOptions) => {
				if (!__hasJQXLite__ || !__created__) return;
				const changed = {};
				let hasChanges = false;
				for (const key in widgetOptions) {
					if (!Object.is(widgetOptions[key], __appliedProps__[key])) {
						changed[key] = widgetOptions[key];
						hasChanges = true;
					}
				}
				// new data resets the widget's selection: the selection the props ask for goes with it
				if ('source' in changed) {
					for (const key of ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']) {
						if (!(key in changed) && widgetOptions[key] !== undefined) changed[key] = widgetOptions[key];
					}
				}
				__appliedProps__ = widgetOptions;
				if (hasChanges) JQXLite(componentSelector).jqxColorPicker(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
			})
			return {id, componentSelector, getColor, setColor, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
