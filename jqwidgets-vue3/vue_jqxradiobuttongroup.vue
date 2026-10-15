<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxradiobutton.js';
    import '../jqwidgets/jqxradiobuttongroup.js';

    export default {
        props: {
            change: Function,
            disabled: {
                default: false,
                type: Boolean
            },
            items: null,
            value: null,
            layout: String,
            labelPosition: String,
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxRadioButtonGroup" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRadioButtonGroup(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRadioButtonGroup(usedProps[i]);
                }
                return resultToReturn;
            }
            function getValue() {
                return JQXLite(componentSelector).jqxRadioButtonGroup('getValue');  
            }
            function getValueAt(index) {
                return JQXLite(componentSelector).jqxRadioButtonGroup('getValueAt', index);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('enableAt', index);  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('disableAt', index);  
            }
            function checkAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('checkAt', index);  
            }
            function uncheckAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckAt', index);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckAll');  
            }
            function checkValue(value) {
                JQXLite(componentSelector).jqxRadioButtonGroup('checkValue', value);  
            }
            function uncheckValue(value) {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckValue', value);  
            }
            function disable() {
                JQXLite(componentSelector).jqxRadioButtonGroup('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxRadioButtonGroup('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxRadioButtonGroup('enable');  
            }
            function render() {
                JQXLite(componentSelector).jqxRadioButtonGroup('render');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('val');
                }
            }
            function _change (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('change', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('change');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('disabled');
                }
            }
            function _items (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('items', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('items');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('value');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('layout');
                }
            }
            function _labelPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('labelPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('labelPosition');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRadioButtonGroup(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['change','disabled','items','value','layout','labelPosition','rtl','theme'];
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
                 get change() {
                     return _change();
                 },
                 set change(newValue) {
                     _change(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get items() {
                     return _items();
                 },
                 set items(newValue) {
                     _items(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get layout() {
                     return _layout();
                 },
                 set layout(newValue) {
                     _layout(newValue);
                 },
                 get labelPosition() {
                     return _labelPosition();
                 },
                 set labelPosition(newValue) {
                     _labelPosition(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

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
				if (hasChanges) JQXLite(componentSelector).jqxRadioButtonGroup(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxRadioButtonGroup('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, getValue, getValueAt, enableAt, disableAt, checkAt, uncheckAt, uncheckAll, checkValue, uncheckValue, disable, destroy, enable, render, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
