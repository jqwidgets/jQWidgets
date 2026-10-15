<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxswitchbutton.js';

    export default {
        props: {
            modelValue: null,
            checked: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            orientation: String,
            onLabel: String,
            offLabel: String,
            theme: String,
            thumbSize: String,
            rtl: {
                default: false,
                type: Boolean
            },
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","checked","change","unchecked"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxSwitchButton" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSwitchButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSwitchButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxSwitchButton('check');  
            }
            function disable() {
                JQXLite(componentSelector).jqxSwitchButton('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxSwitchButton('enable');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxSwitchButton('toggle');  
            }
            function uncheck() {
                JQXLite(componentSelector).jqxSwitchButton('uncheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('val');
                }
            }
            function _checked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('checked', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('checked');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('height');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('orientation');
                }
            }
            function _onLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('onLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('onLabel');
                }
            }
            function _offLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('offLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('offLabel');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('theme');
                }
            }
            function _thumbSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('thumbSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('thumbSize');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('rtl');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSwitchButton(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['checked','disabled','height','orientation','onLabel','offLabel','theme','thumbSize','rtl','width'];
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
                 get checked() {
                     return _checked();
                 },
                 set checked(newValue) {
                     _checked(newValue);
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
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get onLabel() {
                     return _onLabel();
                 },
                 set onLabel(newValue) {
                     _onLabel(newValue);
                 },
                 get offLabel() {
                     return _offLabel();
                 },
                 set offLabel(newValue) {
                     _offLabel(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get thumbSize() {
                     return _thumbSize();
                 },
                 set thumbSize(newValue) {
                     _thumbSize(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
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
                try { JQXLite(componentSelector).jqxSwitchButton('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxSwitchButton('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('checked', function (event) { that.emit('checked', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('unchecked', function (event) { that.emit('unchecked', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxSwitchButton(changed);
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
			return {id, componentSelector, check, disable, enable, toggle, uncheck, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
