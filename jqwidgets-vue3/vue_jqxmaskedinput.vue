<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxmaskedinput.js';

    export default {
        props: {
            modelValue: null,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            hint: {
                default: true,
                type: Boolean
            },
            mask: String,
            placeHolder: String,
            promptChar: String,
            readOnly: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            template: String,
            theme: String,
            textAlign: String,
            value: [String, Number],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","valueChanged"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxMaskedInput" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxMaskedInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxMaskedInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function clear() {
                JQXLite(componentSelector).jqxMaskedInput('clear');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxMaskedInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxMaskedInput('focus');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('height');
                }
            }
            function _hint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('hint', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('hint');
                }
            }
            function _mask (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('mask', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('mask');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('placeHolder');
                }
            }
            function _promptChar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('promptChar', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('promptChar');
                }
            }
            function _readOnly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('readOnly', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('readOnly');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('rtl');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('theme');
                }
            }
            function _textAlign (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('textAlign', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('textAlign');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxMaskedInput(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','hint','mask','placeHolder','promptChar','readOnly','rtl','template','theme','textAlign','value','width'];
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
                 get hint() {
                     return _hint();
                 },
                 set hint(newValue) {
                     _hint(newValue);
                 },
                 get mask() {
                     return _mask();
                 },
                 set mask(newValue) {
                     _mask(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get promptChar() {
                     return _promptChar();
                 },
                 set promptChar(newValue) {
                     _promptChar(newValue);
                 },
                 get readOnly() {
                     return _readOnly();
                 },
                 set readOnly(newValue) {
                     _readOnly(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get textAlign() {
                     return _textAlign();
                 },
                 set textAlign(newValue) {
                     _textAlign(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            let __model__, __syncingModel__ = false;
            function __pushModel__() {
                const v = props.modelValue;
                __model__ = v;
                if (v === undefined || v === null) return;
                __syncingModel__ = true;
                try { JQXLite(componentSelector).jqxMaskedInput('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxMaskedInput('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); twoWayBinding(); });
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
				if (hasChanges) JQXLite(componentSelector).jqxMaskedInput(changed);
				if ('source' in changed) __pushModel__();
			}, { flush: 'post' });
			// v-model: a model changed outside goes into the widget
			watch(() => props.modelValue, (value) => {
				if (__hasJQXLite__ && __created__ && value !== __model__) __pushModel__();
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxMaskedInput('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, clear, destroy, focus, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
