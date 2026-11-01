<template>
        <input type="password" v-bind:id="id" :value="modelValue" @input="twoWayBinding" />
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxpasswordinput.js';

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
            localization: Object,
            maxLength: Number,
            minLength: Number,
            placeHolder: String,
            passwordStrength: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            strengthColors: Object,
            showStrength: {
                default: false,
                type: Boolean
            },
            showStrengthPosition: String,
            strengthTypeRenderer: Function,
            showPasswordIcon: {
                default: true,
                type: Boolean
            },
            theme: String,
            value: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxPasswordInput" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPasswordInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPasswordInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function render() {
                JQXLite(componentSelector).jqxPasswordInput('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxPasswordInput('refresh');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('height');
                }
            }
            function _hint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('hint', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('hint');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('localization');
                }
            }
            function _maxLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('maxLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('maxLength');
                }
            }
            function _minLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('minLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('minLength');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('placeHolder');
                }
            }
            function _passwordStrength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('passwordStrength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('passwordStrength');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('rtl');
                }
            }
            function _strengthColors (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('strengthColors', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('strengthColors');
                }
            }
            function _showStrength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showStrength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showStrength');
                }
            }
            function _showStrengthPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showStrengthPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showStrengthPosition');
                }
            }
            function _strengthTypeRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('strengthTypeRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('strengthTypeRenderer');
                }
            }
            function _showPasswordIcon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showPasswordIcon', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showPasswordIcon');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('theme');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPasswordInput(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','hint','localization','maxLength','minLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','value','width'];
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
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get maxLength() {
                     return _maxLength();
                 },
                 set maxLength(newValue) {
                     _maxLength(newValue);
                 },
                 get minLength() {
                     return _minLength();
                 },
                 set minLength(newValue) {
                     _minLength(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get passwordStrength() {
                     return _passwordStrength();
                 },
                 set passwordStrength(newValue) {
                     _passwordStrength(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get strengthColors() {
                     return _strengthColors();
                 },
                 set strengthColors(newValue) {
                     _strengthColors(newValue);
                 },
                 get showStrength() {
                     return _showStrength();
                 },
                 set showStrength(newValue) {
                     _showStrength(newValue);
                 },
                 get showStrengthPosition() {
                     return _showStrengthPosition();
                 },
                 set showStrengthPosition(newValue) {
                     _showStrengthPosition(newValue);
                 },
                 get strengthTypeRenderer() {
                     return _strengthTypeRenderer();
                 },
                 set strengthTypeRenderer(newValue) {
                     _strengthTypeRenderer(newValue);
                 },
                 get showPasswordIcon() {
                     return _showPasswordIcon();
                 },
                 set showPasswordIcon(newValue) {
                     _showPasswordIcon(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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
                try { JQXLite(componentSelector).jqxPasswordInput('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxPasswordInput('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxPasswordInput(changed);
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
			})
			return {id, componentSelector, render, refresh, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
