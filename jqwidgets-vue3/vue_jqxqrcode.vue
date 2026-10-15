<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxqrcode.js';

    export default {
        props: {
            backgroundColor: String,
            displayLabel: {
                default: false,
                type: Boolean
            },
            embedImage: String,
            errorLevel: String,
            imageHeight: Number,
            imageWidth: Number,
            labelColor: String,
            labelFont: String,
            labelFontSize: Number,
            labelMarginBottom: Number,
            labelMarginTop: Number,
            labelPosition: String,
            lineColor: String,
            squareWidth: Number,
            renderAs: String,
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["invalid"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxQRcode" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxQRcode(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxQRcode(usedProps[i]);
                }
                return resultToReturn;
            }
            function export_(format, fileName) {
                return JQXLite(componentSelector).jqxQRcode('export', format, fileName);  
            }
            function getDataURL(format) {
                return JQXLite(componentSelector).jqxQRcode('getDataURL', format);  
            }
            function getDataURLAsync(format) {
                return JQXLite(componentSelector).jqxQRcode('getDataURLAsync', format);  
            }
            function isValid() {
                return JQXLite(componentSelector).jqxQRcode('isValid');  
            }
            function _backgroundColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('backgroundColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('backgroundColor');
                }
            }
            function _displayLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('displayLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('displayLabel');
                }
            }
            function _embedImage (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('embedImage', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('embedImage');
                }
            }
            function _errorLevel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('errorLevel', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('errorLevel');
                }
            }
            function _imageHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('imageHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('imageHeight');
                }
            }
            function _imageWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('imageWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('imageWidth');
                }
            }
            function _labelColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelColor');
                }
            }
            function _labelFont (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelFont', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelFont');
                }
            }
            function _labelFontSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelFontSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelFontSize');
                }
            }
            function _labelMarginBottom (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelMarginBottom', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelMarginBottom');
                }
            }
            function _labelMarginTop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelMarginTop', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelMarginTop');
                }
            }
            function _labelPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('labelPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('labelPosition');
                }
            }
            function _lineColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('lineColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('lineColor');
                }
            }
            function _squareWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('squareWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('squareWidth');
                }
            }
            function _renderAs (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('renderAs', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('renderAs');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxQRcode('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxQRcode('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxQRcode(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['backgroundColor','displayLabel','embedImage','errorLevel','imageHeight','imageWidth','labelColor','labelFont','labelFontSize','labelMarginBottom','labelMarginTop','labelPosition','lineColor','squareWidth','renderAs','value'];
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
                 get backgroundColor() {
                     return _backgroundColor();
                 },
                 set backgroundColor(newValue) {
                     _backgroundColor(newValue);
                 },
                 get displayLabel() {
                     return _displayLabel();
                 },
                 set displayLabel(newValue) {
                     _displayLabel(newValue);
                 },
                 get embedImage() {
                     return _embedImage();
                 },
                 set embedImage(newValue) {
                     _embedImage(newValue);
                 },
                 get errorLevel() {
                     return _errorLevel();
                 },
                 set errorLevel(newValue) {
                     _errorLevel(newValue);
                 },
                 get imageHeight() {
                     return _imageHeight();
                 },
                 set imageHeight(newValue) {
                     _imageHeight(newValue);
                 },
                 get imageWidth() {
                     return _imageWidth();
                 },
                 set imageWidth(newValue) {
                     _imageWidth(newValue);
                 },
                 get labelColor() {
                     return _labelColor();
                 },
                 set labelColor(newValue) {
                     _labelColor(newValue);
                 },
                 get labelFont() {
                     return _labelFont();
                 },
                 set labelFont(newValue) {
                     _labelFont(newValue);
                 },
                 get labelFontSize() {
                     return _labelFontSize();
                 },
                 set labelFontSize(newValue) {
                     _labelFontSize(newValue);
                 },
                 get labelMarginBottom() {
                     return _labelMarginBottom();
                 },
                 set labelMarginBottom(newValue) {
                     _labelMarginBottom(newValue);
                 },
                 get labelMarginTop() {
                     return _labelMarginTop();
                 },
                 set labelMarginTop(newValue) {
                     _labelMarginTop(newValue);
                 },
                 get labelPosition() {
                     return _labelPosition();
                 },
                 set labelPosition(newValue) {
                     _labelPosition(newValue);
                 },
                 get lineColor() {
                     return _lineColor();
                 },
                 set lineColor(newValue) {
                     _lineColor(newValue);
                 },
                 get squareWidth() {
                     return _squareWidth();
                 },
                 set squareWidth(newValue) {
                     _squareWidth(newValue);
                 },
                 get renderAs() {
                     return _renderAs();
                 },
                 set renderAs(newValue) {
                     _renderAs(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('invalid', function (event) { that.emit('invalid', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxQRcode(changed);
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
			return {id, componentSelector, export: export_, getDataURL, getDataURLAsync, isValid, setOptions, options, getOptions, createComponent};
        },
    }
</script>
