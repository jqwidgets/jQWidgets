<template>
    <div v-bind:id="id"><span><slot></slot></span></div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxcheckbox.js';

    export default {
        props: {
            modelValue: null,
            animationShowDelay: Number,
            animationHideDelay: Number,
            boxSize: String,
            checked: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            enableContainerClick: {
                default: true,
                type: Boolean
            },
            groupName: String,
            height: [Number, String],
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            locked: {
                default: false,
                type: Boolean
            },
            rtl: {
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
        emits: ["update:modelValue","checked","change","indeterminate","unchecked"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxCheckBox" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxCheckBox(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxCheckBox(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxCheckBox('check');  
            }
            function disable() {
                JQXLite(componentSelector).jqxCheckBox('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxCheckBox('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxCheckBox('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxCheckBox('focus');  
            }
            function indeterminate() {
                JQXLite(componentSelector).jqxCheckBox('indeterminate');  
            }
            function render() {
                JQXLite(componentSelector).jqxCheckBox('render');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxCheckBox('toggle');  
            }
            function uncheck() {
                JQXLite(componentSelector).jqxCheckBox('uncheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('val');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('animationShowDelay');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('animationHideDelay');
                }
            }
            function _boxSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('boxSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('boxSize');
                }
            }
            function _checked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('checked', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('checked');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('disabled');
                }
            }
            function _enableContainerClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('enableContainerClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('enableContainerClick');
                }
            }
            function _groupName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('groupName', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('groupName');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('height');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('hasThreeStates');
                }
            }
            function _locked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('locked', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('locked');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxCheckBox(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];
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
                 get animationShowDelay() {
                     return _animationShowDelay();
                 },
                 set animationShowDelay(newValue) {
                     _animationShowDelay(newValue);
                 },
                 get animationHideDelay() {
                     return _animationHideDelay();
                 },
                 set animationHideDelay(newValue) {
                     _animationHideDelay(newValue);
                 },
                 get boxSize() {
                     return _boxSize();
                 },
                 set boxSize(newValue) {
                     _boxSize(newValue);
                 },
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
                 get enableContainerClick() {
                     return _enableContainerClick();
                 },
                 set enableContainerClick(newValue) {
                     _enableContainerClick(newValue);
                 },
                 get groupName() {
                     return _groupName();
                 },
                 set groupName(newValue) {
                     _groupName(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hasThreeStates() {
                     return _hasThreeStates();
                 },
                 set hasThreeStates(newValue) {
                     _hasThreeStates(newValue);
                 },
                 get locked() {
                     return _locked();
                 },
                 set locked(newValue) {
                     _locked(newValue);
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
                if (v === undefined) return;
                __syncingModel__ = true;
                try { JQXLite(componentSelector).jqxCheckBox('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxCheckBox('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('checked', function (event) { that.emit('checked', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('indeterminate', function (event) { that.emit('indeterminate', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxCheckBox(changed);
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
				try { element.jqxCheckBox('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, check, disable, destroy, enable, focus, indeterminate, render, toggle, uncheck, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
