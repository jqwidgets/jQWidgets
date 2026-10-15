<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbarcode.js';

    export default {
        props: {
            backgroundColor: String,
            displayLabel: {
                default: true,
                type: Boolean
            },
            labelColor: String,
            labelFont: String,
            labelFontSize: Number,
            labelMarginBottom: Number,
            labelMarginTop: Number,
            labelPosition: String,
            lineColor: String,
            lineHeight: Number,
            lineWidth: Number,
            renderAs: String,
            type: String,
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["invalid"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxBarcode" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxBarcode(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxBarcode(usedProps[i]);
                }
                return resultToReturn;
            }
            function export_(format, fileName) {
                return JQXLite(componentSelector).jqxBarcode('export', format, fileName);  
            }
            function getDataURL(format) {
                return JQXLite(componentSelector).jqxBarcode('getDataURL', format);  
            }
            function getDataURLAsync(format) {
                return JQXLite(componentSelector).jqxBarcode('getDataURLAsync', format);  
            }
            function isValid() {
                return JQXLite(componentSelector).jqxBarcode('isValid');  
            }
            function _backgroundColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('backgroundColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('backgroundColor');
                }
            }
            function _displayLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('displayLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('displayLabel');
                }
            }
            function _labelColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelColor');
                }
            }
            function _labelFont (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelFont', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelFont');
                }
            }
            function _labelFontSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelFontSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelFontSize');
                }
            }
            function _labelMarginBottom (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelMarginBottom', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelMarginBottom');
                }
            }
            function _labelMarginTop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelMarginTop', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelMarginTop');
                }
            }
            function _labelPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('labelPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('labelPosition');
                }
            }
            function _lineColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('lineColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('lineColor');
                }
            }
            function _lineHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('lineHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('lineHeight');
                }
            }
            function _lineWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('lineWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('lineWidth');
                }
            }
            function _renderAs (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('renderAs', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('renderAs');
                }
            }
            function _type (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('type', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('type');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarcode('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarcode('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxBarcode(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['backgroundColor','displayLabel','labelColor','labelFont','labelFontSize','labelMarginBottom','labelMarginTop','labelPosition','lineColor','lineHeight','lineWidth','renderAs','type','value'];
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
                 get lineHeight() {
                     return _lineHeight();
                 },
                 set lineHeight(newValue) {
                     _lineHeight(newValue);
                 },
                 get lineWidth() {
                     return _lineWidth();
                 },
                 set lineWidth(newValue) {
                     _lineWidth(newValue);
                 },
                 get renderAs() {
                     return _renderAs();
                 },
                 set renderAs(newValue) {
                     _renderAs(newValue);
                 },
                 get type() {
                     return _type();
                 },
                 set type(newValue) {
                     _type(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxBarcode(changed);
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
