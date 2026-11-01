<template>
    <div v-bind:id="id" v-if="rtl">
        <div v-if="spinButtons"></div>
        <div v-if="dropDown"></div>
        <input type='text' />
    </div>
     <div v-bind:id="id" v-else>
        <input type='text' />
        <div v-if="spinButtons"></div>
        <div v-if="dropDown"></div>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxformattedinput.js';

    export default {
        props: {
            modelValue: null,
            disabled: {
                default: false,
                type: Boolean
            },
            decimalNotation: String,
            dropDown: {
                default: false,
                type: Boolean
            },
            dropDownWidth: Number,
            height: [Number, String],
            hint: {
                default: true,
                type: Boolean
            },
            min: [Number, String],
            max: [Number, String],
            placeHolder: String,
            popupZIndex: Number,
            roundedCorners: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            radix: [Number, String],
            spinButtons: {
                default: true,
                type: Boolean
            },
            spinButtonsStep: Number,
            template: String,
            theme: String,
            upperCase: {
                default: false,
                type: Boolean
            },
            value: [Number, String],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","close","open","radixChange"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxFormattedInput" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxFormattedInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxFormattedInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxFormattedInput('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxFormattedInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxFormattedInput('focus');  
            }
            function open() {
                JQXLite(componentSelector).jqxFormattedInput('open');  
            }
            function render() {
                JQXLite(componentSelector).jqxFormattedInput('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxFormattedInput('refresh');  
            }
            function selectAll() {
                JQXLite(componentSelector).jqxFormattedInput('selectAll');  
            }
            function selectFirst() {
                JQXLite(componentSelector).jqxFormattedInput('selectFirst');  
            }
            function selectLast() {
                JQXLite(componentSelector).jqxFormattedInput('selectLast');  
            }
            function val(value) {
                if (value !== undefined) {
                    if(typeof value === 'string') {                        return JQXLite(componentSelector).jqxFormattedInput('val',  value)
                    } else {
                        JQXLite(componentSelector).jqxFormattedInput('val',  value)
                }
                    JQXLite(componentSelector).jqxFormattedInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('disabled');
                }
            }
            function _decimalNotation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('decimalNotation', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('decimalNotation');
                }
            }
            function _dropDown (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('dropDown', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('dropDown');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('dropDownWidth');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('height');
                }
            }
            function _hint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('hint', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('hint');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('max');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('placeHolder');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('popupZIndex');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('rtl');
                }
            }
            function _radix (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('radix', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('radix');
                }
            }
            function _spinButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('spinButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('spinButtons');
                }
            }
            function _spinButtonsStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('spinButtonsStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('spinButtonsStep');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('theme');
                }
            }
            function _upperCase (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('upperCase', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('upperCase');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFormattedInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxFormattedInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxFormattedInput(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','decimalNotation','dropDown','dropDownWidth','height','hint','min','max','placeHolder','popupZIndex','roundedCorners','rtl','radix','spinButtons','spinButtonsStep','template','theme','upperCase','value','width'];
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
                 get decimalNotation() {
                     return _decimalNotation();
                 },
                 set decimalNotation(newValue) {
                     _decimalNotation(newValue);
                 },
                 get dropDown() {
                     return _dropDown();
                 },
                 set dropDown(newValue) {
                     _dropDown(newValue);
                 },
                 get dropDownWidth() {
                     return _dropDownWidth();
                 },
                 set dropDownWidth(newValue) {
                     _dropDownWidth(newValue);
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
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get roundedCorners() {
                     return _roundedCorners();
                 },
                 set roundedCorners(newValue) {
                     _roundedCorners(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get radix() {
                     return _radix();
                 },
                 set radix(newValue) {
                     _radix(newValue);
                 },
                 get spinButtons() {
                     return _spinButtons();
                 },
                 set spinButtons(newValue) {
                     _spinButtons(newValue);
                 },
                 get spinButtonsStep() {
                     return _spinButtonsStep();
                 },
                 set spinButtonsStep(newValue) {
                     _spinButtonsStep(newValue);
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
                 get upperCase() {
                     return _upperCase();
                 },
                 set upperCase(newValue) {
                     _upperCase(newValue);
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
                try { JQXLite(componentSelector).jqxFormattedInput('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxFormattedInput('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('radixChange', function (event) { that.emit('radixChange', event); twoWayBinding(); });
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
				if (hasChanges) JQXLite(componentSelector).jqxFormattedInput(changed);
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
				try { element.jqxFormattedInput('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, close, destroy, focus, open, render, refresh, selectAll, selectFirst, selectLast, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
